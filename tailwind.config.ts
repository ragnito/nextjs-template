import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        // Generate with https://nextui-themegen.netlify.app/
        "light": {
          extend: "light",
          colors: {
            primary: {
              50: "#dfdfdf",
              100: "#b3b3b3",
              200: "#868686",
              300: "#595959",
              400: "#2d2d2d",
              500: "#000000",
              600: "#000000",
              700: "#000000",
              800: "#000000",
              900: "#000000",
              foreground: "#ffffff",
              DEFAULT: "#000000"
            }
          }
        },
        "dark": {
          extend: "dark",
          colors: {
            primary: {
              50: "#535353",
              100: "#8c8c8c",
              200: "#c6c6c6",
              300: "#ffffff",
              400: "#ffffff",
              500: "#ffffff",
              600: "#ffffff",
              700: "#ffffff",
              foreground: "#0a0a0a",
              DEFAULT: "#ffffff"
            }
          }
        }
      }
    })
  ],
} satisfies Config;
