# TypeScript Fullstack CI/CD Project

A monorepo TypeScript project featuring Vue.js frontend, Express.js backend, and GitHub Actions CI/CD pipeline with Docker containerization.

## Project Structure

```
typescript-fullstack-cicd/
├── packages/
│   ├── frontend/           # Vue.js application
│   ├── backend/            # Express.js API
│   └── shared/             # Shared TypeScript types
├── .github/workflows/      # CI/CD workflows
├── docker-compose.yml      # Local development
└── package.json            # Root workspace config
```

## Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Docker (optional, for containerization)

### Installation

```bash
# Install dependencies
npm install

# Start development servers
npm run dev
```

### Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build all packages
- `npm run test` - Run tests for all packages
- `npm run lint` - Lint all packages
- `./test-ci-local.sh` - **Run complete CI/CD pipeline locally** ✨

## Testing CI/CD Locally

Before pushing to GitHub, you can test the entire CI/CD pipeline locally:

```bash
# Run the complete CI/CD test suite
./test-ci-local.sh
```

This script will:
1. ✅ Install dependencies with clean state (npm ci simulation)
2. ✅ Build shared types
3. ✅ Lint backend and frontend
4. ✅ Run all tests
5. ✅ Type check frontend
6. ✅ Build all packages
7. ✅ Verify build artifacts
8. ✅ Run security audit

**This ensures your code will pass GitHub Actions before pushing!**

## Tech Stack

- **Frontend**: Vue.js 3 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Shared**: Common TypeScript types
- **CI/CD**: GitHub Actions
- **Containerization**: Docker

## Development

Each package has its own development environment:

- **Frontend**: `npm run dev:frontend` (http://localhost:5173)
- **Backend**: `npm run dev:backend` (http://localhost:3000)

## Deployment

The project includes GitHub Actions workflows for:

- Automated testing and building
- Docker image creation
- Container registry deployment

## License

MIT