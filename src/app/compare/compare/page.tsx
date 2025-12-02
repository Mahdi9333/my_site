"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";

export default function ComparePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-between bg-[#0F172A] text-[#F8FAFC]">

            {/* عنوان صفحه */}
            <section className="mt-12 text-center px-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
                    مقایسه تخصصی لپ تاپ‌ها
                    <span className="block text-[#38BDF8] mt-2">بررسی و مقایسه دقیق مدل‌ها</span>
                </h1>
                <p className="text-sm md:text-base text-[#94A3B8] max-w-2xl mx-auto mt-4">
                    هر کارت شامل دو لپ‌تاپ است که به صورت تخصصی با هم مقایسه شده‌اند.
                </p>
            </section>

            {/* کارت‌ها */}
            <section className="w-full flex-1 flex items-center justify-center px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">

                    {/* کارت 1 */}
                    <Link href="/compare/compare/card1" className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02]">
                        <div className="flex w-full h-56 relative">
                            <div className="relative w-1/2"><Image src="/images/laptop1.jpg" alt="لپ‌تاپ A" fill style={{ objectFit: "cover" }} /></div>
                            <div className="relative w-1/2"><Image src="/images/laptop2.jpg" alt="لپ‌تاپ B" fill style={{ objectFit: "cover" }} /></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-xl md:text-2xl font-bold">کارت اول</h2>
                            <p className="text-sm text-[#D1D5DB] mt-1"></p>
                        </div>
                    </Link>

                    {/* کارت 2 */}
                    <Link href="/compare/compare/card2" className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02]">
                        <div className="flex w-full h-56 relative">
                            <div className="relative w-1/2"><Image src="/images/laptop3.jpg" alt="لپ‌تاپ C" fill style={{ objectFit: "cover" }} /></div>
                            <div className="relative w-1/2"><Image src="/images/laptop4.jpg" alt="لپ‌تاپ D" fill style={{ objectFit: "cover" }} /></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-xl md:text-2xl font-bold">مقایسه لپ‌تاپ C و D</h2>
                            <p className="text-sm text-[#D1D5DB] mt-1">بررسی مشخصات و عملکرد</p>
                        </div>
                    </Link>

                    {/* کارت 3 */}
                    <Link href="/compare/compare/card3" className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02]">
                        <div className="flex w-full h-56 relative">
                            <div className="relative w-1/2"><Image src="/images/laptop5.jpg" alt="لپ‌تاپ E" fill style={{ objectFit: "cover" }} /></div>
                            <div className="relative w-1/2"><Image src="/images/laptop6.jpg" alt="لپ‌تاپ F" fill style={{ objectFit: "cover" }} /></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-xl md:text-2xl font-bold">مقایسه لپ‌تاپ E و F</h2>
                            <p className="text-sm text-[#D1D5DB] mt-1">بررسی مشخصات و عملکرد</p>
                        </div>
                    </Link>
                    {/* کارت 4 */}
                    <Link href="/compare/compare/card4" className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02]">
                        <div className="flex w-full h-56 relative">
                            <div className="relative w-1/2"><Image src="/images/laptop7.jpg" alt="لپ‌تاپ G" fill style={{ objectFit: "cover" }} /></div>
                            <div className="relative w-1/2"><Image src="/images/laptop8.jpg" alt="لپ‌تاپ H" fill style={{ objectFit: "cover" }} /></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-xl md:text-2xl font-bold">مقایسه لپ‌تاپ G و H</h2>
                            <p className="text-sm text-[#D1D5DB] mt-1">بررسی مشخصات و عملکرد</p>
                        </div>
                    </Link>

                    {/* کارت 5 */}
                    <Link href="/compare/compare/card5" className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02]">
                        <div className="flex w-full h-56 relative">
                            <div className="relative w-1/2"><Image src="/images/laptop9.jpg" alt="لپ‌تاپ I" fill style={{ objectFit: "cover" }} /></div>
                            <div className="relative w-1/2"><Image src="/images/laptop10.jpg" alt="لپ‌تاپ J" fill style={{ objectFit: "cover" }} /></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-xl md:text-2xl font-bold">مقایسه لپ‌تاپ I و J</h2>
                            <p className="text-sm text-[#D1D5DB] mt-1">بررسی مشخصات و عملکرد</p>
                        </div>
                    </Link>

                    {/* کارت 6 */}
                    <Link href="/compare/compare/card6" className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02]">
                        <div className="flex w-full h-56 relative">
                            <div className="relative w-1/2"><Image src="/images/laptop11.jpg" alt="لپ‌تاپ K" fill style={{ objectFit: "cover" }} /></div>
                            <div className="relative w-1/2"><Image src="/images/laptop12.jpg" alt="لپ‌تاپ L" fill style={{ objectFit: "cover" }} /></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-xl md:text-2xl font-bold">مقایسه لپ‌تاپ K و L</h2>
                            <p className="text-sm text-[#D1D5DB] mt-1">بررسی مشخصات و عملکرد</p>
                        </div>
                    </Link>

                </div>
            </section>

            {/* فوتر شبکه اجتماعی */}
            <footer className="w-full border-t border-zinc-800/50 bg-[#071025] py-8 mt-12">
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-[#94A3B8]">ما را دنبال کنید</p>
                        <p className="text-xs text-[#6B7280] mt-1">آموزش‌ها، مقایسه‌ها و آپدیت‌ها را در شبکه‌ها ببینید.</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="https://youtube.com/@mahdijahanshahpoor?si=1UmKsZFFhLveiC1J" target="_blank" className="group flex flex-col items-center">
                            <FaYoutube className="text-2xl md:text-3xl transition-colors group-hover:text-red-500" />
                            <span className="text-xs text-[#94A3B8] mt-2">آموزش ویدیویی</span>
                        </Link>
                        <Link href="https://t.me/mahdijahanshahpor" target="_blank" className="group flex flex-col items-center">
                            <FaTelegramPlane className="text-2xl md:text-3xl transition-colors group-hover:text-blue-400" />
                            <span className="text-xs text-[#94A3B8] mt-2">تمرین‌ها و فایل‌ها</span>
                        </Link>

                        <Link href="https://www.instagram.com/mahdijahanshahpoor?igsh=MW42ZDB6NHV1OG1rNA==" target="_blank" className="group flex flex-col items-center">
                            <FaInstagram className="text-2xl md:text-3xl transition-colors group-hover:text-pink-400" />
                            <span className="text-xs text-[#94A3B8] mt-2">نکات سریع</span>
                        </Link>
                    </div>
                </div>
            </footer>

        </main>
    );
}