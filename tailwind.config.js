/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
      minHeight: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
      maxHeight: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
      colors: {
        'primary': {
          DEFAULT: '#22527C',
          100: '#e6eff8',
          200: '#c8deef',
          300: '#97c2e2',
          400: '#5fa1d1',
          500: '#3b86bc',
          600: '#2a6a9f',
          700: '#22527c',
          800: '#21496b',
          900: '#203e5a',
        },
        'primary-dark': {
          DEFAULT: '#F2DDA4',
          100: '#f8eccd',
          200: '#f2dda4',
          300: '#e8c061',
          400: '#e3a83c',
          500: '#db8a25',
          600: '#c16a1e',
          700: '#a14d1c',
          800: '#833d1d',
          900: '#6c321b',
        },
        'neutral': {
          DEFAULT: '#ECEEF2',
          100: '#eceef2',
          200: '#d8dde5',
          300: '#bdc5d3',
          400: '#9ea8bc',
          500: '#8690ab',
          600: '#747d9c',
          700: '#686e8d',
          800: '#585c75',
          900: '#494d5f',
        },
        'dark-neutral': {
          DEFAULT: '#1F2937',
          100: '#eaeef4',
          200: '#d0dbe7',
          300: '#a6bcd3',
          400: '#7799b9',
          500: '#557ca2',
          600: '#426287',
          700: '#37506d',
          800: '#30455c',
          900: '#2c3c4e',
        },
      },
    },
  },
  plugins: [],
};

