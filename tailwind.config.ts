import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins-regular", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': '#2196f3',
        'primary-dark': '#2180f3',
        'primary-contrast': '#1F2024',
        'secondary': '#2F3033',
        'secondary-contrast': '#F5F6F7',
        'primary-text': '#1F2024',
        'secondary-text': '#989FAD',
        'border-gray': '#46494D', 
      },
    },
  },

  plugins: [],
};
export default config;
