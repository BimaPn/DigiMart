import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D0D0D',
        semiDark: '#595959',
        netral: '#A6A6A6',
        semiLight: '#BFBFBF',
        light: '#F2F2F2'
      }
    },
    screens: {
      ssm: '352px',
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1444px',
      xxl: '1700px'
    } 
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#0D0D0D",
            },
            focus: "#0D0D0D",
          },
        },
      },
    }),
  ],
};
export default config;
