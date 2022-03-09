/** Converts the dynamic path segment from `[path]` to `:path` syntax */
function urlPathConvert(path) {
  return path.replace(/\[(\w*)]/g, ':$1');
}

function getI18nRewrites(routes) {
  return [...routes.entries()].flatMap(([path, i18nPaths]) => {
    const convertedPath = urlPathConvert(path);

    return Object.keys(i18nPaths).flatMap((language) => {
      const i18nPath = urlPathConvert(i18nPaths[language]);

      return [
        {
          source: `/${language}${convertedPath}`,
          destination: `/${language}/404`,
          locale: false,
        },
        {
          source: `/${language}${i18nPath}`,
          destination: `/${language}${convertedPath}`,
          locale: false,
        },
      ];
    });
  });
}

module.exports = {
  getI18nRewrites,
  urlPathConvert,
};
