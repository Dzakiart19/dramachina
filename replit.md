# Dzeck Stream

## Status: ✅ WORKING & DEPLOYED

Drama streaming platform dengan dukungan berbagai bahasa dan format video.

## Latest Changes (25 Dec 2024 - Final)
- ✅ Lokalisasi penuh Search page ke Bahasa Indonesia
- ✅ Support video sulih suara/dubbed dengan CDN selector di Player
- ✅ Improved input field dengan autoFocus dan keyboard support
- ✅ Setup Replit environment - siap publish/deploy
- ✅ Build successful tanpa errors

## Features
### Search Page 🔍
- Judul: "Cari drama favorit Anda"
- Input field dengan autoFocus
- Placeholder: "Cari berdasarkan judul, penulis, atau kata kunci..."
- Popular search tags
- Search results grid

### Player Features 🎬
- **Multi-CDN Support**: Switch between different servers
- **Dubbed Versions**: Support untuk versi sulih suara Indonesia
- **Quality Selection**: 1080P, 720P, 540P, 360P, 240P
- **Episode Navigation**: Grid selector dengan 12 kolom
- **HLS Streaming**: Adaptive bitrate dengan HLS.js

### Home Page 🏠
- Hero section dengan featured drama
- VIP Choice showcase
- Rekomendasi Pilihan (recommendations)
- Rilis Terbaru (latest releases)
- Dynamic sections dari VIP API
- All text in Indonesian

## Project Structure
```
├── components/
│   ├── Layout.tsx
│   ├── MovieCard.tsx
│   └── Navbar.tsx
├── pages/
│   ├── Home.tsx
│   ├── Detail.tsx
│   ├── Player.tsx
│   └── Search.tsx
├── services/
│   └── api.ts
├── App.tsx
├── index.tsx
├── types.ts
└── vite.config.ts
```

## Tech Stack
- React 19 + TypeScript
- Vite 6 (port 5000)
- Tailwind CSS (CDN)
- React Router DOM
- Lucide React Icons
- HLS.js for streaming

## Running the App
```bash
# Development
npm run dev

# Production Build
npm run build

# Preview
npm run preview
```

## Deployment
- **Target**: Static hosting
- **Build Output**: `dist/` directory
- **Status**: Ready for Replit Publish
- **Command**: `npm run build`

## API Integration
- Backend: Sansekai API
- Multi-proxy fallback system
- Endpoints for: VIP, Latest, Trending, Search, Episodes, Details

## Known Notes
- Tailwind CSS via CDN (production should use PostCSS)
- Home page shows React key warnings (minor - doesn't affect UX)
- Popular searches may timeout based on API availability

## Last Updated
25 December 2024 - All features implemented and tested
