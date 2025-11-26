import Link from "next/link";

export default function ContentCard({ item }: any) {
    return (
        <Link
            href={item.link}
            className="block border p-4 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
        >
            {/* تصویر placeholder */}
            <div className="bg-gray-200 h-40 mb-3 rounded-md flex items-center justify-center text-gray-500">
                تصویر
            </div>
            <h2 className="text-xl font-bold mb-1">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
        </Link>
    );
}