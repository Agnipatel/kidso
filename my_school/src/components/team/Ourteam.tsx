"use client";

import TeamMemberCard from "@/components/team/teamcard";

const teamMembers = [
  {
    name: "Mona Matthews",
    role: "Kidso",
    image: "/team/team01-1.png",
  },
  {
    name: "Dawon Crisen",
    role: "Kidso",
    image: "/team/team02-1.png",
  },
  {
    name: "David Suarez",
    role: "Kidso",
    image: "/team/team03-1.png",
  },
  {
    name: "Gerard Peano",
    role: "Kidso",
    image: "/team/team04-1.png",
  },
];

export default function TeamPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-pink-500 text-sm font-bold uppercase mb-2">
          Our Team
        </h2>
        <h1 className="text-4xl font-extrabold text-blue-900">
          Our Expert Team
        </h1>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
}
