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
          "powder-blue": "#A5B4FC",
        },
        secondary: {
          "cadet-grey": "#A1A1AA",
          "rich-black": "#0E0D1F",
        },
        accent: {
          "spring-bud": "#A3E635",
          "green-yellow": "#BEF264",
        },
        background: {
          "night": "#100E16",
        },
        surface: {
          "raisin-black": "#1C1825",
        },
        onPrimary: {
          "anti-flash-withe": "#F4F4F5",
          "lavender": "#EBEFFF",
        },
        success: {
          "dark-pastel-green": "#22C55E",
        },
        error: {
          "imperial-red": "#EF4444",
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
