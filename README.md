# InOut Creator — Landscape Designer Portfolio

Personal portfolio site for a landscape designer based in Dubai.

**Live site:** [inoutcreator.com](https://inoutcreator.com)

## Stack

- Next.js 14, TypeScript, Tailwind CSS
- Static export → GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Deploy

- Repository: [marfa77/inoutcreator](https://github.com/marfa77/inoutcreator)
- Domain: **https://inoutcreator.com**
- GitHub Actions: `.github/workflows/deploy.yml`

Enable GitHub Pages: **Settings → Pages → Source: GitHub Actions**.

## DNS for inoutcreator.com

At your domain registrar, add A records for the apex `@`:

```text
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

Optional IPv6:

```text
@  AAAA  2606:50c0:8000::153
@  AAAA  2606:50c0:8001::153
@  AAAA  2606:50c0:8002::153
@  AAAA  2606:50c0:8003::153
```

For `www.inoutcreator.com`:

```text
www  CNAME  marfa77.github.io
```

After DNS is configured, in GitHub: **Settings → Pages → Custom domain** → `inoutcreator.com`, enable **Enforce HTTPS**.

The `public/CNAME` file is included in the build output automatically.

## Content

Edit project data in `lib/projects.ts`, services in `lib/services.ts`, profile text in `lib/profile.ts`, and contact details in `lib/config.ts`.
