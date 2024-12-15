/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html", // فایل اصلی HTML
    "./src/**/*.{js,ts,jsx,tsx}", // مسیر فایل‌های JSX/TSX
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["IS", "sans-serif"], // تعریف فونت سفارشی
      },
    },
  },
  plugins: [require("daisyui")], // اضافه کردن DaisyUI
};
