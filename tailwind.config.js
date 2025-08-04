/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

const config = {
    darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'toast-slide-in': 'toastSlideIn 0.5s ease-out', // Slide-in from bottom
        'toast-fade-out': 'toastFadeOut 2s ease-out', // Fade-out effect
      },
      keyframes: {
        toastSlideIn: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        toastFadeOut: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [daisyui],
}

export default config
