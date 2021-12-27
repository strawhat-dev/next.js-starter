# Next.js Starter

![GitHub repo size](https://img.shields.io/github/repo-size/strawhat-dev/next.js-starter) ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/strawhat-dev/next.js-starter/next) ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/strawhat-dev/next.js-starter/react) ![GitHub package.json dependency version (dev)](https://img.shields.io/github/package-json/dependency-version/strawhat-dev/next.js-starter/dev/typescript) ![GitHub package.json dependency version (dev)](https://img.shields.io/github/package-json/dependency-version/strawhat-dev/next.js-starter/dev/eslint) ![node-current](https://img.shields.io/node/v/next) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/strawhat-dev/next.js-starter/CodeQL) [![Depfu](https://badges.depfu.com/badges/79459e465122c0ad357e53dfe49ab41c/overview.svg)](https://depfu.com/github/strawhat-dev/next.js-starter?project_id=33382) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/strawhat-dev/next.js-starter) ![ClearlyDefined Score](https://img.shields.io/clearlydefined/score/git/github/strawhat-dev/next.js-starter/ed5912aaa067cbbfe36542f600491a0296a10966) [![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=strawhat-dev_next.js-starter&metric=alert_status)](https://sonarcloud.io/dashboard?id=strawhat-dev_next.js-starter) [![CodeFactor](https://www.codefactor.io/repository/github/strawhat-dev/next.js-starter/badge/main)](https://www.codefactor.io/repository/github/strawhat-dev/next.js-starter/overview/main) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/429496063a00477c9c774fb7a68880e8)](https://www.codacy.com/gh/strawhat-dev/next.js-starter/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=strawhat-dev/next.js-starter&amp;utm_campaign=Badge_Grade) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/strawhat-dev/next.js-starter.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/strawhat-dev/next.js-starter/context:javascript) [![Maintainability](https://api.codeclimate.com/v1/badges/f2a22a5d2aca2011297d/maintainability)](https://codeclimate.com/github/strawhat-dev/next.js-starter/maintainability) ![GitHub](https://img.shields.io/github/license/strawhat-dev/next.js-starter)

Minimal bleeding edge Next.js boilerplate preconfigured with TypeScript, MUI, scss, eslint, prettier, and bundle-analyzer support. Tested against Node.js 17+.

## Folder Structure[^1]

```text
root
├── public
└── src
    ├── app
    ├── common
    ├── modules
    └── pages
        └── api
```

`root`: contains configs and `package.json`

`public`: [static file serving](https://nextjs.org/docs/basic-features/static-file-serving)

`src`: contains source code of application

`app`: contains constants, global styles, and “page bootstraps” that are used to initialize the client and server

`common`: contains everything that cannot be categorized as a module

`modules`: contains related pieces of code (components, types, utils) grouped together

`pages`: contains Next.js [pages](https://nextjs.org/docs/basic-features/pages) and `api` folder

`api`: contains Next.js [api routes](https://nextjs.org/docs/api-routes/introduction)

## Dependencies[^2]

```json
  "dependencies": {
    "@emotion/react": "latest",
    "@emotion/styled": "latest",
    "@fontsource/roboto": "latest",
    "@mui/icons-material": "latest",
    "@mui/lab": "latest",
    "@mui/material": "latest",
    "@mui/system": "latest",
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "sass": "latest",
    "sharp": "latest"
  },
  "devDependencies": {
    "@next/bundle-analyzer": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@typescript-eslint/eslint-plugin": "latest",
    "@typescript-eslint/parser": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "eslint-config-prettier": "latest",
    "prettier": "latest",
    "typescript": "latest"
  }
```

### Extra Recommended Libraries[^3]

|                                                            |                                                                        |
| ---------------------------------------------------------- | ---------------------------------------------------------------------- |
| [swr](https://github.com/vercel/swr)                       | hooks for data fetching                                                |
| [axios](https://github.com/axios/axios)                    | widely used promise based HTTP client                                  |
| [day.js](https://github.com/iamkun/dayjs)                  | light-weight modern date library                                       |
| [next-pwa](https://github.com/shadowwalker/next-pwa)       | zero config PWA plugin for Next.js                                     |
| [js-cookie](https://github.com/js-cookie/js-cookie)        | light-weight api for cookies                                           |
| [idb](https://github.com/jakearchibald/idb)                | simple IndexedDB api with promises                                     |
| [prisma](https://github.com/prisma/prisma)                 | type-safe ORM with abstraction and model generation / migrations       |
| [objection.js](https://vincit.github.io/objection.js/)     | powerful traditional ORM built on [knex](https://github.com/knex/knex) |
| [nextauth.js](https://github.com/nextauthjs/next-auth)     | complete open source authentication solution for Next.js               |
| [framer-motion](https://github.com/framer/motion)          | library for animations                                                 |
| [tailwindcss](https://github.com/tailwindlabs/tailwindcss) | if MUI or scss is not enough                                           |
|                                                            |                                                                        |

[^1]: highly flexible and loose. adapted from [Next Right Now](https://unlyed.github.io/next-right-now/)
[^2]: `latest-package.json` provided with latest version tags for convenience. current `package.json` should match and is stable as of writing
[^3]: personal subjective recommendations. based on need and not included to keep starter minimal
