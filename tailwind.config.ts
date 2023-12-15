import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter', sans-serif"],
        roboto: ["'Roboto', sans-serif"],
      },
      colors: {
        gray: "#1F1F1F",
        "gray-1": "#333",
      },
    },
    screens: {
      tablet: "768px",
      desktop: "1280px",
    },
  },
  plugins: [],
} satisfies Config;
