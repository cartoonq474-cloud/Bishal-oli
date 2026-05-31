import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          bg: '#050505',
          surface: '#121212',
          border: '#333333',
          accent: '#CCFF00', // Acid Green
          text: '#ffffff',
          muted: '#888888',
          danger: '#FF3333'
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(204, 255, 0, 1)',
        'brutal-white': '4px 4px 0px 0px rgba(255, 255, 255, 1)',
      }
    },
  },
  corePlugins: {
    preflight: false, // Protects the existing globals.css from Tailwind's reset
  },
  plugins: [],
};

export default config;
