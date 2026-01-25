import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-[#f8f9fd] overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-12">
        
        {/* LEFT IMAGE AREA */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          {/* background shapes */}
          <div className="absolute -top-10 -left-10 bg-pink-300 w-80 h-80 rounded-full -z-10 opacity-80"></div>
          <div className="absolute bottom-0 -right-16 bg-gray-400 w-72 h-72 rounded-t-full -z-10"></div>

          {/* main image */}
          <Image
            src="/about/about.png"
            width={450}
            height={450}
            alt="Kids Care"
            className="rounded-full object-cover shadow-lg"
          />
        </div>

        {/* RIGHT TEXT AREA */}
        <div className="w-full md:w-1/2">
          <h3 className="text-pink-500 font-semibold uppercase tracking-wide">
            About Us
          </h3>
          <h2 className="text-5xl font-extrabold text-[#081c3a] leading-tight mt-2">
            Get Special Care <br /> For Your Kids
          </h2>
          <p className="text-gray-600 mt-6 leading-relaxed">
            Nunc mattis justo eget ex bibendum eleifend. Sed finibus neque nec dui
            vehicula sollicitudin. Nam at velit vel enim placerat fringilla at sit amet
            justo. Nullam nec risus placerat, sagittis odio eget, volutpat ante.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Vivamus convallis sed felis sed tincidunt. Sed nec arcu vel lectus molestie
            efficitur. Praesent viverra ipsum sagittis tellus facilisis malesuada.
          </p>

          <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
