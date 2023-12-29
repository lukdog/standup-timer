import type { Config } from 'tailwindcss'
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend : {
      colors: {
      'grey-banner': '#2e2e2e',
      'text-dark': '#dadada',
      'card-dark': '#2f2f2f',
      'grey-page': '#191919',
      }, 
    },
  },
  plugins: [],
} satisfies Config

