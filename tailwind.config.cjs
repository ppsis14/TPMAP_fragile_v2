// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "2xs": ".70rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".975rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4rem",
      "8xl": "5rem",
      "9xl": "6rem",
      "10xl": "8rem",
    },
    extend: {
      fontFamily: {
        "TH-prompt": ["Prompt", "sans-serif"],
        "TH-sarabun": ["Sarabun", "sans-serif"],
        "quick-sans": ["Quicksand", "sans-serif"],
        "TH-kanit": ["Kanit", "sans-serif"],
        "yeseva-1": ["Yeseva One", "cursive"],
      },
      animation: {
        "bounce-slow": "bounce 5s infinite",
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
