/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: colors.gray,
      secondary: colors.green,
    },
  },
  plugins: [],
};
