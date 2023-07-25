/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
        port: '',
        pathname: '/secure.notion-static.com/**',
      }
    ],
    // minimumCacheTTL: 60*60*24*30, // 30 days
    minimumCacheTTL: 60*60, // 1 hr
  }
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
