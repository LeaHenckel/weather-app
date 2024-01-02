/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        linearBlack: "bg-gradient-to-r from-[#2E335A] to-[#1C1B33]",
        linearBlue: "bg-gradient-to-r from-[#5936B4] to-[#362A84]",
        linearBlueAndPink: "bg-gradient-to-r from-[#3658B1] to-[#C159EC]",
        linearLightBlueandDarkBlue:
          "bg-gradient-to-t from-[#AEC9FF] to-[#083072]",
        linearPurple: "bg-gradient-to-t from-[#F7CBFD] to-[#7758D1]",
        linearWhiteAndPurple: "",
      },
      colors: {
        lightPrimary: "#000000",
        lightSecondary: "#86878c",
        lightTertiary: "#bdbfc4",
        lightQuaternary: "#d3d5da",

        darkPrimary: "#ffffff",
        darkSecondary: "#a19eb7",
        darkTertiary: "#686489",
        darkQuaternary: "#524d77",

        solidBlue: "#48319d",
        solidDarkBlue: "#1f1d47",
        solidHotPink: "#c427fb",
        SolidSoftPink: "#e0d9ff",
      },
    },
  },
  plugins: [],
};
