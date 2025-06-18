import { type Config } from "tailwindcss"
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
        poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "source-code": ["Source Code Pro", "monospace"],
        "ibm-plex": ["IBM Plex Sans", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      screens: {
        xs: "475px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      fontSize: {
        "2xs": "0.625rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      lineHeight: {
        12: "3rem",
        16: "4rem",
      },
      borderWidth: {
        3: "3px",
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.5)",
        "glow-lg": "0 0 40px rgba(59, 130, 246, 0.3)",
      },
    },
  },
  plugins: [animate],
}
export default config
