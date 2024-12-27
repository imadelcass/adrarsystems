/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00CAF0",
        secondary: "#5C2452",
        dark: {
          DEFAULT: "#1E1326",
          100: "#00273D",
        },
        light: {
          DEFAULT: "#32152D",
          100: "#77406F",
        }
      },
    },
  },
  plugins: [],
};
