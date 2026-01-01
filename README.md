# Celmin CMS

A custom headless content management system for the Celmin Magazine platform.

## Overview

This is a customized CMS built for managing content, authors, tags, and pages. It provides a clean admin interface for content editors without any third-party branding.

## Features

- Post management with rich text editor
- Page management for static content
- Tag/category organization
- Author profiles
- Media library
- Member management
- Newsletter capabilities
- API for headless frontend integration

## Development

### Prerequisites

- Node.js 22+
- Yarn v1
- Docker & Docker Compose

### Quick Start

```bash
# Install dependencies
yarn

# Start development environment
yarn dev
```

### Docker Development

```bash
# Build and start with Docker
yarn docker:build
yarn docker:dev
```

## API Integration

The CMS provides a Content API for the frontend:

- **Content API**: Read-only access to published content
- **Admin API**: Full CRUD operations (authenticated)

## Architecture

This is a monorepo with the following structure:

- `apps/` - Admin UI applications
- `ghost/core` - Backend server
- `ghost/admin` - Admin interface

## License

MIT License - See LICENSE file for details.
