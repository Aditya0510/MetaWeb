/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {
      fontFamily: {
        'Fira-Sans': ['Fira Sans', 'Arial', 'sans-serif'],
        'Fira-Code': ['Fira Sans Condensed', 'monospace'],
      }
    },
    screens: {

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '3xl': '1728px',
      // => @media (min-width: 1728px) { ... }

      '4xl': '1920px',
      // => @media (min-width: 1920px) { ... }

      // '2xl': '1920px',
      // 'xl': '1728px',
      // 'lg': '1440px',
      // 'md': '1280px',
      // 'sm': '768px',
      // 'xs': '375px',
    }
  },
  plugins: [],
}

