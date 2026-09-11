# anystash-site

Public support and legal pages for **AnyStash** (Apple Shortcuts companion).

Operator: **White Dwarf Technology Co., Ltd.**

## Live URLs

**Primary (canonical / SEO / App Store Marketing URL):**

- Home: https://anystash.izip.vip/
- Support: https://anystash.izip.vip/support/
- Privacy: https://anystash.izip.vip/privacy/
- Terms: https://anystash.izip.vip/terms/

**Fallback (ops only — do not promote as a second brand URL):**

- https://oxgoing.github.io/anystash-site/

With the custom domain active, GitHub Pages usually **redirects** `github.io` → `anystash.izip.vip`. Public links, `canonical`, `sitemap.xml`, and Search Console should use **only** `anystash.izip.vip`.

### If custom-domain DNS fails

`github.io` may keep redirecting to the broken custom domain. Restore the Pages origin:

1. Repo **Settings → Pages → Custom domain**: clear the domain (or delete root `CNAME` and push).
2. Wait for Pages to republish.
3. Confirm https://oxgoing.github.io/anystash-site/ serves content directly.
4. Fix DNS / move to the new domain, then restore `CNAME` (`anystash.izip.vip`) and Pages custom domain.
5. Update `canonical` / `sitemap.xml` if the primary hostname changes.

## Indexing helpers

- `robots.txt` — allows crawl; points at the sitemap on the primary host
- `sitemap.xml` — four primary URLs only
- Each HTML page has `<link rel="canonical" href="https://anystash.izip.vip/...">`

After deploy: Google Search Console → property `https://anystash.izip.vip` → submit `https://anystash.izip.vip/sitemap.xml`.

## Stack

Static HTML + CSS only. English (v1). No build step.

## Local preview

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080/
