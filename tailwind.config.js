/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f6f6f4',
          dark: '#0a0a0a',
        },
        ink: {
          DEFAULT: '#0a0a0a',
          dark: '#f6f6f4',
        },
        muted: {
          DEFAULT: '#6b6b6b',
          dark: '#a3a3a3',
        },
        hairline: {
          DEFAULT: '#e5e5e5',
          dark: '#262626',
        },
        surface: {
          DEFAULT: '#ffffff',
          dark: '#171717',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
