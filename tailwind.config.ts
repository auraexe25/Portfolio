import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "var(--font-body)", 
        heading: "var(--font-heading)", 
      },
    },
  },
  plugins: [],
};

export default config;
