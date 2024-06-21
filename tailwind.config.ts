/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxxs: "275px",
      xxs: "375px",
      xs: "414px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1445px",
      xxxl: "1536px",
    },
    colors: {
      secondary: "#828282",
      primarys: {
        50: "#eff4ff",
        100: "#dae4ff",
        200: "#bed1ff",
        300: "#91b4ff",
        400: "#5989fd",
        500: "#3763fa",
        600: "#2142ef",
        700: "#192edc",
        800: "#1b27b2",
        900: "#1c288c",
        950: "#161a55",
      },
      primary: {
        50: "#eefbf3",
        100: "#d5f6e0",
        200: "#afebc6",
        300: "#7bdaa6",
        400: "#44c382",
        500: "#23af6c",
        600: "#148752",
        700: "#106c44",
        800: "#0f5638",
        900: "#0d472e",
        950: "#06281b",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
});
export default config;
