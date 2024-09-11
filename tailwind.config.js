/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans your source files
  ],
  theme: {
    extend: {},
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
  },
  plugins: [],
};
