"use client";

import Image from "next/image";
import Slider from "@/components/slider/Slider";
import Service from "@/components/service/Service";
import About from "@/components/about/About";
import Happy from "@/components/happy/Happy";
import ClassesSection from "@/components/ClassesSection/ClassesSection";
import StepsSection from "./StepsSection/StepsSection";
import Ourteam from "@/components/team/Ourteam";
import TestimonialsPage from "./Testimonial/testimonials";
import BlogPage from "./blog/Blog";
import ContactPage from "@/components/contact/Contact"

export default function Home() {
  return (
    <>
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-[#fdfbff] overflow-hidden">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 z-10">
        <p className="text-[#FF4B6E] font-semibold tracking-wide uppercase">
          Welcome to Childcare Service
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-[#15214A] leading-tight">
          Get Lifecare <br /> For Your Kids
        </h1>

        <p className="text-gray-500 text-lg max-w-md">
          Quisque eget tortor posuere, aliquet arcu ut, molestie nunc. Integer malesuada laoreet erat, ut hendrerit magna finibus ut.
        </p>

        <button className="mt-4 px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-[#FF4B6E] to-[#FF6E92] shadow-lg hover:scale-105 transition-transform border-2 border-[#ff86a1]">
          EXPLORE MORE
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 relative mt-10 md:mt-0">
        {/* Decorative pink curve */}
        <div className="absolute -left-16 top-0 h-full w-[120px] bg-[#FF4B6E] rounded-full transform -skew-x-6 opacity-90 hidden md:block"></div>

        {/* Kids image */}
        <Image
          src="/main.png" // Replace with your image path
          alt="Kids Playing"
          width={600}
          height={400}
          className="rounded-lg relative z-10"
        />
      </div>

      {/* Optional Sun Icon */}
      <div className="absolute top-10 left-10 text-yellow-400 text-3xl">
        ☀️
      </div>
    </section>
   <Slider/>
   <Service/>
   <About />
   <Happy/>
   <ClassesSection/>
   <StepsSection/>
   <Ourteam/>
   <TestimonialsPage/>
   <BlogPage/>
   <ContactPage/>
    </>
  );
}
