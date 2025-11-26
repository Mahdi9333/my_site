"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";

export default function IntroPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-between bg-[#0F172A] text-[#F8FAFC]">

            {/* عنوان صفحه */}
            <section className="mt-12 text-center px-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
                    آشنایی با لپ‌تاپ‌ها
                    <span className="block text-[#38BDF8] mt-2">راهنمای کامل و بررسی مدل‌ها</span>
                </h1>
                <p className="text-sm md:text-base text-[#94A3B8] max-w-2xl mx-auto mt-4">
                    در این بخش با مشخصات و ویژگی‌های لپ‌تاپ‌های مختلف آشنا شوید و انتخاب درست داشته باشید.
                </p>
            </section>

            {/* کارت‌ها */}
            <section className="w-full flex-1 flex items-center justify-center px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">

                    {/* کارت 1 */}
                    <Link
                        href="/compare/intro/intro1"
                        className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02]"
                    >
                        <div className="w-full h-56 relative">
                            <Image src="/images/laptop1.jpg" alt="لپ‌تاپ ۱" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-xl md:text-2xl font-bold">لپ‌تاپ ۱</h2>
                            <p className="text-sm text-[#D1D5DB] mt-1">معرفی لپ‌تاپ اول با مشخصات پایه و ویژگی‌ها.</p>
                        </div>
                    </Link>

                    {/* کارت 2 */}
                    <Link
                        href="/compare/intro/intro2"
                        className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02]"
                    >
                        <div className="w-full h-56 relative">
                            <Image src="/images/laptop2.jpg" alt="لپ‌تاپ ۲" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-xl md:text-2xl font-bold">لپ‌تاپ ۲</h2>
                            <p className="text-sm text-[#D1D5DB] mt-1">معرفی لپ‌تاپ دوم با مشخصات پایه و ویژگی‌ها.</p>
                        </div>
                    </Link>

                    {/* کارت 3 */}
                    <Link
                        href="/compare/intro/intro3"
                        className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02]"
                    >
                        <div className="w-full h-56 relative">
                            <Image src="/images/laptop3.jpg" alt="لپ‌تاپ ۳" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-xl md:text-2xl font-bold">لپ‌تاپ ۳</h2>
                            <p className="text-sm text-[#D1D5DB] mt-1">معرفی لپ‌تاپ سوم با مشخصات پایه و ویژگی‌ها.</p>
                        </div>
                    </Link>

                    {/* کارت 4 */}
                    <Link
                        href="/compare/intro/intro4"
                        className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02]">
                        <div className="w-full h-56 relative">
                            <Image src="/images/laptop4.jpg" alt="لپ‌تاپ ۴" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-xl md:text-2xl font-bold">لپ‌تاپ ۴</h2>
                            <p className="text-sm text-[#D1D5DB] mt-1">معرفی لپ‌تاپ چهارم با مشخصات پایه و ویژگی‌ها.</p>
                        </div>
                    </Link>

                    {/* کارت 5 */}
                    <Link
                        href="/compare/intro/intro5"
                        className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02]"
                    >
                        <div className="w-full h-56 relative">
                            <Image src="/images/laptop5.jpg" alt="لپ‌تاپ ۵" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-xl md:text-2xl font-bold">لپ‌تاپ ۵</h2>
                            <p className="text-sm text-[#D1D5DB] mt-1">معرفی لپ‌تاپ پنجم با مشخصات پایه و ویژگی‌ها.</p>
                        </div>
                    </Link>

                    {/* کارت 6 */}
                    <Link
                        href="/compare/intro/intro6"
                        className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02]"
                    >
                        <div className="w-full h-56 relative">
                            <Image src="/images/laptop6.jpg" alt="لپ‌تاپ ۶" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                            <h2 className="text-xl md:text-2xl font-bold">لپ‌تاپ ۶</h2>
                            <p className="text-sm text-[#D1D5DB] mt-1">معرفی لپ‌تاپ ششم با مشخصات پایه و ویژگی‌ها.</p>
                        </div>
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