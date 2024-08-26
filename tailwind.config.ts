import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-gradient-yellow": "linear-gradient(to bottom, rgba(255, 196, 27, 0), rgba(255, 196, 27, 1), rgba(255, 196, 27, 1))",
        "linear-gradient-red": "linear-gradient(to bottom, rgba(250, 67, 84, 0), rgba(250, 67, 84, 1), rgba(250, 67, 84, 1))",
        "linear-gradient-blue": "linear-gradient(to bottom, rgba(85, 196, 241, 0), rgba(85, 196, 241, 1), rgba(85, 196, 241, 1))",
      },
    },
    colors: {
      "white.100": "rgba(180, 190, 203, 1)",
      "white.200": "rgba(255, 255, 255, 1)",
      "black.100": "rgba(0, 0, 0, 1)",
      "black.200": "rgba(27, 28, 32, 1)",
      "grey.100": "rgba(27, 28, 32, 1)",
      "yellow.100": "rgba(255, 196, 27, 1)",
      "green.100": "rgba(0, 166, 153, 1)",
      "red.100": "rgba(250, 67, 84, 1)",
      "blue.100": "rgba(85, 196, 241, 1)",
      "green.200": "rgba(0, 166, 153, 1)",
      "green.300": "rgba(0, 138, 128, 1)",
      "red.200": "#FA4354",
      "grey.200": "#B4BECB",
      "grey.300": "#1B1C20",
      "green.400": "#00A699",
      "red.300": "#FE4365",
      "grey.400": "#343F4B",
      "grey.500": "#222428",
      "grey.600": "#63768D",
      "black.300": "#060809",
      "yellow.200": "#FFF3D1",
      "yellow.400": "#FFCE41",
      "yellow.500": "#FFC41B",
      "blue.200": "#55C4F1"
    },
    fontFamily: {
      mattersq: "Matter SQ Regular",
      mdtest: ["MD Nichrome Test, sans-serif;"]
    },
  },
  plugins: [],
};
export default config;
