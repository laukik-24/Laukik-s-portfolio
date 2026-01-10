"use client";

import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  index,
  title,
  description,
  tech,
  image,
  github,
  link,
}) {
  const reverse = index % 2 !== 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 items-center">
      {/* TEXT */}
      <div className={reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
        <h2 className="text-4xl font-extrabold mb-4">{title}</h2>

        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

        <ul className="mb-6 space-y-1 text-gray-300">
          {tech.map((t) => (
            <li key={t}>• {t}</li>
          ))}
        </ul>
        <div className="flex gap-5">
          <a
            href={link}
            target="_blank"
            className="inline-flex items-center gap-3 font-semibold border-b border-white pb-1 hover:opacity-80 transition">
            Explore this project
          </a>
          <a href={github}>
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>

      {/* IMAGE */}
      <div className={reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
