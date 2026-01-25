"use client";

import Image from "next/image";
import { FaCalendarAlt, FaComments } from "react-icons/fa";

export default function BlogCard({ image, title, desc, date, comments }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Optimized Image */}
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-extrabold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{desc}</p>

        {/* Meta info */}
        <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-pink-600" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaComments className="text-pink-600" />
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
