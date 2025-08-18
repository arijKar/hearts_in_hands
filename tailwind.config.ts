import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#F88BA0",
        deepRed: "#B1363B",
        burgundy: "#800020",
        beige: "#FAF0E6",
        cream: "#FFF6E5",
        olive: "#7B8D3B",
        darkOlive: "#4F5D27",
      },
    },
  },
  plugins: [],
};
export default config;
