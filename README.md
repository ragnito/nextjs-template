# Next.js Project Template

This project is a base template that uses the following technologies and tools to create modern, fast, and secure web applications:

- **Next.js**
- **Auth.js**: Library for authentication and user management.
- **NextUI**
- **Prisma**
- **Postgres**
- **Next-Intl**: Internationalization (i18n) support for multilingual applications.

## Features

- **Integrated Authentication**: Ready-to-use setup with Auth.js.
- **Modern User Interface**: Styled components using NextUI.
- **Internationalization**: Initial configuration for handling multiple languages with Next-Intl.
- **Database with Prisma**: Schema and migrations ready to use with Postgres.
- **Modular Structure**: Organized code for easier development and maintenance.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or higher)
- Bun (latest version)
- Docker (optional, for running Postgres locally)

## Installation

To create a new project using this template, run the following command:

```bash
npx create-next-app@latest my-app -e https://github.com/ragnito/nextjs-template --use-bun
```

Then, navigate to your project folder:

```bash
cd my-app
```

### Set up environment variables

Create a `.env` file in the root of the project and add the following variables:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/your_database
NEXTAUTH_SECRET=your_secret
```

### Set up Prisma

```bash
bun db:generate
bun db:migrate-dev
```

### Start the development server

```bash
bun dev
```

Access the application at [http://localhost:3000](http://localhost:3000).
