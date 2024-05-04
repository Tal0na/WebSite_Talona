// tailwind.config.js
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground-rgb)",
        "background-start": "var(--background-start-rgb)",
        "background-end": "var(--background-end-rgb)",

        purple: {
          50: "#ECEBF4",
      100: "#D8D7EA",
      200: "#AFABD3",
      300: "#8883BE",
      400: "#615AA8",
      500: "#4F4A8C",
      600: "#403C72",
      700: "#2F2C54",
      800: "#201E39",
      900: "#0F0E1B",
      950: "#08070D"
        },
      },
    },
    backgroundImage: {
      
    },
  },
  plugins: [],
}

export default config
