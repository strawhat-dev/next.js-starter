// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://nextjs.org/docs/basic-features/image-optimization
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['raw.githubusercontent.com'],
  },
  experimental: {
    optimizeCss: true,
    serverComponents: true,
  },
};

export default withBundleAnalyzer(config);
