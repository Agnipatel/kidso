"use client";

import Image from "next/image";

export default function StepsSection() {
  const steps = [
    {
      number: "1",
      title: "Expert Instructor",
      desc: "Nam et ante vehicula, blandit nunc at, mattis lacus. Donec non rutrum justo. Morbi egestas aliquam sem et consequat.",
    },
    {
      number: "2",
      title: "Know Everything",
      desc: "Nam et ante vehicula, blandit nunc at, mattis lacus. Donec non rutrum justo. Morbi egestas aliquam sem et consequat.",
    },
    {
      number: "3",
      title: "Well Child",
      desc: "Nam et ante vehicula, blandit nunc at, mattis lacus. Donec non rutrum justo. Morbi egestas aliquam sem et consequat.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row bg-white py-16">
      {/* --- Left Section --- */}
      <div className="bg-[#0d1b4c] text-white md:w-1/2 w-full flex flex-col justify-center px-8 md:px-16 py-10">
        <p className="text-pink-500 font-semibold uppercase tracking-wide mb-3">
          How It Work
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-snug">
          See Our Steps To <br /> Success
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-5">
              <div className="bg-pink-500 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full text-lg">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Right Section (Image) --- */}
      <div className="relative md:w-1/2 w-full h-[350px] md:h-auto">
        <Image
          src="/steps-img.png"
          alt="Steps to Success"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  );
}
