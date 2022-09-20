/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')
const withSvgr = require('next-plugin-svgr')

const nextConfig = withSvgr({
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true
  },
  i18n
})

module.exports = nextConfig
