/** @type {import('tailwindcss').Config} */
export default {
 content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5c216e',
        secondary: '#b6127e',
        light: '#fffbff',
        dark: '#1f1f1f', 
      },
    },
    keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px #b6127e' },
          '50%': { boxShadow: '0 0 25px #b6127e' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
  },
  plugins: [],
}

