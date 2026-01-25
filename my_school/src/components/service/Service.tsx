"use client";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Daycare Service",
      subtitle: "Get Your Best Care",
      img: "/images/daycare.jpg",
      icon: "❤",
    },
    {
      title: "Summer Camp",
      subtitle: "Get Your Best Care",
      img: "/images/summercamp.jpg",
      dark: true,
      icon: "🏕️",
    },
    {
      title: "Online Classes",
      subtitle: "Get Your Best Care",
      img: "/images/onlineclass.jpg",
      icon: "👨‍🏫",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-pink-500 font-semibold uppercase tracking-wide">
        Our Services
      </h3>
      <h2 className="text-4xl font-bold mb-10 text-gray-800">
        What We Provide
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden shadow-lg group ${
              service.dark ? "bg-[#0e1b3d]" : ""
            }`}
          >
            <Image
              src={service.img}
              alt={service.title}
              width={500}
              height={350}
              className={`w-full h-64 object-cover ${
                service.dark ? "opacity-0" : ""
              } group-hover:scale-105 duration-500`}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <div className="text-4xl mb-2">{service.icon}</div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-sm">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
