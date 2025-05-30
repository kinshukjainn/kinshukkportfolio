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
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // This is optional if you use CSS variables only
      },
    },
  },
  plugins: [animate],
}
export default config
