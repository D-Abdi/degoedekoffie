/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d1a160",
          secondary: "#58C7F3",
          accent: "#F3CC30",
          neutral: "#2c2d33",
          info: "#53C0F3",
          success: "#71EAD2",
          warning: "#F3CC30",
          error: "#E24056",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
