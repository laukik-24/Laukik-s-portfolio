"use client";

import Image from "next/image";

// import react from "/assets/skills/react.png";
// import js from "/assets/skills/js.png";
// import html from "/assets/skills/html.png";
// import css from "/assets/skills/css.png";
// import tailwind from "/assets/skills/tailwind.png";
// import nextjs from "/assets/skills/next.svg";
// import git from "/assets/skills/git.png";

// import node from "/assets/skills/node.svg";
// import express from "/assets/skills/express.png";
// import mongo from "/assets/skills/mongo.png";
// import sql from "/assets/skills/sql.png";
// import postgre from "/assets/skills/postgre.svg";
// import socket from "/assets/skills/socket.svg";
// import vite from "/assets/skills/vite.png";

// import vscode from "/assets/skills/vscode.png";
// import nvim from "/assets/skills/nvim.png";
// import github from "/assets/skills/github.svg";
// import npm from "/assets/skills/npm.svg";
// import material from "/assets/skills/materialUi.png";
// import figma from "/assets/skills/figma.png";
// import boot from "/assets/skills/boot.png";

const row1 = [
  { img: "/assets/skills/react.png", name: "React", bg: "bg-[#007acc26]" },
  { img: "/assets/skills/js.png", name: "Javascript", bg: "bg-[#f0db4f26]" },
  { img: "/assets/skills/html.png", name: "HTML", bg: "bg-[#dd4b2526]" },
  { img: "/assets/skills/css.png", name: "CSS", bg: "bg-[#264de426]" },
  {
    img: "/assets/skills/tailwind.png",
    name: "Tailwind",
    bg: "bg-[#44a8b326]",
  },
  { img: "/assets/skills/next.svg", name: "Next.js", bg: "bg-white/10" },
  { img: "/assets/skills/git.png", name: "Git", bg: "bg-[#e671711f]" },
];

const row2 = [
  { img: "/assets/skills/node.svg", name: "Node.js", bg: "bg-[#6fa66026]" },
  { img: "/assets/skills/express.png", name: "Express", bg: "bg-[#6fa66026]" },
  { img: "/assets/skills/mongo.png", name: "MongoDB", bg: "bg-[#6fa66026]" },
  { img: "/assets/skills/sql.png", name: "MySQL", bg: "bg-[#3bbdb314]" },
  {
    img: "/assets/skills/Postgre.png",
    name: "PostgreSQL",
    bg: "bg-[#44a8b326]",
  },
  { img: "/assets/skills/Socket.svg", name: "Socket.io", bg: "bg-white/10" },
  { img: "/assets/skills/vite.png", name: "Vite", bg: "bg-[#6e97fe26]" },
];

const row3 = [
  { img: "/assets/skills/vscode.png", name: "VS Code", bg: "bg-[#33abe326]" },
  { img: "/assets/skills/nvim.svg", name: "Neovim", bg: "bg-[#55e53926]" },
  { img: "/assets/skills/github.svg", name: "GitHub", bg: "bg-white/10" },
  { img: "/assets/skills/npm.svg", name: "npm", bg: "bg-[#cc000026]" },
  {
    img: "/assets/skills/materialUi.png",
    name: "Material UI",
    bg: "bg-[#7ebae226]",
  },
  { img: "/assets/skills/figma.png", name: "Figma", bg: "bg-white/10" },
  { img: "/assets/skills/boot.png", name: "Bootstrap", bg: "bg-[#6d10f426]" },
];

function ScrollRow({ skills, direction = "left", duration = 18 }) {
  return (
    <div className="overflow-hidden py-2">
      <ul
        style={{ animationDuration: `${duration}s` }}
        className={`flex w-max gap-9
        ${
          direction === "left"
            ? "animate-[scroll-left_linear_infinite]"
            : "animate-[scroll-right_linear_infinite]"
        }
        hover:[animation-play-state:paused]`}>
        {[...skills, ...skills].map((s, i) => (
          <li
            key={i}
            className="flex items-center gap-4 rounded-lg px-5 py-3 min-w-32.5 h-13 bg-white/5 border border-white/10 backdrop-blur-md">
            <div className={`p-2 rounded-md ${s.bg}`}>
              <Image src={s.img} alt={s.name} width={22} height={22} />
            </div>
            <span className="text-white/85 text-sm font-semibold whitespace-nowrap">
              {s.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mt-32 mx-auto max-w-7xl px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-6xl font-black scale-y-[0.92]">Skills</h2>
      </div>

      {/* Infinite rows */}
      <div className="space-y-6">
        <ScrollRow skills={row1} direction="left" duration={18} />
        <ScrollRow skills={row2} direction="right" duration={20} />
        <ScrollRow skills={row3} direction="left" duration={16} />
      </div>
    </section>
  );
}
