# Dzeck Stream

## Overview
Drama streaming platform untuk menonton drama China dan konten favorit lainnya. Dibangun dengan React 19, TypeScript, Vite, dan Tailwind CSS.

## Recent Updates (25 Dec 2024)
- ✅ Lokalisasi Search page ke Bahasa Indonesia (judul, placeholder, hasil)
- ✅ Tambah support video sulih suara/dubbed (multiple CDN/server selection)
- ✅ Improved Player UI dengan CDN/dubbing selector
- ✅ Setup Replit environment dengan port 5000 dan proxy compatibility

## Project Structure
- `/components` - Reusable React components (Layout, MovieCard, Navbar)
- `/pages` - Page components (Home, Detail, Player, Search)
- `/services` - API service layer dengan proxy fallback system
- `App.tsx` - Main application dengan HashRouter
- `index.tsx` - Application entry point
- `types.ts` - TypeScript type definitions

## Key Features
- **Multi-CDN/Dubbed Support**: Pemilihan server dan versi sulih suara di player
- **Proxy System**: Fallback system untuk handle CORS dan rate limiting
- **Responsive Design**: Mobile-first approach dengan Tailwind CSS
- **HLS Streaming**: Support untuk adaptive bitrate streaming
- **Episode Navigation**: Grid selector untuk navigasi episode cepat

## Development
- **Dev Server**: `npm run dev` (port 5000)
- **Build**: `npm run build` (untuk production)
- **Preview**: `npm run preview`

## Technical Stack
- React 19 dengan TypeScript
- Vite 6 untuk bundling dan dev server
- React Router DOM untuk client-side routing
- Tailwind CSS (CDN) untuk styling
- Lucide React untuk icons
- HLS.js untuk adaptive streaming

## Configuration
- Vite configured untuk port 5000 dengan `allowedHosts: true`
- Menggunakan HashRouter untuk routing
- Environment variables untuk API keys (GEMINI_API_KEY)

## API Integration
- Backend: Sansekai API (dramabox service)
- Multi-proxy fallback untuk reliability
- Support untuk:
  - VIP dramas
  - Latest releases
  - Trending content
  - Search functionality
  - Episode lists dengan multiple CDN options

## Deployment
- Static hosting via Vite build
- Build configuration: `npm run build` → `dist/` directory
- Ready for Replit publishing
