# Andromeda Ad Creation Playbook — Landing Page

Standalone React + Vite project, rebuilt from the original Bolt/GoHighLevel export,
with no vibepreview.com dependency and no iframe.

## What's inside
- `/` — main landing page (Index.tsx)
- `/thank-you` — post-purchase thank you page (ThankYou.tsx), fires Meta Pixel Purchase event
- Meta Pixel (ID 1534613168405691) wired in `index.html`, fires PageView on load
- All "Get the Playbook" buttons point to: https://link.fastpaydirect.com/payment-link/6a4313c32cbd86186455328e

## Fixes made vs. the original export
1. Removed `@leadconnector/vibe-tagger` (GoHighLevel-internal, dev-only, not available outside their platform)
2. Fixed `index.html` — original had `<body>` nested inside an unclosed `<head>` tag
3. Rebuilt standard shadcn/ui components (Button, Card, Badge, Carousel, Toast, Tooltip) from scratch since they weren't in the original file list — these are unmodified boilerplate, not custom code

## To run locally / in StackBlitz
```
npm install
npm run dev
```

## To deploy
1. Push this to the GitHub repo (or open directly in StackBlitz via GitHub import)
2. Import the repo into Vercel or Netlify — both auto-detect Vite and build correctly
3. Point a subdomain (e.g. playbook.cinematicvisions.co) at the new deployment via GoHighLevel DNS settings (add a CNAME record)

## Note on images
Gallery and product images are hosted on filesafe.space / vibe.filesafe.space (GoHighLevel's asset storage).
These should keep working after deployment since they're separate from the blocked vibepreview.com preview URL,
but worth verifying once live. Long-term, consider re-hosting these images somewhere you control.
