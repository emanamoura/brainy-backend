<h1 align="center">Brainy Backend</h1>

- [Technologies](#technologies)
- [Installation](#installation)
- [Development guide](#development-guide)


## Technologies

- [Node.js](https://nodejs.org/), [Express](https://expressjs.com/) and [Typescript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/) and [PostgreSQL](https://www.postgresql.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)

## Installation

This project runs on [Node.js v16](https://nodejs.org/) and uses [Yarn v1](https://yarnpkg.com/) as dependency manager.

1. Clone the repository and install dependencies:

   ```bash
   $ git clone git@github.com:emanamoura/brainy-backend.git
   $ cd brainy-backend
   $ yarn install
   ```

2. To run the project in development mode, start a development database:

   ```bash
   $ yarn db:up
   ```

3. Apply the current schema (if the database is not up-to-date):

   ```bash
   $ yarn db:migrate
   ```

4. Start the server in development mode:

   ```bash
   $ yarn dev
   ```

## Development guide

Learn more about the contributing conventions and guidelines at [CONTRIBUTING.md](./CONTRIBUTING.md).
