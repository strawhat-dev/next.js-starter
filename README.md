# Next.js Starter

[![repo-size](https://img.shields.io/github/repo-size/strawhat-dev/next.js-starter)](https://github.com/strawhat-dev/next.js-starter/find/main) [![next.js](https://img.shields.io/github/package-json/dependency-version/strawhat-dev/next.js-starter/next)](https://www.npmjs.com/package/next) [![react](https://img.shields.io/github/package-json/dependency-version/strawhat-dev/next.js-starter/react)](https://www.npmjs.com/package/react) [![typescript](https://img.shields.io/github/package-json/dependency-version/strawhat-dev/next.js-starter/dev/typescript)](https://www.npmjs.com/package/typescript) [![eslint](https://img.shields.io/github/package-json/dependency-version/strawhat-dev/next.js-starter/dev/eslint)](https://www.npmjs.com/package/eslint) [![next-node](https://img.shields.io/node/v/next)](https://nodejs.org/en/about/releases/) [![depfu](https://badges.depfu.com/badges/79459e465122c0ad357e53dfe49ab41c/overview.svg)](https://depfu.com/github/strawhat-dev/next.js-starter?project_id=33382) [![snyk](https://snyk.io/test/github/strawhat-dev/next.js-starter/badge.svg)](https://snyk.io/test/github/strawhat-dev/next.js-starter) [![appveyor](https://ci.appveyor.com/api/projects/status/je68uo8584ifjw7r/branch/main?svg=true)](https://ci.appveyor.com/project/strawhat-dev/next-js-starter/branch/main) [![sonar](https://sonarcloud.io/api/project_badges/measure?project=strawhat-dev_next.js-starter&metric=alert_status)](https://sonarcloud.io/dashboard?id=strawhat-dev_next.js-starter) [![codefactor](https://www.codefactor.io/repository/github/strawhat-dev/next.js-starter/badge/main)](https://www.codefactor.io/repository/github/strawhat-dev/next.js-starter/overview/main) [![codacy](https://app.codacy.com/project/badge/Grade/429496063a00477c9c774fb7a68880e8)](https://www.codacy.com/gh/strawhat-dev/next.js-starter/dashboard?utm_source=github.com&utm_medium=referral&utm_content=strawhat-dev/next.js-starter&utm_campaign=Badge_Grade) [![lgtm](https://img.shields.io/lgtm/grade/javascript/g/strawhat-dev/next.js-starter.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/strawhat-dev/next.js-starter/context:javascript) [![maintainability](https://api.codeclimate.com/v1/badges/f2a22a5d2aca2011297d/maintainability)](https://codeclimate.com/github/strawhat-dev/next.js-starter/maintainability) [![clearlydefined](https://img.shields.io/clearlydefined/score/git/github/strawhat-dev/next.js-starter/67a8d71518777bbb8634d11c574a2021c5fc66fb)](https://clearlydefined.io/definitions/git/github/strawhat-dev/next.js-starter/67a8d71518777bbb8634d11c574a2021c5fc66fb) [![license](https://img.shields.io/github/license/strawhat-dev/next.js-starter)](https://github.com/strawhat-dev/next.js-starter/blob/main/LICENSE)

Minimal bleeding edge Next.js boilerplate preconfigured with TypeScript, stitches, eslint, prettier, and bundle-analyzer support. Tested against Node.js 17+.

## Project Structure[^1]

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

`common`: contains random components, utils, hooks, etc. that cannot be categorized or grouped together

`modules`: when you have related code splattered all over common and it feels like they could be grouped together

`pages`: contains Next.js [pages](https://nextjs.org/docs/basic-features/pages) and `api` folder

`api`: contains Next.js [api routes](https://nextjs.org/docs/api-routes/introduction)

## Dependencies

```json
  "dependencies": {
    "@stitches/react": "latest",
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "sharp": "latest",
    "the-new-css-reset": "latest"
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
    "prettier-plugin-organize-imports": "latest",
    "typescript": "latest"
  }
```

### Extra Recommended Libraries[^2]

|                                                        |                                                                        |
| ------------------------------------------------------ | ---------------------------------------------------------------------- |
| [swr](https://github.com/vercel/swr)                   | hooks for data fetching                                                |
| [axios](https://github.com/axios/axios)                | widely used promise based HTTP client                                  |
| [day.js](https://github.com/iamkun/dayjs)              | light-weight modern date library                                       |
| [next-pwa](https://github.com/shadowwalker/next-pwa)   | zero config PWA plugin for Next.js                                     |
| [js-cookie](https://github.com/js-cookie/js-cookie)    | light-weight api for cookies                                           |
| [idb](https://github.com/jakearchibald/idb)            | simple IndexedDB api with promises                                     |
| [Prisma](https://github.com/prisma/prisma)             | type-safe ORM with abstraction and model generation / migrations       |
| [Objection.js](https://vincit.github.io/objection.js/) | powerful traditional ORM built on [knex](https://github.com/knex/knex) |
| [NextAuth.js](https://github.com/nextauthjs/next-auth) | complete open source authentication solution for Next.js               |
| [Framer Motion](https://github.com/framer/motion)      | library for animations                                                 |
| [MUI](https://github.com/mui-org/material-ui)          | if you want a quick library with premade components                    |
| [sass](https://github.com/sass/sass)                   | if you absolutely hate css in js                                       |

[^1]: flexible and loosely adapted from [Next Right Now](https://unlyed.github.io/next-right-now/reference/folder-structure)
[^2]: personal subjective recommendations. based on need and not included to keep starter minimal
