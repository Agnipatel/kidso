"use client";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const stats = [
    { number: 192, label: "Kids Are Happy" },
    { number: 254, label: "Happy To Service" },
    { number: 399, label: "Cup Of Coffee" },
    { number: 468, label: "Our Happy Clients" },
  ];

  const [count, setCount] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((item, index) => {
      return setInterval(() => {
        setCount((prev) => {
          const newCount = [...prev];
          if (newCount[index] < item.number) {
            newCount[index] += 1;
          }
          return newCount;
        });
      }, 10); // Speed of counter
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section className="bg-white py-12 shadow-md rounded-xl mx-6 md:mx-16 mt-10 relative overflow-hidden">
      {/* Left Decorative Circle */}
      <div className="absolute -top-10 -left-10 w-32 h-32 border border-dashed border-pink-400 rounded-full"></div>
      {/* Right Decorative Circle */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-dashed border-pink-400 rounded-full"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between text-center px-6 md:px-16">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex-1 border-r last:border-none border-gray-300 py-6"
          >
            <h2 className="text-5xl font-bold text-pink-500">
              {count[index]}+
            </h2>
            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
