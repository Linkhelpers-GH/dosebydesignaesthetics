# Dose by Design

Modern React + Vite rebuild of [dosebydesignaesthetics.info](https://www.dosebydesignaesthetics.info/).

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New Project** → import the repo.
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Install Command: `npm install`
7. Deploy.

`vercel.json` already rewrites SPA routes to `index.html`.

After DNS cutover, point `dosebydesignaesthetics.info` to the Vercel project.

## Project notes

- NAP source: GBP address + website phone + GBP hours (`src/data/business.js`)
- Booking: Aesthetic Record
- Financing: Cherry widget + Banking Membership
- Unverified until confirmed: Allē / Aspire / Evolus, refer-a-friend, consult deposit, Lip Flip, Cortisone
