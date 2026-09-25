# ans-site

One Next.js 16 app that serves two domains:

- `ans.digital` → English (`/en/...`)
- `ans.bd` → Bengali (`/bn/...`)

`proxy.ts` reads the `Host` header and rewrites `/` to the right locale. Every page lives once under
`app/[locale]/` and renders in both languages.

## Edit content

- `lib/content.ts`: services (incl. pricing), stats, FAQ, tools, nav, contact details, why-us.
- `lib/copy.ts`: all other UI text (hero, section headings, buttons, footer, about, contact), per language.
- `lib/partners.ts`: platform logos (marquee) and the brand portfolio.
- Images: `public/images/` (logo, partner wordmarks, brand logos). Share card: `public/og.jpg`.

## Design

"Signal Rack": graphite surfaces (`#0b0c0f` / `#14161b`), hairline rails, one orange signal accent
(`#ff6a00`), Bricolage Grotesque headings, Inter body, Noto Sans Bengali on ans.bd. Tokens and the
few shared classes (`card`, `btn-primary`, `btn-ghost`, `label`, `rail`, `text-h1`…) are in `app/globals.css`.

Components: `components/site/` (ours), `components/unlumen-ui/` (Unlumen UI via the shadcn CLI:
`npx shadcn@latest add @unlumen-ui/<name>`), `components/ui/` (shadcn).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000/en or /bn (localhost defaults to Bengali)
npm run build
```

## Deploy

See `DEPLOY.md` (Coolify, Dockerfile build pack, port 3000, both domains on one app).
