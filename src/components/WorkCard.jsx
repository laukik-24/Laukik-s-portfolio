import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export function WorkCard({ project }) {
  const github = "/assets/skills/github.png";
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-20`}>
      {/* LEFT TEXT */}
      <div className="max-w-xl">
        <h3 className="text-4xl font-black mb-4">{project.title}</h3>

        <p className="text-gray-400 text-lg mb-6">{project.description}</p>

        <ul className="list-disc list-inside text-gray-400 space-y-1 mb-8">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="flex gap-4">
          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-white font-bold border-b border-white pb-1 hover:opacity-70 transition">
            Explore this project
          </a>
          <a href={project.github}>
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full max-w-xl">
        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={600}
          className="rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
