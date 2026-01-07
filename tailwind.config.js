/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBgColor: '#B41712',
        mainBgHoverColor: '#FF645F',
        secondBg: '#991b1b',
      },
    },
  },
  plugins: [],
};
