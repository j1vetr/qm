# QuickMove.ch - Premium Relocation Services

## Overview

QuickMove.ch is a premium moving and relocation services platform for Switzerland. The application is a full-stack web application featuring a React frontend with a modern, dark-themed UI and an Express.js backend. The platform allows users to browse services, understand the moving process, and submit quote requests via a multi-step form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing with lazy-loaded pages
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS v4 with CSS variables for theming (light/dark mode support)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Internationalization**: Custom i18n system supporting English, German, and French

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API endpoints under `/api` prefix
- **Development**: Vite dev server integration with HMR for the client
- **Production**: Static file serving from the built `dist/public` directory

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **Current Storage**: In-memory storage implementation (`MemStorage` class) for development
- **Database Ready**: PostgreSQL configuration in place via `drizzle.config.ts`, requiring `DATABASE_URL` environment variable

### Email Integration
- **Service**: Nodemailer configured with SMTP for sending quote request emails
- **Purpose**: Quote form submissions are emailed to the business

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route page components
│   │   ├── lib/          # Utilities, i18n, query client
│   │   └── hooks/        # Custom React hooks
├── server/           # Backend Express application
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage abstraction
│   └── static.ts     # Static file serving
├── shared/           # Shared code between client and server
│   └── schema.ts     # Database schema and types
└── migrations/       # Drizzle database migrations
```

### Build System
- **Client Build**: Vite builds to `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.cjs`
- **Scripts**: `npm run dev` for development, `npm run build` for production build

## External Dependencies

### Third-Party Services
- **SMTP Email**: Configured for mail.toov.com.tr for sending quote emails
- **WhatsApp Integration**: Direct links to WhatsApp for customer communication

### Database
- **PostgreSQL**: Required for production (DATABASE_URL environment variable)
- **Session Store**: connect-pg-simple for session persistence

### Key NPM Packages
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns
- **Carousel**: Embla Carousel
- **HTTP Client**: Fetch API with custom wrapper in queryClient.ts