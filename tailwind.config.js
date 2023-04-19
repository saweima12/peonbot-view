/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  safelist: [
    "flex",
		"flex-row",
		"flex-col",
		"sm:flex-row"
  ],
  plugins: [],
}

export default config
