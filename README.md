# Ennajem Beiba — Portfolio

React + Vite + Tailwind CSS portfolio in **Arabic (RTL) / French / English**, based on the "Alex Chen" HTML design.

## Run locally
```bash
npm install
npm run dev
```

## Profile photo
Put your photo at **`public/profile.jpg`** (square, ~600×600). Until it exists, a placeholder is shown automatically.
It appears in the hero and in the header.

## Edit content
All text for the 3 languages is in `src/translations.js`. Contact details (email, phone, GitHub, CV path) are in the `CONTACT` object at the top of that file.
The CV is served from `public/Ennajem_Beiba_Resume.pdf`.

## Deploy on Vercel
**Option A — GitHub (recommended)**
1. Push this folder to a GitHub repository.
2. On vercel.com → *Add New → Project* → import the repo.
3. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). Click **Deploy**.

**Option B — CLI**
```bash
npm i -g vercel
vercel --prod
```
