/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // فایل اصلی HTML
    "./src/**/*.{js,ts,jsx,tsx}", // مسیر فایل‌های JSX/TSX
  ],
  theme: {

  },
  plugins: [require("daisyui")], // اضافه کردن DaisyUI
};
