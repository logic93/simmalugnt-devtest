import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "4.5rem": "4.5rem",
      },
      borderRadius: {
        "2.5rem": "2.5rem",
      },
      fontFamily: {
        sans: ["SimmaLugnt-Sans", "var(--font-simmalugnt)"],
      },
      fontSize: {
        base: [
          "1rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "700",
          },
        ],
        heading: [
          "2.5rem",
          {
            lineHeight: "3rem",
            letterSpacing: "-0.03rem",
            fontWeight: "700",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.03rem",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
