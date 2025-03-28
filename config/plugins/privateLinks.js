const { JSDOM } = require("jsdom");

// URLs with these domain patterns are not public.
const privateUrlSlugs = [
  "gsa-tts.slack.com",
  "anywhere.gsa.gov",
  "bookit.gsa.gov",
  "calendar.gsa.gov",
  "connect.gsa.gov",
  "docs.google.com",
  "drive.google.com",
  "ea.gsa.gov",
  "email.gsa.gov",
  "eopf.opm.gov",
  "gcims.gsa.gov",
  "github.com/gsa-tts/Accessibility_Reviews",
  "github.com/gsa-tts/blog-drafts",
  "github.com/gsa-tts/codereviews",
  "github.com/gsa-tts/DevOps",
  "github.com/gsa-tts/Infrastructure",
  "github.com/gsa-tts/security-incidents",
  "github.com/gsa-tts/staffing",
  "github.com/gsa-tts/team-api.gsa-tts.gov",
  "github.com/gsa-tts/writing-lab",
  "github.com/gsa-tts/.allstar",
  "gkey.gsa.gov",
  "gsa-tts.slack.com",
  "gsa.my.salesforce.com",
  "gsaolu.gsa.gov",
  "hrlinks.gsa.gov",
  "hrprod.hr.gsa.gov",
  "insite.gsa.gov",
  "mail.gsa.gov",
  "meet.gsa.gov",
  "sign.gsa.gov",
  "tock.gsa-tts.gov",
];

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform(
    "private_links",
    // This transform function is called for every output file that is rendered.
    // Its single argument is the rendered content, before it is written to the
    // filesystem.
    //
    // The function needs to be defined this way (rather than an anonymous
    // function) so that it will correctly get a "this" variable. The "this"
    // variable tells us the input and output paths of the rendered file.
    async function privateLinks(content) {
      // We're only interested in HTML output files, and we can also ignore the
      // files that are created by the redirect template.
      if (
        this.inputPath !== "./pages/redirect.html" &&
        this.outputPath.endsWith(".html")
      ) {
        // Load the content into a DOM
        const dom = new JSDOM(content);
        const document = dom.window.document;
        let processed = false;

        // Find all the links
        const links = document.querySelectorAll("a[href]");

        for (const link of links) {
          const href = link.getAttribute("href");
          const url = new URL(href, "https://gsa.gov");

          // Preserve the existing link content, which could be a single text
          // node or a more complex set of nodes.
          const linkContent = [...link.childNodes];

          // For any links that aren't public, add text to identify them as
          // private for people using screen readers and add a lock icon for
          // sighted users.
          if (privateUrlSlugs.some((slug) => href.indexOf(slug) >= 0)) {
            // Create a screenreader-only text node
            const srText = document.createElement("span");
            srText.innerHTML = "TTS-only, ";
            srText.setAttribute("class", "usa-sr-only");
            linkContent.unshift(srText);

            // ...and an icon, which is hidden from screenreaders
            const sightedIcon = document.createElement("svg");
            sightedIcon.setAttribute("class", "usa-icon");
            sightedIcon.setAttribute("aria-hidden", "true");
            sightedIcon.setAttribute("role", "img");
            sightedIcon.innerHTML = `<use xlink:href="#svg-lock_outline"></use>`;
            linkContent.push(sightedIcon);

            processed = true;
          }

          // For any links to outside of gsa.gov, identify them as external.
          if (!url.hostname.endsWith("gsa.gov")) {
            // Create a screenreader-only text node
            const srText = document.createElement("span");
            srText.innerHTML = ", external,";
            srText.setAttribute("class", "usa-sr-only");
            linkContent.unshift(srText);

            // ...and an icon, which is hidden from screenreaders
            const sightedIcon = document.createElement("svg");
            sightedIcon.setAttribute("class", "usa-icon");
            sightedIcon.setAttribute("aria-hidden", "true");
            sightedIcon.setAttribute("role", "img");
            sightedIcon.innerHTML = `<use xlink:href="#svg-launch"></use>`;
            linkContent.push(sightedIcon);
          }

          // Then rebuild the link content with the original content but also
          // any other stuff we added or changed.
          link.replaceChildren(...linkContent);
        }

        // If we modified anything, return the updated content.
        if (processed) {
          return dom.serialize();
        }
      }

      // For everything else, just return the original content.
      return content;
    }
  );
};
