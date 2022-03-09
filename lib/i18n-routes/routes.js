const { i18nPaths } = require('./paths');

module.exports = new Map([
  [i18nPaths.Index, {}],
  [
    i18nPaths.Page,
    {
      en: '/site',
      hr: '/stranica',
    },
  ],
  [
    i18nPaths.Dynamic.Page,
    {
      hr: '/dinamicna/stranica/[slug]',
    },
  ],
]);
