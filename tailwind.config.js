const { getDisplayName } = require("next/dist/shared/lib/utils");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      back: "#161617",
      blue: "#00C6C2",
      red: "#E9425B",
      white: "#F8F8FF",
    },
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
        "infinite-scroll-mobile": "infinite-scroll-Mobile 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-Mobile": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      scale: {
        '25': '0.15',
      }
    },
  },
  plugins: [],
};
