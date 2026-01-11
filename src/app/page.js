"use client";
import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import WorkSection from "@/components/WorkSection";
import GithubCalendarComponent from "@/components/GithubCalendarComponent";

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-black text-gray-300">
      <Navbar menu={menu} setMenu={setMenu} />
      <Hero />
      <main className="relative z-10 bg-black rounded-t-[80px] -mt-20 pt-32 transition-all duration-700 ease-out">
        <About />
        <div className="hidden lg:block">
          <GithubCalendarComponent />
        </div>
        <WorkSection />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
