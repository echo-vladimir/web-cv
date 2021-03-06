/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ["en", "pl", "ru", "ua"],
    defaultLocale: "en",
    localeDetection: true,
  }
}

module.exports = nextConfig