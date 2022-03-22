// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://nextjs.org/docs/basic-features/image-optimization#domains
// https://nextjs.org/docs/advanced-features/compiler

// @ts-check
/** @type {import('next').NextConfig} */
export default {
  swcMinify: true,
  reactStrictMode: true,
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['raw.githubusercontent.com'],
  },
  experimental: {
    runtime: 'nodejs',
    optimizeCss: true,
    serverComponents: true,
  },
};
