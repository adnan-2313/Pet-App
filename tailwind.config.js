/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2md": "1200px",
        "2sm": "940px",
        "mTab":"865px",
        "mobile":"400px",
        "maxMobile":"432px"
      },
    },
  },
  plugins: [],
};
