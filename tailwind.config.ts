// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#99CC67",
            content1: "#67AB22",
            content2: "#CFCFCF",
            content3: "#262626",
            divider: "#00000026",
            secondary: {
              "50": "#67AB22",
              "100": "#7bbf36",
              DEFAULT: "#000000",
              foreground: "#a00000",
            },
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#663398",
            content1: "#9854DD",
            content2: "#202020",
            content3: "#D9D9D9",
            divider: "#ffffff26",
            secondary: {
              "50": "#9854DD",
              "100": "#340166",
              DEFAULT: "#FFFFFF",
              foreground: "#a00000",
            },
          },
        },
      },
    }),
  ],
};
