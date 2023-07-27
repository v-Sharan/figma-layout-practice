/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./ui/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        white: "#fff",
        "blue-600": "#2563eb",
        "neutral-300": "#d4d4d4",
        "neutral-800": "#262626",
        "amber-200": "#fde68a",
        "amber-600": "#d97706",
        "neutral-400": "#a3a3a3",
        "neutral-200": "#e5e5e5",
        "blue-700": "#1d4ed8",
        "neutral-100": "#f5f5f5",
        "red-50": "#fef2f2",
        "red-400": "#f87171",
        "red-900": "#7f1d1d",
        black: "#000",
        "neutral-900": "#171717",
        "gray-900": "#111827",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "10xs": "3px",
        "12xs": "1px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "3xl": "22px",
      xs: "12px",
      lg: "18px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
