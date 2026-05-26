import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f7f3ee',
        section: '#efe6db',
        ink: '#2f2c29',
        soft: '#6e665f',
        accent: '#b88959'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(31, 22, 13, 0.08)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 20% 20%, rgba(184,137,89,0.18), transparent 45%)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 700ms ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config;
