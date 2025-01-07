import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        suitRegular: ["SUIT-Regular"],
        suitMedium: ["SUIT-Medium"],
        suitBold: ["SUIT-Bold"],
        suitExtraBold: ["SUIT-ExtraBold"],
        suitHeavy: ["SUIT-Heavy"],
      },
    },
  },
  plugins: [],
} satisfies Config;
