# CogniDocs SaaS Platform

Web application for the CogniDocs SaaS offering.

## Phase 7: SaaS Platform (Weeks 15-17)

**Status:** 🔴 Not Started

This application will provide:
- User authentication (Auth0/Clerk)
- Team workspaces
- Real-time collaboration
- Payment integration (Stripe)
- Usage analytics
- Admin dashboard

## Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **Backend:** Supabase
  - PostgreSQL database
  - Auth
  - Real-time subscriptions
  - Storage
  - Edge Functions
- **Payments:** Stripe
- **Hosting:** Vercel

## Features

- [ ] User signup/login
- [ ] Workspace management
- [ ] Project dashboard
- [ ] AI features UI
- [ ] Billing integration
- [ ] Usage tracking
- [ ] Team collaboration
- [ ] Settings & preferences

## Supabase Setup

```bash
# Install Supabase CLI
npm install -g supabase

# Initialize Supabase
supabase init

# Start local development
supabase start
```

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
```
