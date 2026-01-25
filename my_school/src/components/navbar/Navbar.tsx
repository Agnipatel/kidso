"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/images/kidso-logo.png" // replace with your logo path
          alt="Kidso Logo"
          width={35}
          height={35}
        />
        <span className="text-2xl font-bold text-[#15214A]">Kidso.</span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex items-center space-x-10 text-[#15214A] font-semibold">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/classes">Classes</Link></li>
        <li><Link href="/teachers">Teachers</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>

      {/* Get Started Button */}
      <button className="px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-[#FF4B6E] to-[#FF6E92] shadow-lg hover:scale-105 transition-transform">
        GET STARTED
      </button>
    </nav>
  );
}
