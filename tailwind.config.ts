import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter', sans-serif"],
        roboto: ["'Roboto', sans-serif"],
      },
      colors: {
        primary: {
          "neon-blue": "#6366F1",
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
