/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: "#ccff00",
          "lime-dark": "#b0dc00",
          dark: "#0c0d0f",
          surface: "#14161a",
          card: "#191c22",
          border: "#262a34",
          muted: "#94a3b8",
        },
      },
      fontFamily: {
        display: ["Oswald", "Inter", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
