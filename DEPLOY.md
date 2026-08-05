# Deploying ans-site to Coolify

This app is a single Next.js 16 codebase that serves both domains:
- `ans.digital` → English
- `ans.bd` → Bengali (and passes `/short`, `/code`, and short codes through to the
  existing Cloudflare Worker shortener — see the note at the bottom)

The `Dockerfile` in this repo builds a minimal standalone production image
(no external build step needed on the server).

## 1. Push this code to a Git repository

Coolify deploys from a Git repo it can pull from (GitHub, GitLab, or a repo
hosted on the Coolify server itself). From your machine:

```bash
cd ans-site
git init                      # skip if already a git repo
git add -A
git commit -m "ans-site: Coolify deploy"
git remote add origin https://github.com/<you>/ans-site.git
git push -u origin main
```

## 2. Create the resource in Coolify

1. In Coolify, **New Resource → Application → Public/Private Git Repository**.
2. Point it at the repo you just pushed.
3. Build pack: **Dockerfile** (Coolify will detect the `Dockerfile` automatically).
4. Port: **3000** (matches `EXPOSE 3000` / `PORT=3000` in the Dockerfile).
5. Under **Domains**, add both:
   - `https://ans.digital`
   - `https://ans.bd`

   (Yes — one Coolify application, two domains. The app itself reads the
   `Host` header to decide English vs Bengali, so both domains can point at
   the same container.)
6. Deploy.

## 3. Point DNS at this VPS

Both `ans.bd` and `ans.digital` are already on Cloudflare (orange-cloud
proxied). In the Cloudflare dashboard, for **each** domain's DNS records:

- Update the `A` record (the one the proxied hostname resolves through) to
  point at this Coolify VPS's IP: `187.127.102.175`
- Keep the proxy status **ON** (orange cloud) — this is required for the
  `ans.bd/*` shortener Worker route to keep intercepting `/short`, `/code`,
  and short-code redirects before falling through to this app.

## 4. Cloudflare API token — check it covers both zones

The Coolify proxy (Traefik) uses a Cloudflare API token for the Let's Encrypt
DNS-01 challenge (`CF_DNS_API_TOKEN`), set up earlier for `ans.bd`. Before
this deploy, open that token in the Cloudflare dashboard and confirm its
**Zone Resources** include **both** `ans.bd` and `ans.digital` — each zone
needs `Zone:DNS:Edit` + `Zone:Zone:Read`. If the token was scoped to `ans.bd`
only, add `ans.digital` to it (or issue a second token and add both to
Traefik's provider config), otherwise certificate issuance for `ans.digital`
will fail with a "failed to find zone" error.

## 5. Verify

Once deployed and DNS has propagated:

```bash
curl -I https://ans.digital/       # should return the English homepage
curl -I https://ans.bd/            # should return the Bengali homepage
curl -I https://ans.bd/short       # should still hit the Cloudflare Worker shortener
```

## Note on the shortener

The shortener is a separate Cloudflare Worker (route `ans.bd/*`) that
intercepts `/short`, `/short/admin`, `/api/*`, and any short code, then falls
through (`fetch(request)`) to the origin for everything else. That origin is
now this app instead of the old WordPress site — no changes needed on the
Worker side beyond what's already deployed, since it was already written to
pass unmatched requests straight through. Its reserved-path list has been
updated to include this app's top-level routes (`faq`, `bn`, `en`, `images`,
`fonts`, `_next`) so no one can register a short code that would shadow a
real page — redeploy the Worker (`npx wrangler deploy` from
`ans-shortener/`) to pick up that change.
