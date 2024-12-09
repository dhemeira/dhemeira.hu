import bsGrid from '@dhemeira/tailwind-bootstrap-grid';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontSize: {
      'sm': '0.750rem',
      'base': '1rem',
      'xl': '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': ['4.210rem', '1.25'],
    },
    extend: {
      height: {
        screen: ['100vh', '100dvh'],
      },
      minHeight: {
        screen: ['100vh', '100dvh'],
      },
      maxHeight: {
        screen: ['100vh', '100dvh'],
      },
      colors: {
        light: {
          text: '#110f1f',
          background: '#d9d6f5',
          primary: '#0bdab4',
          secondary: '#8e85e0',
          accent: '#c2750a',
        },
        dark: {
          text: '#e2e0f0',
          background: '#0d0a29',
          primary: '#25f4ce',
          secondary: '#281f7a',
          accent: '#f5a83d',
        },
      },
    },
  },
  plugins: ['gatsby-plugin-postcss', bsGrid],
};
