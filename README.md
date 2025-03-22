# next-seed
A minimalist Next.js starter for Next webdev projects.

## Features

- 🚀 Next.js with TypeScript
- 🎨 SCSS modules for component-scoped styling
- 🧰 Global SCSS utilities with basic design foundations
- 📐 ESLint & Prettier preconfigured
- 🐳 Docker-ready for easy server-deployment
- 📱 Mobile-first responsive design

## Setup

### Install

```bash
# clone and install dependencies
git clone https://github.com/fidacura/next-seed.git my-project
cd my-project
npm install
```

### Development

```bash
# start dev server on port 10100
npm run dev

# format code
npm run format

# check formatting
npm run format:check
```

### Production

```bash
# create optimized production-build
npm run build

# start production-server
npm run start
```

### Docker

```bash
# build Docker image
docker build -t next-seed .

# run container
docker run -p 10000:10000 next-seed
```

## Structure

```
next-seed/
├── src/               # Application source
│   ├── components/    # Reusable UI components
│   ├── context/       # React context providers
│   ├── data/          # Static data & data utilities
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Next.js pages & routing
│   ├── styles/        # Global styles & variables
│   ├── types/         # TypeScript definitions
│   └── utils/         # Helper functions
├── public/            # Static assets
└── fonts/             # Custom web fonts
```

---

made with ❤️ by [fidacura](https://fidacura.xyz)