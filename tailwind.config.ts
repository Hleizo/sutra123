import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { blush:"#F4D6D9", rose:"#F9E7EA", burgundy:"#6E2C2C", cocoa:"#3B2324", cream:"#FFFBFC" },
      borderRadius: { "2xl": "1.25rem" },
    },
  },
  plugins: [],
}
export default config
