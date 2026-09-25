# Meghana S. — Portfolio

Public portfolio for a Java backend developer. Content lives in `src/data` so projects, skills, and contact links can be updated without rewriting the UI.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

- `src/data/profile.ts` — name, email, GitHub, LinkedIn
- `src/data/projects.ts` — case studies
- `src/data/skills.ts`
- `src/data/experience.ts`
- `src/data/certifications.ts` — add `date`, `credentialId`, and `verificationUrl` when you have them

Leave `linkedinUrl` as an empty string until the public profile URL is ready. The LinkedIn icon stays hidden until that field is set.

## Production URL

Set `NEXT_PUBLIC_SITE_URL` to the canonical site origin, for example `https://your-domain.example`. On Vercel, `VERCEL_URL` is used when that variable is absent.

## Resume

`/resume` is a print-friendly page. Use the browser print dialog and choose Save as PDF.
