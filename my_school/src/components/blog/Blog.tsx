"use client";

import BlogCard from "@/components/blog/BlogCard";

const blogPosts = [
  {
    image: "/blog/inner_b1.jpg",
    title: "Nam at velit vel enim placerat fringilla.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali",
    date: "January 21, 2022",
    comments: "No Comments",
  },
  {
    image: "/blog/inner_b1.jpg",
    title: "Tem at velit vel enim placerat fringilla.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali",
    date: "January 21, 2022",
    comments: "No Comments",
  },
  {
    image: "/blog/inner_b1.jpg",
    title: "Seas accumsan nulla nec lacus ultricies placerat.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali",
    date: "January 21, 2022",
    comments: "No Comments",
  },
];

export default function BlogPage() {
  return (
    <section className="bg-[#f7f9fc] py-16 px-4 md:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h4 className="text-pink-500 font-bold uppercase mb-2">Our Blog</h4>
        <h2 className="text-4xl font-extrabold text-blue-900">Latest Blog & News</h2>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogPosts.map((post, idx) => (
          <BlogCard key={idx} {...post} />
        ))}
      </div>
    </section>
  );
}
