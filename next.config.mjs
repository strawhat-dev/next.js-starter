// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://nextjs.org/docs/advanced-features/compiler

// @ts-check
/** @type {import('next').NextConfig} */
export default {
  swcMinify: true,
  reactStrictMode: true,
  i18n: { locales: ['en'], defaultLocale: 'en' },
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
};
