# BackRise Nexus — Vite + React

This project has been migrated from Create React App (CRA) to **Vite**.

## Key Changes from CRA

| CRA | Vite |
|-----|------|
| `react-scripts start` | `vite` (via `npm run dev`) |
| `react-scripts build` | `vite build` (via `npm run build`) |
| `public/index.html` | `index.html` at project root |
| `src/index.tsx` | `src/main.tsx` |
| `REACT_APP_*` env vars | `VITE_*` env vars |
| `process.env.REACT_APP_*` | `import.meta.env.VITE_*` |
| `react-app-env.d.ts` | `vite-env.d.ts` |

## Setup

```bash
cd react-app
npm install
cp .env.example .env    # Fill in your secrets
npm run dev             # Starts on http://localhost:3000
npm run build           # Production build → /build
npm run preview         # Preview production build
```

## Environment Variables

Rename `.env.example` to `.env` and fill in your keys. All env vars must be prefixed with `VITE_`.

## Backend

```bash
cd backend
npm install
npm run dev
```
