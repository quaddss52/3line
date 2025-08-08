import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#D6BBFB",
          100: "#9E77ED",
          500: "#6941C6",
          600: "#53389E",
          700: "#7F56D9",
        },
        success: {
          50: "#ECFDF3",

          700: "#027A48",
        },
        brand: "#ff6b6b",
        grey: {
          50: "#F9FAFB",
          400: "#667085",
          600: "#344054",
          700: "#101828",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
