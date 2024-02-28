/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#182729",
        secondary: "#45EA68",

        success: "#34A853",

        background: "#F6F7FC",

        disabled: "#E1E1E1",

        input: "#313133",
        placeholder: "#A5A8B1",
        label: "#A5A8B1",
        textWhite: "#FFFFFF",
        textDark: "#8C8B93",
        textBlack: "#000",

        line: "#6B6C71",

        footer: "#3D3D3F",
      },
      fontSize: {},
      borderRadius: {
        md: "10px",
      },
      fontFamily: {
        title: ["Poppins_700Bold"],
        subtitle1: ["Poppins_500Medium"],
        subtitle2: ["Poppins_600SemiBold"],
        description: ["Poppins_400Regular"],
      },
    },
  },
  plugins: [],
};
