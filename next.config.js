// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching: runtimeCaching,
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', ' nl-BE'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
  },
  images: {
    domains: [
      'images.pexels.com',
      'images.unsplash.com',
      'upload.wikimedia.org',
    ],
  },
});
