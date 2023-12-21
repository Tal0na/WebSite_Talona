// tailwind.config.js
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground-rgb)',
        'background-start': 'var(--background-start-rgb)',
        'background-end': 'var(--background-end-rgb)',
      },
    },
    backgroundImage: {
      // Adicione suas imagens de plano de fundo personalizadas aqui, se necessário
    },
  },
  plugins: [],
};

export default config;