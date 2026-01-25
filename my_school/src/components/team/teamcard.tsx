"use client";

import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";

export default function TeamMemberCard({ name, role, image }) {
  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden text-center hover:shadow-xl transition-shadow duration-300">
      {/* Optimized Image */}
      <div className="relative w-full h-72">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      {/* Member Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-900">{name}</h3>
        <p className="text-gray-500">{role}</p>
      </div>

      {/* Share Button */}
      <div className="absolute bottom-4 right-4 bg-pink-200 text-pink-700 p-2 rounded-full cursor-pointer hover:bg-pink-300 transition">
        <FaShareAlt />
      </div>
    </div>
  );
}
