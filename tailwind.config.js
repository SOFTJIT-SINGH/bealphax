/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sg: '#088178', // your custom color
      },
    },
  },
  plugins: [daisyui],
}

export default config
