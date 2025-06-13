import { type Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"
import animate from "tailwindcss-animate"

const config: Config = {
  darkMode: ["class", ".dark"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}", // or js/jsx if you're not using TypeScript
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [animate],
}
export default config
