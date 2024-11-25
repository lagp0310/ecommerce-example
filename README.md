# Ecommerce Monorepo

This is a small ecommerce platform example using [Refine](https://refine.dev/), [Supabase](https://supabase.com/) and [Next.js](https://nextjs.org/).

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `admin`: a [Next.js](https://nextjs.org/) app.
- `@ecommerce/ui`: a stub React component library shared by apps.
- `@ecommerce/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`).
- `@ecommerce/typescript-config`: `tsconfig.json`s used throughout the monorepo.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [ESLint](https://eslint.org/) for code linting.
- [Prettier](https://prettier.io) for code formatting.

## Requirements

You'll need the following:

- [Git](https://git-scm.com/).
- [Docker](https://docs.docker.com/).
- [Node](https://nodejs.org/en/) (tested on `v20.18.0 LTS`).
- [pnpm](https://pnpm.io/) (**Recommended**).

## How to run it locally

First, set the required environment variables for each app. You can copy the `.env.example` in the root directory of each app file into a `.env`.

Then, you'll need to follow the [Self-Hosting with Docker](https://supabase.com/docs/guides/self-hosting/docker) before running this project.

After Supabase is ready and all the containers are running, you can run any of the following commands.

### Develop

To run development mode in all apps and packages, run the following command:

```
cd this-repo-root
pnpm dev
```

### Build

To build all apps and packages, run the following command:

```
cd this-repo-root
pnpm build
```

## License.

Although is just a test, it contains a base for creating apps for an ecommerce platform. This code is **propietary code** and **SHOULD NOT** be used without asking for permission.
