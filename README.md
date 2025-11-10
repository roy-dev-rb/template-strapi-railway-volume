# 🚀 Strapi v5 Template for Railway with Local Uploads

This is a **Strapi v5** template configured for **local file uploads** and optimized for deployment on **Railway**. Strapi provides a headless CMS with a powerful admin panel and REST/GraphQL APIs.

> **Note:** This template uses local file uploads. If you need S3-compatible cloud storage, check out our [S3 uploads version](https://github.com/your-org/template-strapi-railway-s3) of this template.

You can **clone or fork** this repo to create your own Strapi project with the same baseline configuration.

## ✨ Features

- **Strapi v5** - Latest version with all the newest features
- **Local Uploads** - Files stored locally in the `public/uploads` directory
- **Railway Ready** - Pre-configured for seamless Railway deployment
- **Highly Customizable** - Separate development and production environment configurations
- **TypeScript** - Full TypeScript support for better development experience

## 🚀 Getting Started

```bash
npm install
npm run build
npm run develop
```

> **Note:** This template uses `npm` by default. If you want to use `yarn`, update the commands in `railway.toml` to replace `npm` with `yarn` so Railway runs the correct scripts.

## 🎯 Customization

This template is highly customizable thanks to its **separate development and production environment configurations**. You can find environment-specific settings in:

- `config/env/development/` - Development environment settings
  - `database.ts` - Database configuration for local development
  - `plugins.ts` - Plugin configurations
  - `server.ts` - Server settings

- `config/env/production/` - Production environment settings
  - `database.ts` - Production database configuration (PostgreSQL)
  - `plugins.ts` - Production plugin settings
  - `server.ts` - Production server configuration

This separation allows you to easily customize settings for each environment without affecting the other.

## 🔧 Environment Variables

The template includes example environment files to help you get started:

### `.env.example`
Development environment variables template. Includes:
- Strapi security keys (JWT secrets, API tokens, encryption keys)
- Database configuration (SQLite for local development)
- Server settings (host, port)

### `.env.production.example`
Production environment variables template for Railway deployment. Includes:
- All required Strapi security keys
- PostgreSQL database configuration with Railway integration
- Production server settings
- Railway-specific variables (`RAILWAY_PUBLIC_DOMAIN`)

**Important:** Before deploying, make sure to:
1. Copy `.env.example` to `.env` for local development
2. Copy `.env.production.example` to `.env.production` for production
3. Generate secure values for all security keys (never use the default "tobemodified" values)

## 🚂 Strapi with Railway

This template is optimized for Railway deployment:

- **Railway Configuration** - Includes `railway.toml` with build and deployment settings
- **Volume Support** - Configured to use Railway volumes for persistent file storage (local uploads)
- **PostgreSQL Integration** - Production environment automatically uses Railway's PostgreSQL service
- **Environment Variables** - Production env file includes Railway-specific variable references
- **Auto Redeploys** - Once connected to Railway, any push to your repo triggers a fresh Railway deploy

The `railway.toml` file configures:
- Build process using Nixpacks
- Node.js 22 runtime
- Build and start commands

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
