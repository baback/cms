# AGENTS.md

This file provides guidance to AI Agents when working with code in this repository.

## Package Manager

**Always use `yarn` (v1) for all commands.** This repository uses yarn workspaces, not npm.

## Monorepo Structure

This is a Yarn v1 + Nx monorepo with three workspace groups:

### ghost/* - Core packages
- **ghost/core** - Main application (Node.js/Express backend)
  - Core server: `ghost/core/core/server/`
  - Frontend rendering: `ghost/core/core/frontend/`
- **ghost/admin** - Ember.js admin client (legacy, being migrated to React)
- **ghost/i18n** - Centralized internationalization for all apps

### apps/* - React-based UI applications

**Admin Apps** (embedded in Admin):
- `admin-x-settings` - Settings and integrations
- `posts`, `stats` - Post analytics and site-wide analytics
- Built with Vite + React + `@tanstack/react-query`

**Foundation Libraries**:
- `admin-x-framework` - Shared API hooks, routing, utilities
- `shade` - Design system (shadcn/ui + Radix UI + react-hook-form + zod)

## Common Commands

### Development
```bash
yarn                           # Install dependencies
yarn setup                     # First-time setup
yarn dev                       # Local dev (no Docker)
```

### Building
```bash
yarn build                     # Build all packages
yarn build:clean               # Clean build artifacts and rebuild
```

### Testing
```bash
yarn test:unit                 # Run all unit tests
```

### Docker
```bash
yarn docker:build              # Build Docker images
yarn docker:dev                # Start in Docker with hot reload
yarn docker:shell              # Open shell in container
```

## Code Guidelines

### When Working on Admin UI
- **New features:** Build in React (`apps/admin-x-*` or `apps/posts`)
- **Use:** `admin-x-framework` for API hooks
- **Use:** `shade` design system for new components

### When Working on Backend
- **Core logic:** `ghost/core/core/server/`
- **Database Schema:** `ghost/core/core/server/data/schema/`
- **API routes:** `ghost/core/core/server/api/`
- **Services:** `ghost/core/core/server/services/`
- **Models:** `ghost/core/core/server/models/`

## Troubleshooting

### Build Issues
```bash
yarn fix                       # Clean cache + node_modules + reinstall
yarn build:clean               # Clean build artifacts
yarn nx reset                  # Reset Nx cache
```
