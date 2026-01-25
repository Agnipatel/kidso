"use client";

import { useState } from "react";
import TestimonialCard from "@/components/Testimonial/TestimonialCard";

const testimonials = [
  {
    name: "Walkar James",
    role: "Kid Parent",
    image: "/testmonail-img.png",
    quote:
      "Quisque eget tortor posuere, aliquet arcu ut, molestie nunc. Integer malesuada, erat ut hendrerit magna finibus ut.",
  },
  {
    name: "Julia Roberts",
    role: "Happy Customer",
    image: "/clients/client2.jpg",
    quote:
      "Duis vitae enim bibendum, gravida sapien vitae, egestas velit. Sed euismod tristique orci.",
  },
  {
    name: "Robert King",
    role: "Teacher & Parent",
    image: "/clients/client3.jpg",
    quote:
      "Phasellus placerat, metus fermentum tincidunt condimentum, felis dolor dapibus metus.",
  },
];

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-pink-500 text-sm font-bold uppercase mb-2">
          Testimonials
        </h2>
        <h1 className="text-4xl font-extrabold text-blue-900">
          What Our Clients Say
        </h1>
      </div>

      <div className="flex justify-center">
        <TestimonialCard
          testimonial={testimonials[currentIndex]}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  );
}
