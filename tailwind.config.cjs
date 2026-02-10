/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#243B86",   // Indigo Blue
          red: "#DC2626",      // Red accent
          ink: "#0F172A",      // near-black
          paper: "#FFFFFF",
          mist: "#F6F7FB",     // light grey
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
      },
    },
  },
  plugins: [],
};
