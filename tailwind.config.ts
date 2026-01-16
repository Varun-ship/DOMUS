import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'domus-green': '#092E32',
        'warm-stone': '#E7E2D8',
        'aureum-gold': '#C9A86A',
        'soft-clay': '#B88A6A',
        'ash-brown': '#3A2F2A',
      },
      fontFamily: {
        'caudex': ['var(--font-caudex)', 'serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'wide': '0.05em',
      },
      animation: {
        'fade-up': 'fadeUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;



