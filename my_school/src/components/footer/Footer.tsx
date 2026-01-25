"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b4c] text-white py-12 relative">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* --- Left Section --- */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/logo.png"
              alt="Kidso Logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <h2 className="text-2xl font-bold">Kidso.</h2>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            In interdum, mauris in sollicitudin consectetur, elit odio tempus mauris,
            eget convallis metus arcu nec diam. Vestibulum sagittis at lectus et.
          </p>

          <div className="flex space-x-4 mt-6">
            <Link
              href="#"
              className="bg-[#36416f] p-3 rounded-full hover:bg-pink-500 transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="bg-[#36416f] p-3 rounded-full hover:bg-pink-500 transition"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="bg-[#36416f] p-3 rounded-full hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* --- Middle Left --- */}
        <div>
          <h3 className="text-xl font-bold mb-4">Other Links</h3>
          <ul className="space-y-3 text-gray-300">
            {["Home", "About Us", "Classes", "Teachers", "Blog", "Contact Us"].map(
              (item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-pink-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* --- Middle Right --- */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-4 text-gray-300 text-sm">
            <p className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-pink-500 mt-1" />
              <span>1247/Plot No. 39, 15th Phase, Colony, Hyderabad</span>
            </p>
            <p className="flex items-start space-x-3">
              <FaPhoneAlt className="text-pink-500 mt-1" />
              <span>
                1800-121-3637
                <br />
                +91-7052-101-786
              </span>
            </p>
            <p className="flex items-start space-x-3">
              <FaEnvelope className="text-pink-500 mt-1" />
              <span>
                info@example.com
                <br />
                help@example.com
              </span>
            </p>
          </div>
        </div>

        {/* --- Right Section --- */}
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe Now!</h3>
          <div className="flex bg-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Email Address..."
              className="flex-1 px-4 py-3 text-gray-700 outline-none"
            />
            <button className="bg-pink-500 px-4 flex items-center justify-center hover:bg-pink-600 transition">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-400 mt-12 border-t border-gray-700 pt-6">
        Copyright © {new Date().getFullYear()} Kidso. All rights reserved.
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-pink-500 p-4 rounded-full text-white shadow-lg hover:bg-pink-600 transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
