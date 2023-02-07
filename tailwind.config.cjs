/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      // sm: "480px",
      sm: "560px",
      md: "768px",
      lg: "976px",
      // xl: "1440px",
      xl: "1200px",
    },
    extend: {
      colors: {
        // creates bg-brightRed and more
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 75%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
