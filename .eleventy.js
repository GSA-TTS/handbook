const { EleventyRenderPlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");
const yaml = require("js-yaml");
const svgSprite = require("eleventy-plugin-svg-sprite");
const { headingLinks } = require("./config/headingLinks");
const baseurl = require("./config/baseurl");

const HandbookPlugin = require("./config/HandbookPlugin.js");

module.exports = function (config) {
  // Add plugins
  config.addPlugin(EleventyRenderPlugin);
  config.addPlugin(HandbookPlugin);

  // Add filter for file mtime
  config.addFilter('mtime', function(page) {
    const fs = require('fs');
    const stats = fs.statSync(page.inputPath);
    return stats.mtime;
  });

  // Copy USWDS init JS so we can load it in HEAD to prevent banner flashing
  config.addPassthroughCopy({
    "node_modules/@uswds/uswds/dist/js/uswds-init.js":
      "assets/js/uswds-init.js",
  });

  // Copy the favicon
  config.addPassthroughCopy({
    "favicon.ico": "favicon.ico",
  });

  // SVG Sprite Plugin for USWDS USWDS icons
  config.addPlugin(svgSprite, {
    path: "./node_modules/@uswds/uswds/dist/img/uswds-icons",
    svgSpriteShortcode: "uswds_icons_sprite",
    svgShortcode: "uswds_icons",
  });

  // SVG Sprite Plugin for USWDS USA icons
  config.addPlugin(svgSprite, {
    path: "./node_modules/@uswds/uswds/dist/img/usa-icons",
    svgSpriteShortcode: "usa_icons_sprite",
    svgShortcode: "usa_icons",
  });

  // Allow yaml to be used in the _data dir
  config.addDataExtension("yaml", (contents) => yaml.load(contents));
  config.addDataExtension("yml", (contents) => yaml.load(contents));

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
  })
    .use(markdownItAnchor, {
      permalink: headingLinks, // use our custom heading links
      slugify: config.getFilter("slugify"),
    })
    .use(markdownItAttrs);
  config.setLibrary("md", markdownLibrary);

  config.setServerOptions({ liveReload: true, domDiff: true, port: 8080 });

  return {
    templateFormats: ["md", "html", "njk"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    pathPrefix: baseurl,

    dir: {
      input: "pages",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
  };
};
