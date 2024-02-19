/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    mdxRs: true,
  },
  transpilePackages: ['three'],
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
