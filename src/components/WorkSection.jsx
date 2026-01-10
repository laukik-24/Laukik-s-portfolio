import Image from "next/image";
import { WorkCard } from "./WorkCard";

const projects = [
  {
    title: "BountyBites",
    description:
      "An online platform where users can explore menus from various restaurants, customize their meal preferences, and place orders for pickup or delivery.",
    tech: ["React", "CSS", "JS", "Material UI"],
    image: "/assets/project/bounty.png",
    link: "https://bounty-bites.vercel.app/",
    github: "https://github.com/laukik-24/BountyBites",
  },
  {
    title: "TravelBroad",
    description:
      "A villa booking site , quite similar to Airbnb. It allows user to browse , compare and book villas as of their choice. This site typically feature a wide range of villa options, including luxury, beachfront,etc.",
    tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
    image: "/assets/project/travel.png",
    link: "https://travelbroad.onrender.com/listings",
    github: "https://github.com/laukik-24/TravelBroad",
  },
];

export default function WorkSection() {
  return (
    <section className="mt-20 lg:mt-40 max-w-7xl mx-auto px-6 flex flex-col justify-center items-center">
      {/* Heading */}
      <h2 className="text-center text-6xl font-black mb-25 lg:mb-32">
        Selected Work
      </h2>

      <div className="space-y-40">
        {projects.map((project, index) => (
          <WorkCard key={index} project={project} />
        ))}
      </div>

      <a
        href="/projects"
        className="mt-20 bg-gray-900 px-6 py-3 text-white  font-bold rounded-2xl border border-[#546b6d]">
        See More
      </a>
    </section>
  );
}
