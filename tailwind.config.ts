import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        kannada: ["__Noto_Sans_b93534", "sans-serif"],
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
          "raisin-black": "#333335",
          "rich-black": "#313136",
          "dark-purple": "#252031",
        },
        onSecondary: {
          "english-violet": "#38304B",
        },
        accent: {
          "spring-bud": "#A3E635",
          "green-yellow": "#BEF264",
        },
        onAccent: {
          "pakistan-green": "#1A2E05",
        },
        background: {
          "night": "#100E16",
          "taupe-gray": "#65656E",
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
  },
  plugins: [],
} satisfies Config;
