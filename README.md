# Unhesitate

Unhesitate is a futuristic journaling platform where people can capture dreams and nightmares, explore community-style entries, and turn subconscious patterns into personal growth.

This project is currently in an early MVP stage and is being prepared for serious collaboration and scaling.

## Why This Project

Most journaling apps focus only on daily tasks and productivity. Unhesitate focuses on inner life:

- Capture dreams and nightmares in a structured way
- Build a personal archive of subconscious patterns
- Create a visually rich, immersive writing and reading experience
- Grow into a platform with AI insights, mood tracking, and community features

## Current Status (MVP)

Implemented now:

- Next.js App Router project with TypeScript
- Clerk authentication integrated globally
- MongoDB + Mongoose persistence
- Create dream or nightmare entries
- View dream feed and nightmare feed
- Responsive navigation and animated card-based UI

Still basic / in progress:

- Motivation page is a placeholder
- No advanced search/filter/sort
- No edit/update flow in UI yet
- No tests yet
- No analytics, moderation, or AI features yet

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Clerk (authentication)
- MongoDB + Mongoose

## Local Setup

### 1. Clone and install

```bash
npm install
```

### 2. Create environment variables

Create a .env.local file in project root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
MONGO_URI=your_mongodb_connection_string
```

Important: the current code reads MONGO_URI (not MONGODB_URI).

### 3. Run development server

```bash
npm run dev
```

Open http://localhost:3000

## NPM Scripts

- npm run dev: Start local dev server (Turbopack)
- npm run build: Production build
- npm run start: Run production build locally
- npm run lint: Run lint checks

## Current App Routes

- /: Landing page
- /create: Create a dream/nightmare
- /dreams: Dream feed
- /nightmares: Nightmare feed
- /motivation: Placeholder page
- /about: About-style page
- /sign-in: Clerk sign-in flow

## Current API

- GET /api/dreams: Fetch dreams list
- POST /api/dreams: Create dream/nightmare

Request body for POST /api/dreams:

```json
{
	"title": "Flying over neon city",
	"description": "I was floating between towers...",
	"type": "dream",
	"location": "Tokyo"
}
```

## Project Structure

Top-level structure:

- app: Next.js routes, layouts, API routes
- components: UI and reusable components
- lib/actions: Server actions
- lib/models: Mongoose models
- lib/mongodb.ts: DB connection logic
- public: Static assets

## Collaboration Roadmap

We are looking for collaborators to help move from MVP to v1.

### Phase 1: Product Foundation

- Improve form validation and error UX
- Add loading/empty/error states across pages
- Add pagination and filtering for feeds
- Add unit/integration tests

### Phase 2: Core Product Value

- Add entry editing and deletion from UI
- Add tags, moods, and sleep metadata
- Build profile page and personal dashboard
- Add search and timeline view

### Phase 3: Smart Features

- AI-powered dream summarization
- AI mood/pattern detection over time
- Weekly insight reports
- Suggested prompts for reflection

### Phase 4: Community and Scale

- Public/private entry controls
- Follow system and reactions
- Moderation and abuse reporting
- Performance tuning and caching strategy

## Areas Where Contributors Are Needed

- Frontend: UI polish, accessibility, responsive improvements
- Backend: richer API design, validation, authorization hardening
- Database: schema evolution and query optimization
- DevOps: deployment workflow, CI/CD, environments
- AI/ML: NLP-based dream insights and recommendation experiments
- Product/UX: feature planning and user journey improvements

## Contribution Guide

1. Fork the repo
2. Create a branch: feature/your-feature-name
3. Make focused commits with clear messages
4. Open a pull request with:
	 - Problem statement
	 - What changed
	 - Screenshots (if UI)
	 - Testing notes

Suggested branch names:

- feature/add-edit-dream-flow
- fix/mobile-navbar-overlap
- chore/add-test-setup

## Quality Standards

- Keep components small and reusable
- Prefer strict typing over any
- Add tests for new behavior
- Avoid silent failures; surface useful errors
- Keep UI fast on mobile-first devices

## Known Gaps

- Some auth/data paths are still being hardened
- Feed endpoints are currently basic and can be expanded
- Observability (logs/metrics) is not set up yet

## Vision

Unhesitate is intended to become more than a CRUD app. The long-term goal is a reflective platform where personal stories, emotional patterns, and intelligent insights help users understand themselves better.

If that mission resonates with you, contributions are welcome.
