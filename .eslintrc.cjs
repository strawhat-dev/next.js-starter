/**
 * @see https://nextjs.org/docs/basic-features/eslint
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: { node: true, es2022: true, browser: true },
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'import/no-anonymous-default-export': [
      'warn',
      { allowArrowFunction: true },
    ],
  },
};
