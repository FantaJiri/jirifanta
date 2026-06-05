# Vercel Deployment Guide — Jiří Fanta

## Prerequisites
1. Install Vercel CLI: `npm i -g vercel`
2. Log in: `vercel login`

## Deploy from local machine
```bash
# 1. Build for Vercel
npm run build:vercel

# 2. Deploy the prebuilt output
vercel deploy --prebuilt --prod
```

## Deploy via GitHub integration
1. Push this repository to GitHub.
2. Import the repository in the Vercel dashboard.
3. In project settings, set:
   - **Build Command:** `npm run build:vercel`
   - **Output Directory:** `.vercel/output`
   - **Framework Preset:** `Other`
4. Vercel will build and deploy automatically on every push.

## Route handling
All routes are handled by TanStack Router. The Vercel preset generates the correct `.vercel/output` structure, so both the root `/` and any future routes (e.g. `/about`, `/services`) will work without extra rewrites.

## Environment variables
If you need any environment variables (e.g. analytics keys, API endpoints), add them in the Vercel dashboard under **Project Settings → Environment Variables**.

## Custom domain
1. In the Vercel dashboard, go to **Project Settings → Domains**.
2. Add your domain `jirifanta.cz`.
3. Follow Vercel’s DNS instructions to point the domain.
