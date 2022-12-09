/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      // => @media (min-width: 360px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
    },
    extend: {
      boxShadow: {
        "3xl": "4px 4px 18px -4px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
