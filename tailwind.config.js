/** @type {import('tailwindcss').Config} */
export default {
 content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
           colors: {
        primary: '#6c2c8d',
        secondary: '#db2487',
        light: '#fffbff',
        dark: '#1f1f1f', 
        accent1: '#a944b4',
        accent2: '#c0629c',
        accent3: '#e27ac2',
      },

    },
    keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px #ab278a' },
          '50%': { boxShadow: '0 0 25px #b6127e' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
  },
  plugins: [],
}

