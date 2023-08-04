// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js}'
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#114B5F",
        secondary: "#028090",
        tertiary: "#E4FDE1",
        quaternary: "#456990",
      }
    }
  }
}