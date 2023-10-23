/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/App.tsx",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8338EC",
        misc: "#EEE1FF",
      },
    },
  },
  plugins: [],
};
