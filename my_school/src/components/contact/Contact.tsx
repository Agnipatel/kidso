"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted!");
  };

  return (
    <section className="flex flex-col md:flex-row items-center bg-[#f8f9fc] py-16 px-6 md:px-16 gap-10">
      {/* Left: Image */}
      <div className="relative w-full md:w-1/2 h-80 md:h-[400px]">
        <Image
          src="/contact-img.png"
          alt="Kid with megaphone"
          fill
          className="object-contain"
        />
      </div>

      {/* Right: Form */}
      <div className="w-full md:w-1/2">
        <h4 className="text-pink-500 font-bold uppercase mb-2">CONTACT US</h4>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Join Our Best Fun <br /> Classes
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-32 resize-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
