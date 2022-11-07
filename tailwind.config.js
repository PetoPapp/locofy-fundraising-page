/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { "dm-sans": "'DM Sans'" } },
    colors: {
      white: "#fff",
      gray: {
        "100": "#f7f9fa",
        "200": "#fbf1e9",
        "300": "#edf7ef",
        "400": "#f6ede6",
        "500": "#b5b5b5",
        "600": "#878d99",
        "700": "#563e4e",
      },
      black: "#000",
      green: { "100": "#40bc5d", "200": "#4dac63" },
      orange: "#d6761e",
    },
    fontSize: { xs: "12px", sm: "13px", base: "14px", lg: "16px", xl: "33px" },
    screens: {
      lg: { max: "1200px" },
      md: { max: "768px" },
      Macbook: { raw: "screen and (max-width: 1400px)" },
    },
  },
  corePlugins: { preflight: false },
};
