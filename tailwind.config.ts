import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        labelColor: "#0A3B8A",
        inputColor: "#082D69",
        container: "#EFF5FF",
        buttonBg: "#2776F5",
        hoverButtonBg: "#2265D1",
        inputBorder: "#0D4DB2",
        hoverInput: "#1162E4",
      },
    },
  },
  plugins: [],
};
