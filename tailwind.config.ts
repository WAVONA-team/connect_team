import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
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
          "black-opacity": "rgba(0, 0, 0, 0.5)",
        },
        onSecondary: {
          "english-violet": "#38304B",
          platinum: "#D4D4D9",
          "davys-gray": "#27272A",
        },
        accent: {
          "spring-bud": "#A3E635",
          "green-yellow": "#BEF264",
          azure: "#5484FF",
        },
        onAccent: {
          "pakistan-green": "#1A2E05",
        },
        background: {
          night: "#100E16",
          "taupe-gray": "#65656E",
        },
        surface: {
          "raisin-black": "#1C1825",
          black: "#2D2D2D",
        },
        onPrimary: {
          "anti-flash-withe": "#F4F4F5",
          lavender: "#EBEFFF",
        },
        success: {
          "dark-pastel-green": "#22C55E",
        },
        error: {
          "imperial-red": "#EF4444",
        },
      },
    },
    boxShadow: {
      surface: "0px 8px 12px 0px rgba(0, 0, 0, 0.30)",
    },
  },
  plugins: [],
} satisfies Config;
