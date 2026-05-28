import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f3f6fb',
        section: '#e8eef6',
        ink: '#0f2438',
        soft: '#4a627a',
        accent: '#2f5f8a',
        accentSoft: '#7aa8ce',
      },
      boxShadow: {
        soft: '0 14px 35px rgba(15, 36, 56, 0.1)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 700ms ease-out both',
        float: 'float 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
