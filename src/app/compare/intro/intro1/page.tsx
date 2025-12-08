"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";

export default function Intro1Page() {
    return (
        <main className="min-h-screen bg-white text-black flex flex-col items-center justify-start px-6 py-12" >
            {/* عنوان و عکس اصلی */}
            <section className="w-full max-w-5xl mt-12 px-6 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                    MacBook Air M2 معرفی لپ تاب
                </h1>
                <div className="relative w-full h-64 md:h-80 lg:h-96 mx-auto rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src="/images/intro1.jpg"
                        alt="Laptop Image"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </section>

            {/* متن مقاله */}
            <section className="max-w-4xl mb-12 text-black space-y-6">
                <p>
                    <strong>معرفی کوتاه:</strong> MacBook Air M2 یکی از جدیدترین لپ‌تاپ‌های اپل است که با طراحی باریک، وزن سبک و عملکرد بسیار خوب، برای کاربران حرفه‌ای، دانشجویان و افراد خلاق ایده‌آل است. این لپ‌تاپ بدون فن کار می‌کند، بنابراین کاملاً بی‌صداست و عمر باتری طولانی تا 18 ساعت دارد.
                </p>

                <h2 className="text-xl font-bold text-[#38BDF8]">مشخصات فنی</h2>
                <table className="w-full text-left border border-gray-700">
                    <tbody>
                        <tr className="border-b border-gray-700">
                            <th className="p-2">پردازنده (CPU)</th>
                            <td className="p-2">Apple M2 با 8 هسته پردازشی و 10 هسته گرافیکی</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <th className="p-2">حافظه رم (RAM)</th>
                            <td className="p-2">8GB، 16GB یا 24GB LPDDR5</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <th className="p-2">حافظه داخلی (SSD)</th>
                            <td className="p-2">256GB، 512GB، 1TB یا 2TB</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <th className="p-2">صفحه نمایش</th>
                            <td className="p-2">13.6 اینچ Liquid Retina، رزولوشن 2560x1664، روشنایی 500 نیت، True Tone</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <th className="p-2">گرافیک</th>
                            <td className="p-2">Apple M2 GPU با 10 هسته</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <th className="p-2">وزن</th>
                            <td className="p-2">حدود 1.24 کیلوگرم</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <th className="p-2">سیستم عامل</th>
                            <td className="p-2">macOS Ventura</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <th className="p-2">باتری</th>
                            <td className="p-2">تا 18 ساعت پخش ویدیو</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <th className="p-2">پورت‌ها</th>
                            <td className="p-2">2x Thunderbolt / USB 4، جک هدفون</td>
                        </tr>
                        <tr>
                            <th className="p-2">ویژگی‌ها</th>
                            <td className="p-2">بدون فن، سبک و باریک، صدای بی‌صدا، شارژ سریع MagSafe</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-xl font-bold text-[#38BDF8] mt-6">مزایا</h2>
                <ul className="list-disc ml-6 space-y-1">
                    <li>طراحی بسیار باریک و وزن سبک، حمل آسان</li>
                    <li>عملکرد قدرتمند برای کارهای روزمره، برنامه‌نویسی و طراحی متوسط</li>
                    <li>نمایشگر با کیفیت بسیار بالا و True Tone</li>
                    <li>عمر باتری طولانی تا 18 ساعت</li>
                    <li>بدون فن و صدای کاملاً بی‌صدا</li>
                </ul>

                <h2 className="text-xl font-bold text-[#38BDF8] mt-6">معایب</h2>
                <ul className="list-disc ml-6 space-y-1">
                    <li>تعداد پورت‌ها محدود است</li>
                    <li>قیمت نسبتاً بالا</li>
                    <li>ارتقاء سخت‌افزاری محدود</li>
                </ul>

                <h2 className="text-xl font-bold text-[#38BDF8] mt-6">جمع‌بندی</h2>
                <p>
                    MacBook Air M2 برای کسانی که به دنبال لپ‌تاپ سبک، کم‌صدا و قدرتمند هستند، یک انتخاب عالی است. اگر نیاز به چندین پورت یا اجرای نرم‌افزارهای بسیار سنگین دارید، ممکن است گزینه‌های دیگر مناسب‌تر باشند. این لپ‌تاپ ترکیبی از زیبایی، عملکرد و دوام باتری را ارائه می‌دهد که آن را به یکی از پرفروش‌ترین مدل‌های اپل تبدیل کرده است.
                </p>
            </section>
            {/* بخش پیشنهادات */}
            <section className="w-full max-w-5xl mt-12 px-6">
                <h2 className="text-2xl font-bold mb-6">پیشنهادات</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* کارت ۱ */}
                    <Link
                        href="/learn/javascript"
                        className="relative rounded-2xl overflow-hidden shadow-lg transform transition hover:-translate-y-1 hover:scale-[1.02]"
                    >
                        <div className="w-full h-40 relative">
                            <Image src="/images/js.jpg" alt="پیشنهاد 1" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="p-4 bg-[#0F172A]">
                            <h3 className="font-bold text-lg">javascript</h3>
                            <p className="text-sm text-[#94A3B8] mt-1">آموزش قدم به قدم جاوا اسکریپت</p>
                        </div>
                    </Link>

                    {/* کارت ۲ */}
                    <Link
                        href="/learn/nextjs"
                        className="relative rounded-2xl overflow-hidden shadow-lg transform transition hover:-translate-y-1 hover:scale-[1.02]"
                    >
                        <div className="w-full h-40 relative">
                            <Image src="/images/next.jpg" alt="پیشنهاد 2" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="p-4 bg-[#0F172A]">
                            <h3 className="font-bold text-lg">nextjs</h3>
                            <p className="text-sm text-[#94A3B8] mt-1">آموزش قدم  به قدم  فریم وورک نکست</p>
                        </div>
                    </Link>

                </div>
            </section>

            {/* بخش مطالعه بیشتر */}
            <section className="w-full max-w-5xl mt-12 px-6">
                <h2 className="text-2xl font-bold mb-6">مطالعه‌ی بیشتر</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* کارت ۱ */}
                    <Link
                        href="/compare/intro/intro2"
                        className="relative rounded-2xl overflow-hidden shadow-lg transform transition hover:-translate-y-1 hover:scale-[1.02]"
                    >
                        <div className="w-full h-40 relative">
                            <Image src="/images/js.jpg" alt="مطالعه 1" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="p-4 bg-[#0F172A]">
                            <h3 className="font-bold text-lg">لپ تاب 2</h3>
                            <p className="text-sm text-[#94A3B8] mt-1">کوتاه درباره‌ی لپ تاب 2</p>
                        </div>
                    </Link>

                    {/* کارت ۲ */}
                    <Link
                        href="/compare//intro/intro3"
                        className="relative rounded-2xl overflow-hidden shadow-lg transform transition hover:-translate-y-1 hover:scale-[1.02]"
                    >
                        <div className="w-full h-40 relative">
                            <Image src="/images/js.jpg" alt="مطالعه 2" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="p-4 bg-[#0F172A]">
                            <h3 className="font-bold text-lg">لپ‌ تاب 3</h3>
                            <p className="text-sm text-[#94A3B8] mt-1">کوتاه درباره‌ی لپ تاب 3</p>
                        </div>
                    </Link>

                    {/* کارت ۳ */}
                    <Link
                        href="/compare//intro/intro4"
                        className="relative rounded-2xl overflow-hidden shadow-lg transform transition hover:-translate-y-1 hover:scale-[1.02]"
                    >
                        <div className="w-full h-40 relative">
                            <Image src="/images/js.jpg" alt="مطالعه 3" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="p-4 bg-[#0F172A]">
                            <h3 className="font-bold text-lg">لپ تاب 4</h3>
                            <p className="text-sm text-[#94A3B8] mt-1">کوتاه درباره‌ی لپ تاب 4</p>
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