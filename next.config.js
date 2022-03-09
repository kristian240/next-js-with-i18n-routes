const { getI18nRewrites } = require('./lib/i18n-routes/helpers');
const routes = require('./lib/i18n-routes/routes');

module.exports = {
  i18n: {
    locales: ['en', 'hr'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  async rewrites() {
    return {
      beforeFiles: getI18nRewrites(routes),
    };
  },
};
