/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@maxst-designsystem/maxst-design-system/src/styles/scss/abstracts/_variables.scss";`,
  },
};

module.exports = nextConfig;
