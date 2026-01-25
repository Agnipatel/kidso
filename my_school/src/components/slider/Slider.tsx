"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function LogoSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    let animationFrameId;

    const scroll = () => {
      scrollAmount += 0.8; // 👈 Adjust speed here (0.5–1 = smooth)
      if (scrollAmount >= slider.scrollWidth / 2) scrollAmount = 0;
      slider.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const logos = [
    "/images/aven.png",
    "/images/kanba.png",
    "/images/amara.png",
    "/images/kanba.png",
    "/images/aven.png",
    "/images/amara.png",
  ];

  return (
    <section className="bg-[#FF4B6E] py-10 overflow-hidden">
      <div
        ref={sliderRef}
        className="flex items-center gap-16 whitespace-nowrap overflow-hidden"
      >
        {/* Duplicate logos for seamless scroll */}
        {[...logos, ...logos].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Brand logo ${i}`}
            width={120}
            height={50}
            className="inline-block object-contain"
          />
        ))}
      </div>
    </section>
  );
}
