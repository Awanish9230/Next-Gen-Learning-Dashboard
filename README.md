# Padhle - Futuristic Student Dashboard

## 1. Project Overview
Padhle is a state-of-the-art, premium student learning dashboard. It features a futuristic 2026-style aesthetic with dark mode only, deep blacks, glassmorphism, subtle neon gradients, and hardware-accelerated Framer Motion animations. The design is responsive and fluid from mobile devices up to large desktop screens, giving users a smooth and highly interactive experience.

## 2. Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Database:** Supabase PostgreSQL
- **Data Fetching:** Server Components (`@supabase/ssr`)
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 3. Folder Structure
```
src/
├── app/
│   ├── page.tsx           # Server Component fetching data & rendering dashboard
│   ├── layout.tsx         # Root layout with font and sidebar
│   ├── loading.tsx        # Suspense loading skeletons
│   ├── error.tsx          # Error boundary
│   └── globals.css        # Tailwind configuration and theme variables
├── components/
│   ├── dashboard/         # Dashboard-specific components (HeroTile, CourseCard, etc.)
│   ├── sidebar/           # Desktop Sidebar and MobileNav
│   └── ui/                # Shared reusable components (ProgressBar, Skeleton)
├── lib/
│   └── supabase/          # Supabase client and server initialization
├── types/
│   └── course.ts          # TypeScript interfaces
└── utils/                 # Utilities (cn.ts, iconMap.tsx)
```

## 4. Architecture Decisions
- **Bento Grid Layout:** Used CSS Grid for a highly responsive, asymmetrical tile layout.
- **Glassmorphism:** Leveraged backdrop-blur, subtle borders, and box-shadows to create floating depth.
- **Strict Animations:** All animations (via Framer Motion) are strictly bound to `transform` and `opacity` properties to avoid browser repaints and layout shifts, ensuring maximum GPU acceleration.
- **Layout Animations:** Sidebar navigation uses Framer Motion's `layoutId` to seamlessly transition the active state indicator.

## 5. Server vs Client Components Explanation
- **Server Components (`app/page.tsx`):** Used strictly for data fetching (`supabase` client) at request time. This reduces the client bundle size and provides secure access to the database without exposing secrets.
- **Client Components (`"use client"`):** Used for interactive UI elements that require browser APIs or state, such as `Framer Motion` animations, hover effects, and the active navigation state hook (`usePathname`).

## 6. Supabase Setup
1. Create a project at [Supabase](https://supabase.com/).
2. Run the SQL schema from `schema.sql` in the SQL editor.
3. Run the SQL seed data from `seed.sql`.
4. Copy your project URL and Anon Key.

## 7. Environment Variables
Create a `.env.local` file at the root of the project:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## 8. Running Locally
```bash
npm install
npm run dev
```
Navigate to `http://localhost:3000`.

## 9. Deployment to Vercel
1. Push the code to a GitHub repository.
2. Import the repository in [Vercel](https://vercel.com/).
3. Add the Supabase environment variables in the Vercel project settings.
4. Deploy!

## 10. Challenges Solved
- **No Layout Shift Animations:** Ensured `scale`, `y`, and `width` animations inside `ProgressBar` and `CourseCard` only trigger GPU composite layers.
- **Dynamic Icon Rendering:** Created `iconMap.tsx` to dynamically map Supabase `icon_name` string fields to actual Lucide React components safely.
- **Responsive Navigation:** Smoothly hiding the desktop sidebar in favor of a fixed bottom bar on mobile screens without breaking Framer Motion `layoutId` contexts.

## 11. Performance Optimizations
- Implemented `next/font` for optimal font loading (Outfit).
- Suspense with highly optimized shimmering Skeletons for perceived performance.
- CSS `will-change` (handled internally by framer-motion) and hardware acceleration on interactive hover elements.
