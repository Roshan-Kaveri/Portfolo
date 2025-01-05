/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom font
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "200% 0" },
          "50%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        gradient: "gradient 12s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
