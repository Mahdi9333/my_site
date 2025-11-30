"use client";

import Link from "next/link";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";

export default function NextJsPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-between bg-[#0F172A] text-[#F8FAFC]">

            {/* عنوان صفحه */}
            <section className="mt-12 text-center px-6">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
                    آموزش Next.js
                </h1>
                <p className="text-sm md:text-base text-[#94A3B8] max-w-2xl mx-auto mt-4">
                    مسیر یادگیری کامل Next.js از مفاهیم پایه تا ساخت پروژه‌های واقعی.
                </p>
            </section>

            {/* کارت‌های درس */}
            <section className="w-full flex-1 flex flex-col items-center px-6 py-12 gap-6">

                {/* درس اول */}
                <Link
                    href="/learn/nextjs/lesson1"
                    className="w-full max-w-3xl h-32 rounded-2xl bg-[#14203B]/60 border border-[#1e293b] shadow-2xl backdrop-blur-md px-6 flex flex-col justify-center transition transform hover:scale-[1.015]"
                >
                    <h2 className="text-xl font-bold">درس اول — آشنایی با Next.js</h2>
                    <p className="text-sm text-[#CBD5E1] mt-2">نصب، ساختار پوشه‌ها، درک کلی فریمورک</p>
                </Link>

                {/* درس دوم */}
                <Link
                    href="/learn/nextjs/lesson2"
                    className="w-full max-w-3xl h-32 rounded-2xl bg-[#14203B]/60 border border-[#1e293b] shadow-2xl backdrop-blur-md px-6 flex flex-col justify-center transition transform hover:scale-[1.015]"
                >
                    <h2 className="text-xl font-bold">درس دوم — روتینگ و صفحات</h2>
                    <p className="text-sm text-[#CBD5E1] mt-2">ایجاد صفحات، پارامترها، مسیرهای داینامیک</p>
                </Link>

                {/* درس سوم */}
                <Link
                    href="/learn/nextjs/lesson3"
                    className="w-full max-w-3xl h-32 rounded-2xl bg-[#14203B]/60 border border-[#1e293b] shadow-2xl backdrop-blur-md px-6 flex flex-col justify-center transition transform hover:scale-[1.015]"
                >
                    <h2 className="text-xl font-bold">درس سوم — استایل‌دهی و کامپوننت‌ها</h2>
                    <p className="text-sm text-[#CBD5E1] mt-2">استفاده از Tailwind، ساخت UI تمیز و استاندارد</p>
                </Link>

            </section>

            {/* فوتر: شبکه‌های اجتماعی پایین‌ترین نقطه */}
            <footer className="w-full border-t border-zinc-800/50 bg-[#071025] py-8 mt-12">
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-[#94A3B8]">ما را دنبال کنید</p>
                        <p className="text-xs text-[#6B7280] mt-1">آموزش‌ها، مقایسه‌ها و آپدیت‌ها را در شبکه‌ها ببینید.</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="https://youtube.com/@mahdijahan987?si=UPqwPhmqlWTq7Jam" target="_blank" className="group flex flex-col items-center">
                            <FaYoutube className="text-2xl md:text-3xl transition-colors group-hover:text-red-500" />
                            <span className="text-xs text-[#94A3B8] mt-2">آموزش ویدیویی</span>
                        </Link>
                        <Link href="https://t.me/mahdijahanshahpor" target="_blank" className="group flex flex-col items-center">
                            <FaTelegramPlane className="text-2xl md:text-3xl transition-colors group-hover:text-blue-400" />
                            <span className="text-xs text-[#94A3B8] mt-2">تمرین‌ها و فایل‌ها</span>
                        </Link>

                        <Link href="https://www.instagram.com/mahdijahan987?igsh=MW42ZDB6NHV1OG1rNA==" target="_blank" className="group flex flex-col items-center">
                            <FaInstagram className="text-2xl md:text-3xl transition-colors group-hover:text-pink-400" />
                            <span className="text-xs text-[#94A3B8] mt-2">نکات سریع</span>
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}