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
          // ── Dark backgrounds ──────────────────────────
          "bg-hard":       "#1D2021",  // ← sua cor
          bg:              "#282828",
          "bg-soft":       "#32302f",
          bg1:             "#3c3836",
          bg2:             "#504945",
          bg3:             "#665c54",
          bg4:             "#7c6f64",

          // ── Dark foregrounds ──────────────────────────
          fg:              "#EBDBB2",  // ← sua cor
          fg1:             "#EBDBB2",
          fg2:             "#d5c4a1",
          fg3:             "#bdae93",
          fg4:             "#a89984",

          // ── Dark border ───────────────────────────────
          border:          "#3c3836",

          // ── Light backgrounds ─────────────────────────
          "light-bg-hard": "#f9f5d7",
          "light-bg":      "#fbf1c7",
          "light-bg-soft": "#f2e5bc",
          "light-bg1":     "#ebdbb2",
          "light-bg2":     "#d5c4a1",
          "light-bg3":     "#bdae93",
          "light-bg4":     "#a89984",

          // ── Light foregrounds ─────────────────────────
          "light-fg":      "#3c3836",
          "light-fg1":     "#504945",
          "light-fg2":     "#665c54",
          "light-fg3":     "#7c6f64",
          "light-fg4":     "#928374",

          // ── Light border ──────────────────────────────
          "light-border":  "#d5c4a1",

          // ── Sombras ───────────────────────────────────
          "shadow-dark":   "#1D2021",  // ← sua cor
          "shadow-light":  "#bdae93",

          // ── Acentos ───────────────────────────────────
          red:             "#E8174A",  // ← sua cor
          "red-bright":    "#E8174A",  // ← sua cor
          green:           "#98971a",
          "green-bright":  "#b8bb26",
          yellow:          "#d79921",
          "yellow-bright": "#fabd2f",
          blue:            "#458588",
          "blue-bright":   "#83a598",
          purple:          "#b16286",
          "purple-bright": "#d3869b",
          aqua:            "#689d6a",
          "aqua-bright":   "#8ec07c",
          orange:          "#d65d0e",
          "orange-bright": "#fe8019",
          gray:            "#928374",
          "gray-bright":   "#a89984",
        },
      },
      borderColor: {
        "gruvbox-dark":  "#3c3836",
        "gruvbox-light": "#d5c4a1",
      },
      boxShadow: {
        "gruvbox-dark":  "0 4px 6px -1px #1D2021",
        "gruvbox-light": "0 4px 6px -1px #bdae93",
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ":root": {
          "--foreground-rgb":     "60, 56, 54",
          "--background-end-rgb": "251, 241, 199",
          "--accent-rgb":         "232, 23, 74",   // #E8174A
        },
        ".dark": {
          "--foreground-rgb":     "235, 219, 178",  // #EBDBB2
          "--background-end-rgb": "40, 40, 40",
          "--accent-rgb":         "232, 23, 74",   // #E8174A
        },
        "body": {
          color:           "rgb(var(--foreground-rgb))",
          backgroundColor: "rgb(var(--background-end-rgb))",
          transition:      "background-color 0.3s ease, color 0.3s ease",
        },
        "h1, h2, h3, h4, h5, h6": {
          color: "#3c3836",
        },
        ".dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6": {
          color: "#EBDBB2",
        },
        "p": {
          color: "#665c54",
        },
        ".dark p": {
          color: "#bdae93",
        },
        "a": {
          color:      "#E8174A",
          transition: "color 0.2s ease",
        },
        "a:hover": {
          color: "#ff3d6b",
        },
        ".dark a": {
          color: "#E8174A",
        },
        ".dark a:hover": {
          color: "#EBDBB2",
        },
        "strong, b": {
          color: "#d79921",
        },
        ".dark strong, .dark b": {
          color: "#fabd2f",
        },
        "code": {
          color:           "#98971a",
          backgroundColor: "#3c3836",
          borderRadius:    "3px",
          padding:         "0.1rem 0.4rem",
          fontSize:        "0.9em",
        },
        ".dark code": {
          color:           "#b8bb26",
          backgroundColor: "#504945",
        },
        "pre": {
          backgroundColor: "#3c3836",
          borderRadius:    "6px",
          padding:         "1rem",
          overflowX:       "auto",
          border:          "1px solid #504945",
        },
        ".dark pre": {
          backgroundColor: "#1D2021",
          border:          "1px solid #3c3836",
        },
        "pre code": {
          backgroundColor: "transparent",
          padding:         "0",
        },
        "blockquote": {
          borderLeft:  "4px solid #E8174A",
          paddingLeft: "1rem",
          color:       "#665c54",
          fontStyle:   "italic",
        },
        ".dark blockquote": {
          borderLeft: "4px solid #E8174A",
          color:      "#bdae93",
        },
        "hr": {
          borderColor: "#d5c4a1",
        },
        ".dark hr": {
          borderColor: "#3c3836",
        },
        "::selection": {
          backgroundColor: "#E8174A",
          color:           "#fbf1c7",
        },
        ".dark ::selection": {
          backgroundColor: "#E8174A",
          color:           "#1D2021",
        },
        "::-webkit-scrollbar": {
          width: "8px",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#f2e5bc",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#bdae93",
          borderRadius:    "4px",
        },
        ".dark ::-webkit-scrollbar-track": {
          backgroundColor: "#1D2021",
        },
        ".dark ::-webkit-scrollbar-thumb": {
          backgroundColor: "#504945",
        },
      })
    }),
  ],
}

export default config
