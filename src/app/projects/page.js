"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { useState } from "react";
import ProjectsGrid from "./ProjectGrid";

const page = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <Navbar menu={menu} setMenu={setMenu} />
      <main className="min-h-screen bg-black text-white py-20">
        <h1 className="text-center text-5xl md:text-6xl font-extrabold mb-16">
          Projects
        </h1>

        <ProjectsGrid />
      </main>
    </div>
  );
};

export default page;
