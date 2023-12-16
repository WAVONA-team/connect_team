import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        kannada: ["__Noto_Sans_Kannada_9c80e5", "__Noto_Sans_Kannada_Fallback_9c80e5", "sans-serif"],
      },
      colors: {
        gray: "#1F1F1F",
        "gray-1": "#333",
        primary: {
          "button-fill": "#6366F1",
          "majorelle-blue": "#4F46E5",
          "palatinate-blue": "#4338CA",
        },
        secondary: {
          "cadet-grey": "#A1A1AA",
        },
      },
    },
    screens: {
      tablet: "768px",
      desktop: "1280px",
    },
  },
  plugins: [],
} satisfies Config;
