# Dzeck Stream

## Overview
A React-based streaming application for watching Chinese dramas. Built with React 19, TypeScript, Vite, and Tailwind CSS (via CDN).

## Project Structure
- `/components` - Reusable React components (Layout, MovieCard, Navbar)
- `/pages` - Page components (Home, Detail, Player, Search)
- `/services` - API service layer
- `App.tsx` - Main application with routing (HashRouter)
- `index.tsx` - Application entry point
- `types.ts` - TypeScript type definitions

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Technical Stack
- React 19 with TypeScript
- Vite 6 for bundling
- React Router DOM for navigation
- Tailwind CSS (CDN) for styling
- Lucide React for icons
- HLS.js for video streaming

## Configuration
- Vite is configured to run on `0.0.0.0:5000` with all hosts allowed for Replit proxy compatibility
- Uses HashRouter for client-side routing

## API
- Powered by Sansekai API (external service)
- Uses `GEMINI_API_KEY` environment variable if needed
