/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@maxst-designsystem/maxst-design-system/src/styles/scss/abstracts/_variables.scss";`,
  },
  pageExtensions: ['tsx'],
  compiler: {
    styledComponents: {
      ssr: true,
      fileName: true,
      displayName: true,
      pure: true,
    },
  },
};

module.exports = nextConfig;
