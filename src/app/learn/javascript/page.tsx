"use client";

import Link from "next/link";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";

export default function JavaScriptPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-between bg-[#0F172A] text-[#F8FAFC]">

            {/* عنوان صفحه */}
            <section className="mt-12 text-center px-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
                    آموزش JavaScript
                    <span className="block text-[#38BDF8] mt-2">مسیر یادگیری از صفر تا پروژه‌های حرفه‌ای</span>
                </h1>
                <p className="text-sm md:text-base text-[#94A3B8] max-w-2xl mx-auto mt-4">
                    یادگیری مفاهیم پایه و پیشرفته جاوااسکریپت با تمرین‌های عملی و پروژه‌محور.
                </p>
            </section>

            {/* کارت‌ها */}
            <section className="w-full flex-1 flex items-center justify-center px-6 py-12">
                <div className="flex flex-col gap-6 max-w-3xl w-full">

                    {/* درس اول */}
                    <Link
                        href="/learn/javascript/lesson1"
                        className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02] bg-[#1E293B] p-6"
                    >
                        <h2 className="text-xl md:text-2xl font-bold">درس اول</h2>
                        <p className="text-sm text-[#D1D5DB] mt-2">مبانی اولیه JavaScript و نحوه استفاده از متغیرها و توابع.</p>
                    </Link>

                    {/* درس دوم */}
                    <Link
                        href="/learn/javascript/lesson2"
                        className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02] bg-[#1E293B] p-6"
                    >
                        <h2 className="text-xl md:text-2xl font-bold">درس دوم</h2>
                        <p className="text-sm text-[#D1D5DB] mt-2">آرایه‌ها، حلقه‌ها و دستورات شرطی در JavaScript.</p>
                    </Link>

                    {/* درس سوم */}
                    <Link
                        href="/learn/javascript/lesson3"
                        className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02] bg-[#1E293B] p-6"
                    >
                        <h2 className="text-xl md:text-2xl font-bold">درس سوم</h2>
                        <p className="text-sm text-[#D1D5DB] mt-2">توابع پیشرفته، ES6 و مدیریت رویدادها.</p>
                    </Link>

                </div>
            </section>

            {/* فوتر: شبکه‌های اجتماعی */}
            <footer className="w-full border-t border-zinc-800/50 bg-[#071025] py-8 mt-12">
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-[#94A3B8]">ما را دنبال کنید</p>
                        <p className="text-xs text-[#6B7280] mt-1">آموزش‌ها، مقایسه‌ها و آپدیت‌ها را در شبکه‌ها ببینید.</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="https://youtube.com" target="_blank" className="group flex flex-col items-center">
                            <FaYoutube className="text-2xl md:text-3xl transition-colors group-hover:text-red-500" />
                            <span className="text-xs text-[#94A3B8] mt-2">آموزش ویدیویی</span>
                        </Link>

                        <Link href="https://t.me" target="_blank" className="group flex flex-col items-center">
                            <FaTelegramPlane className="text-2xl md:text-3xl transition-colors group-hover:text-blue-400" />
                            <span className="text-xs text-[#94A3B8] mt-2">تمرین‌ها و فایل‌ها</span>
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="group flex flex-col items-center">
                            <FaInstagram className="text-2xl md:text-3xl transition-colors group-hover:text-pink-400" />
                            <span className="text-xs text-[#94A3B8] mt-2">نکات سریع</span>
                        </Link>
                    </div>
                </div>
            </footer>

        </main>
    );
}