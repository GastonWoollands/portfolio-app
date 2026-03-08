/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      /*
       * Color Palette Documentation:
       * - primary: Text color (dark on light, light on dark)
       * - secondary: Background color (light on light mode, dark on dark mode)
       * - accent: Interactive elements, CTAs, links (blue)
       * - surface: Card/panel backgrounds in dark mode (neutral, no blue tint)
       */
      colors: {
        primary: {
          DEFAULT: '#171717',
          dark: '#fafafa',
        },
        secondary: {
          DEFAULT: '#fafafa',
          dark: '#0a0a0a',
        },
        accent: {
          DEFAULT: '#3b82f6',
          dark: '#60a5fa',
        },
        surface: {
          DEFAULT: '#ffffff',
          dark: '#171717',
          muted: '#f5f5f5',
          'muted-dark': '#262626',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 