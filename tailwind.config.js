/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#var(--color-primary)",
        secondary: "#525256",
        defaultBlack: "#191919",
        gray: {
          "01": "#666666",
          "02": "#878787",
          "03": "#9F9F9F",
          "05": "#E8E8E8",
          "06": "#F3F3F3",
        },
        // Pindahkan special ke dalam colors agar bisa digunakan
        special: {
          bg: "rgba(210, 210, 210, 0.25)",
          bg2: "rgba(255, 255, 255, 0.7)",
          bg3: "rgba(255, 255, 255, 0.08)",
          mainBg: "#F4F5F7",
          green: "#E73D1C",
          red: "#4DAF6E",
        },
      },
      fontFamily: {
        body: ["Inter"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
