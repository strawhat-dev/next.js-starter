# Next.js Starter

Minimal Next.js project preconfigured with TypeScript, MUI, scss, eslint, prettier, and bundle-analyzer support.

## Folder Structure

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

`app`: contains code that is being used by the special `pages/_app.tsx` Next.js file

`common`: contains everything that cannot be categorized as a module

`modules`: contains related pieces of code (components, types, utils) grouped together

`pages`: contains Next.js [pages](https://nextjs.org/docs/basic-features/pages) and `api` folder

`api`: contains Next.js [api routes](https://nextjs.org/docs/api-routes/introduction)
