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
        buttons: "var(--color-buttons)",
        buttonsTypography: "var(--color-buttons-typography)",
      },
      backgroundImage: {
        "sl-wave": "url('./assets/images/SL_BG_WAVE_2.gif')",
      },
      spacing: {
        "4.5rem": "4.5rem",
      },
      width: {
        "5.3rem": "5.3rem",
        "7.4rem": "7.4rem",
        "7.7rem": "7.7rem",
      },
      letterSpacing: {
        "-0.03em": "-0.03em",
      },
      padding: {
        "6.5rem": "6.5rem",
        "8.8rem": "8.8rem",
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
            letterSpacing: "-0.03em",
            fontWeight: "700",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.03em",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
