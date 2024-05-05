import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "theme-color": "var(--theme-color)",
      },
      backgroundImage: {
        "sl-wave": "url('./assets/images/SL_BG_WAVE_2.gif')",
      },
      fontFamily: {
        sans: ["SimmaLugnt-Sans", "var(--font-simmalugnt)"],
      },
      fontSize: {
        base: [
          "1rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        heading: [
          "2.5rem",
          {
            lineHeight: "3rem",
            letterSpacing: "-0.03em",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
