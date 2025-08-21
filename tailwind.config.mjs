/** @type {import('tailwindcss').Config} */
export default {
  // v4 doesn't require "content" with Next/Turbopack
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
      fontFamily: {
        // maps to your next/font CSS variables
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
        display: ["var(--font-fredoka)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)",
      },
      maxWidth: {
        container: "72rem",
      },
    },
  },
  plugins: [],
};
