/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // SSG: pre-builds every page to static HTML
  trailingSlash: true,     // /about/ instead of /about — better for static hosts
  images: {
    unoptimized: true,     // required for static export (no Next.js image server)
  },
}

module.exports = nextConfig
