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
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#1780a3",
        secondary: "#028090",
        tertiary: "#E4FDE1",
        quaternary: "#456990",
        // Warm neutral surfaces (light mode)
        paper: "#FFFDF9",
        sand: "#F5EFE4",
        ink: "#1c1a17",
        // Warm accent, used sparingly (banner, small highlights)
        clay: "#C2703D",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', ...defaultTheme.fontFamily.sans],
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    }
  }
}