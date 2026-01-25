"use client";

import Image from "next/image";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TestimonialCard({ testimonial, onPrev, onNext }) {
  return (
    <section className="relative bg-[#f7f9fc] py-16 px-4 md:px-12">
      {/* Floating circle avatars */}
      {["/testmonail-img.png"].map(
        (src, idx) => {
          const positions = [
            "top-10 left-10",
            "top-10 right-10",
            "bottom-10 left-10",
            "bottom-10 right-10",
          ];
          return (
            <div
              key={idx}
              className={`absolute ${positions[idx]} w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md hidden md:block`}
            >
              <Image
                src={src}
                alt={`client-${idx + 1}`}
                fill
                className="object-cover"
                sizes="3.5rem"
                priority={idx < 2} // preload top 2 images
              />
            </div>
          );
        }
      )}

      {/* Main content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Client Image */}
        <div className="relative mx-auto w-72 h-72">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="rounded-full object-cover border-8 border-white shadow-xl"
            sizes="18rem"
            priority
          />
          <div className="absolute top-2 right-2 bg-pink-500 text-white p-3 rounded-full shadow-md">
            <FaQuoteRight size={20} />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            “{testimonial.quote}”
          </p>
          <h4 className="text-xl font-bold text-blue-900">{testimonial.name}</h4>
          <p className="text-pink-600 font-medium">{testimonial.role}</p>

          {/* Navigation Arrows */}
          <div className="flex justify-center md:justify-start mt-6 space-x-4">
            <button
              onClick={onPrev}
              className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={onNext}
              className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
