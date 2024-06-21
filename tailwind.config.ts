import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: "#57BD34",
      blue: '#3D4680',
      white: '#f7f7f7',
      lightgreen: 'rgba(	87, 189, 52, 0.8)',
      lightblue: 'rgba(61, 70, 128, 0.8)'
    }
  },
  plugins: [require('daisyui'),],
};
export default config;
