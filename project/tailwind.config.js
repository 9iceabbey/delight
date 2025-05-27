/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f1fb',
          100: '#dadcf4',
          200: '#bcc0eb',
          300: '#969ae0',
          400: '#7074d7',
          500: '#5354cc',
          600: '#4141b8',
          700: '#35348e',
          800: '#1f1f5c',
          900: '#10102e',
          950: '#070052',
        },
        cyan: {
          400: '#0BEFF2',
          500: '#06C7CA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};