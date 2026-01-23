// Given a nested menu collection and a page, returns the collection item
// representing the section that matches the page's path.
//
// Used to render section menus in the header.

const findSection = (collection, pagePath) => {
  for (let item of collection) {
    if (item.use_section_menu && pagePath.includes(item["main-file-path"])) {
      return item;
    }

    if (item.children) {
      const result = findSection(item.children, pagePath);
      if (result) {
        return result;
      }
    }
  }
};

module.exports = findSection;
