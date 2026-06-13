import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sand: {
          50: "#faf8f5",
          100: "#f3efe8",
          200: "#e8e0d4",
          300: "#d4c8b8",
        },
        forest: {
          950: "#0f1412",
          900: "#1a2421",
          800: "#243029",
          700: "#2f3d34",
        },
        bronze: {
          400: "#c4a574",
          500: "#b8956b",
          600: "#9a7a52",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      letterSpacing: {
        luxury: "0.22em",
      },
      boxShadow: {
        editorial: "0 24px 80px rgba(15, 20, 18, 0.12)",
        card: "0 8px 40px rgba(15, 20, 18, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
