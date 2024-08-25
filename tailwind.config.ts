import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    './node_modules/@nextui-org/theme/dist/components/navbar.js',
    './node_modules/@nextui-org/theme/dist/components/link.js',
    "./node_modules/@nextui-org/theme/dist/components/card.js",
    "./node_modules/@nextui-org/theme/dist/components/input.js",
    './node_modules/@nextui-org/theme/dist/components/modal.js',
    './node_modules/@nextui-org/theme/dist/components/accordion.js',
    './node_modules/@nextui-org/theme/dist/components/snippet.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
