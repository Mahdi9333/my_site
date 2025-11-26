/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // ← فعال کردن دارک مود با کلاس
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",   // همه فایل‌های داخل app
        "./pages/**/*.{js,ts,jsx,tsx}", // همه فایل‌های داخل pages
        "./components/**/*.{js,ts,jsx,tsx}" // همه فایل‌های کامپوننت‌ها
    ],
    theme: {
        extend: {
            colors: {
                // رنگ‌های اختصاصی خودت
                primary: "#6366F1",
                secondary: "#94A3B8",
                darkBg: "#1E293B",
                lightBg: "#F8FAFC",
            },
        },
    },
    plugins: [],
};