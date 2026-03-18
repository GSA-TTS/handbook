const fs = require("fs/promises");
const path = require("path");
const baseurl = require("./config/baseurl");
const cheerio = require("cheerio");

const SITE_ROOT = path.join(__dirname, "_site");

const exists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch (e) {
    return false;
  }
};

const getFiles = async (root) => {
  const fsChildren = await fs.readdir(root);

  const files = [];
  for await (const child of fsChildren) {
    const full = path.join(root, child);
    const stat = await fs.lstat(full);

    if (stat.isFile()) {
      files.push(full);
    } else if (stat.isDirectory()) {
      files.push(...(await getFiles(full)));
    }
  }

  return files.filter((file) => file.endsWith(".html"));
};

const getDom = async (file) => {
  const html = await fs.readFile(file, { encoding: "utf-8" });
  const dom = cheerio.load(html);

  const redirect = dom('meta[http-equiv="refresh"]').get().pop();
  if (redirect) {
    const [, realFile] = dom(redirect)
      .attr("content")
      .match(/url=(\S+)/i);

    // If the redirect path is to an HTTP endpoint, we don't need to load the
    // redirected DOM because it's external.
    if (realFile.startsWith("http") || realFile.startsWith("//")) {
      return dom;
    }

    const realFilePath = path.join(
      SITE_ROOT,
      // Strip off any URL hashes and remove the base URL portion to get down
      // to just the target file.
      realFile.replace(/\#.*$/, "").replace(baseurl, ""),
      path.basename(file)
    );

    const redirectedHtml = await fs.readFile(realFilePath, {
      encoding: "utf-8",
    });
    return cheerio.load(redirectedHtml);
  }

  return dom;
};

const run = async () => {
  const files = await getFiles(SITE_ROOT);

  const pagesMap = new Map();

  for await (const file of files) {
    const dom = await getDom(file);
    const ids = dom("[id]")
      .map(function () {
        return dom(this).attr("id");
      })
      .get();

    const links = dom("img[src], a[href], iframe[src], link[href], script[src]")
      .map(function () {
        return dom(this).attr("src") ?? dom(this).attr("href");
      })
      .get()
      .filter((url) => /^[#\/]/.test(url))
      // Filter out /#top anchor since that is rendered by the browser
      .filter((url) => !/#top/i.test(url));

    pagesMap.set(file, { ids, links });
  }

  console.log(`Checking ${pagesMap.size} pages...`);

  const errors = new Map();

  for (const [page, { ids, links }] of pagesMap) {
    errors.set(page, []);

    for (const link of links) {
      if (link.startsWith("/")) {
        const url = new URL(link, "https://tts.gsa.gov");
        // Normalize the pathname by stripping the configured baseurl and
        // leading slashes so path.join works reliably across platforms.
        let pathname = url.pathname.replace(baseurl, "");
        pathname = pathname.replace(/^\/+/, "");

        // If the link does not include a file extension, assume index.html
        if (!/\.[a-z0-9]+$/i.test(pathname)) {
          pathname = path.join(pathname, "index.html");
        }

        const filePath = path.join(SITE_ROOT, pathname);

        let targetFileExists = await exists(filePath);

        // If the target file isn't in the pages map (maybe due to redirects), try
        // to parse it directly as a fallback before reporting a missing file.
        if (!targetFileExists) {
          targetFileExists = await exists(filePath);
        }

        if (targetFileExists) {
          if (url.hash) {
            const targetId = url.hash.replace(/^#/, "");

            // Look up the target file's ids from the pages map; if missing,
            // parse the file to collect ids directly.
            let targetIds = pagesMap.get(filePath)?.ids;
            if (!targetIds) {
              try {
                const targetDom = await getDom(filePath);
                targetIds = targetDom("[id]")
                  .map(function () {
                    return targetDom(this).attr("id");
                  })
                  .get();
              } catch (e) {
                targetIds = [];
              }
            }

            const decodedTargetId = decodeURIComponent(targetId);
            const targetHashExists =
              targetIds.includes(targetId) || targetIds.includes(decodedTargetId);

            if (!targetHashExists) {
              errors
                .get(page)
                .push(`link to ${link} - target hash does not exist`);
            }
          }
        } else {
          errors.get(page).push(`link to ${link}: target file does not exist`);
        }
      } else {
        const targetId = link.replace(/^#/, "");
        const decodedTargetId = decodeURIComponent(targetId);
        const targetHashExists = ids.includes(targetId) || ids.includes(decodedTargetId);

        if (!targetHashExists) {
          errors.get(page).push(`link to ${link} - target hash does not exist`);
        }
      }
    }
  }

  const errorMessages = [];
  for (const [page, pageErrors] of errors) {
    if (pageErrors.length) {
      if (errorMessages.length) {
        errorMessages.push("");
      }

      errorMessages.push(`${page}`);
      for (const error of pageErrors) {
        errorMessages.push(`   ${error}`);
      }
    }
  }

  if (errorMessages.length) {
    console.log(errorMessages.join("\n"));
    process.exit(1);
  } else {
    console.log("No errors!");
  }
};

run();
