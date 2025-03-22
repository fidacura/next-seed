/** @type {import('next').NextConfig} */

const nextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  trailingSlash: true,
  exportTrailingSlash: true,
  output: "export",
  swcMinify: true,
};

module.exports = nextConfig;

