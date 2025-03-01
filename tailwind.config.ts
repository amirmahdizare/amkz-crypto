import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: '#11011E',
        primary: '#0FAE96',
        'border-color': 'rgba(255,255,255,0.05)',
        'text-1': "#ECF1F0",
        'gray-1': "#B6B6B6",
        'black-1': "1D1429",
        'gray-2': "#C6C6C6"
      },
      keyframes: {
        translateUp: {
          '0%': { transform: 'translateY(200px)', opacity: '0', },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        translateLeft: {
          '0%': { transform: 'translateX(200px)', opacity: '0', },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },
      fontSize:{
        mobile:'12px',
        desktop:'16px'
      },
      animation: {
        translateUp1: 'translateUp .5s ease backwards',
        translateUp2: 'translateUp .5s .25s  backwards',
        translateUp3: 'translateUp .5s .5s backwards',
        translateUp4: 'translateUp .5s .75s backwards',
        translateUp: 'translateUp .5s .75s backwards',
        translateLeft: 'translateLeft .5s ease backwards',


      },

    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
} satisfies Config;
