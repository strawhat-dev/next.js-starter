// @ts-nocheck

/**
 * @type {import('next').NextConfig}
 **/

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const userConfig = {
  reactStrictMode: true,
  i18n: { locales: ['en'], defaultLocale: 'en' },
};

module.exports = (phase, defaultConfig) => {
  const config = { ...defaultConfig, ...userConfig };
  return withBundleAnalyzer(config);
};
