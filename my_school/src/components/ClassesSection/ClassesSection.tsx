"use client";

import Image from "next/image";

export default function ClassesSection() {
  const classes = [
    {
      title: "Language Class",
      img: "/class/class-1.jpg",
      desc: "Curabitur dignissim leo sit amet facilisis. Etiam molestie volutpat turpis.",
      age: "5-10 Years",
      time: "8-10am",
     
    },
    {
      title: "Drawing Class",
      img: "/class/class-2.jpg",
      desc: "Curabitur dignissim leo sit amet facilisis. Etiam molestie volutpat turpis.",
      age: "5-10 Years",
      time: "8-10am",
  
    },
    {
      title: "Mathematics Class",
      img: "/class/class-3.jpg",
      desc: "Curabitur dignissim leo sit amet facilisis. Etiam molestie volutpat turpis.",
      age: "8-10 Years",
      time: "8-10am",
     
    },
    {
      title: "Sports Class",
      img: "/class/class-4.jpg",
      desc: "Curabitur dignissim leo sit amet facilisis. Etiam molestie volutpat turpis.",
      age: "7-10 Years",
      time: "8-10am",
     
    },
    {
      title: "Knowledge Class",
      img: "/class/class-5.jpg",
      desc: "Curabitur dignissim leo sit amet facilisis. Etiam molestie volutpat turpis.",
      age: "7-15 Years",
      time: "8-10am",
  
    },
    {
      title: "Science Class",
      img: "/class/class-6.jpg",
      desc: "Curabitur dignissim leo sit amet facilisis. Etiam molestie volutpat turpis.",
      age: "7-15 Years",
      time: "8-10am",
    
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-pink-500 font-semibold uppercase tracking-wide">
          On Going Classes
        </p>
        <h2 className="text-4xl font-extrabold text-[#0d1b4c] mt-2">
          Get The Best Classes With Us
        </h2>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-6">
        {classes.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index < 3} // preload top 3 images
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#0d1b4c] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{item.desc}</p>

              <div className="flex justify-between text-sm text-gray-600">
                <p>
                  <span className="text-[#e91e63] font-semibold">Age:</span>{" "}
                  {item.age}
                </p>
                <p>
                  <span className="text-[#e91e63] font-semibold">Time:</span>{" "}
                  {item.time}
                </p>
              </div>
            </div>

           
          </div>
        ))}
      </div>
    </section>
  );
}
