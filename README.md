# Next.js Starter

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

`app`: folder contains constants, global styles, and “page bootstraps” that are used to initialize the client and server

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
| [prisma](https://github.com/prisma/prisma)                 | type-safe orm with abstraction and model generation / migrations       |
| [objection.js](https://vincit.github.io/objection.js/)     | powerful traditional orm built on [knex](https://github.com/knex/knex) |
| [framer-motion](https://github.com/framer/motion)          | library for animations                                                 |
| [tailwindcss](https://github.com/tailwindlabs/tailwindcss) | if MUI or scss is not enough                                           |

[^1]: highly flexible and loose. adapted from [next-right-now](https://unlyed.github.io/next-right-now/).
[^2]: `package.json` provided with latest version tags for convenience. use provided `stable-package.json` in the case latest version of everything breaks something.
[^3]: personal subjective recommendations. not included to keep starter minimal.
