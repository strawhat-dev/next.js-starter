// @ts-check
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  i18n: { locales: ['en'], defaultLocale: 'en' },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(config);
