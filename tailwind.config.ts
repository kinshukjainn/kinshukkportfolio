import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        source: ['"Source Code Pro"', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
