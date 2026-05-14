import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        roboto:  ["var(--font-roboto)", "sans-serif"],
      },
      colors: {
        gruvbox: {
          // Fundos dark
          bg:          "#2E2E2E",
          "bg-soft":   "#282828",
          "bg1":       "#2E2E2E",
          "bg2":       "#3a3a3a",
          "bg3":       "#4a4a4a",
          "bg4":       "#5a5a5a",

          // Texto dark
          fg:          "#D6C8A4",
          "fg1":       "#c4b896",
          "fg2":       "#a89e82",

          // Bordas dark
          "border":    "#3a3a3a",

          // Fundos light
          "light-bg":  "#f9f5d7",
          "light-bg1": "#EBDBB2",
          "light-bg2": "#d5c4a1",

          // Texto light
          "light-fg":  "#1e2322",
          "light-fg1": "#252b2a",

          // Bordas light
          "light-border": "#c0b89a",

          // Sombras
          "shadow-dark":  "#1a1a1a",
          "shadow-light": "#c0b89a",
        },
      },
      borderColor: {
        "gruvbox-dark":  "#3a3a3a",
        "gruvbox-light": "#c0b89a",
      },
      boxShadow: {
        "gruvbox-dark":  "0 4px 6px -1px #1a1a1a",
        "gruvbox-light": "0 4px 6px -1px #c0b89a",
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ":root": {
          "--foreground-rgb": "30, 35, 34",
          "--background-end-rgb": "249, 245, 215",
        },
        ".dark": {
          "--foreground-rgb": "214, 200, 164",
          "--background-end-rgb": "46, 46, 46",
        },
        "body": {
          color: "rgb(var(--foreground-rgb))",
          backgroundColor: "rgb(var(--background-end-rgb))",
        },
      })
    }),
  ],
}

export default config
