# Portfolio Project

This is a [Next.js](https://nextjs.org) portfolio project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- **Modern Next.js App Router structure**
- **Tailwind CSS v4** for utility-first styling
- **JetBrains Mono font** loaded and optimized via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- **Framer Motion** for smooth animations and transitions
- **Swiper.js** for interactive sliders with custom navigation buttons
- **Radix UI** components for accessible UI primitives
- **Animated steps and transitions** (see `Stairs.jsx` and `PageTransition`)
- **Responsive design** and custom utility classes

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see your portfolio.

## Project Structure

- `app/` — Main Next.js app directory (includes `layout.jsx`, `globals.css`)
- `components/` — Reusable React components (Header, Stairs, WorkSliderBtns, etc.)
- `tailwind.config.js` — Tailwind CSS configuration (custom font, colors, etc.)
- `postcss.config.mjs` — PostCSS configuration for Tailwind v4

## Styling & Fonts

- Tailwind CSS is configured in `tailwind.config.js` to use JetBrains Mono as the primary font via CSS variable integration.
- Custom colors and utility classes are available.
- Global styles are managed in `app/globals.css`.

## Animations & Interactivity

- Framer Motion powers animated transitions and interactive UI elements.
- Swiper.js provides slider functionality with custom navigation buttons (`WorkSliderBtns.jsx`).

## Customization

You can easily customize content, colors, and components to fit your personal style and showcase your work.

## Learn More

To learn more about Next.js, Tailwind CSS, and other tools used in this project, check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Swiper.js Documentation](https://swiperjs.com/react)
- [Radix UI Documentation](https://www.radix-ui.com/docs)

## Deploy on Vercel

The easiest way to deploy your portfolio is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Feel free to modify and extend this portfolio to best represent your skills and projects!
