import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fdfeff",
        foreground: "#777777",
        accent1: "#45A41C",
        accent2: "#339966",
        accent3: "#3351AB"
      },
      fontFamily: {
        rancho: ['var(--font-rancho)', 'serif'],
        bigShot: ['var(--font-bigshot)', 'serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;