/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-dm_sans)"],
      mont: ["var(--font-montserrat)"],
    },
    colors: {
      primary: "#219ebc",
      secondary: "#fb8500",
      "dark-light": "#023047",
      "primary-light": "#FF7377",
      dark: "#212129", 
      "orange-light":"#ff6e42",
      "light-gray":"#e7e7e7",
      black: "#212129",
      gray: "#747474",
      "bg-gray": "#F3F4F6",
      "border-color": "#D3D3D3",
      white: "#ffffff",
      green: "#07bc0c",
      red: "#ff0000",
      transparent: "transparent",
      bc: "#CCCCCC",
    }, 
    extend: {
      fontSize: {
        'xs': '12px'
      }
    },
  },
  plugins: [],
};
