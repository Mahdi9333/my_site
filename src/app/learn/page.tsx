"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";

export default function LearnPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-between bg-[#0F172A] text-[#F8FAFC]">

            {/* عنوان صفحه */}
            <section className="mt-12 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-extrabold">آموزش برنامه‌نویسی</h1>
            </section>

            {/* کارت‌ها */}
            <section className="w-full flex-1 flex items-center justify-center px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">

                    {/* کارت JavaScript */}
                    <Link
                        href="/learn/javascript"
                        className="relative rounded-2xl overflow-hidden shadow-2xl transition transform hover:scale-[1.03]"
                    >
                        <div className="w-full h-80 relative">
                            <Image src="/images/js.jpg" alt="JavaScript" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-2xl font-bold">JavaScript</h2>
                            <p className="text-sm text-gray-300 mt-1">
                                یادگیری مفاهیم پایه و پیشرفته جاوااسکریپت
                            </p>
                        </div>
                    </Link>

                    {/* کارت Next.js */}
                    <Link
                        href="/learn/nextjs"
                        className="relative rounded-2xl overflow-hidden shadow-2xl transition transform hover:scale-[1.03]"
                    >
                        <div className="w-full h-80 relative">
                            <Image src="/images/next.jpg" alt="Next.js" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-2xl font-bold">Next.js</h2>
                            <p className="text-sm text-gray-300 mt-1">
                                پروژه‌محور و حرفه‌ای
                            </p>
                        </div>
                    </Link>

                </div>
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