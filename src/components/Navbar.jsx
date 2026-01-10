"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar({ menu, setMenu }) {
  // 1️⃣ Mounted flag (SAFE usage)
  const [mounted, setMounted] = useState(false);

  // 2️⃣ Always call hooks in same order
  useEffect(() => {
    setMounted(true);
  }, []);

  // 3️⃣ ESC key close (hook ALWAYS runs)
  useEffect(() => {
    if (!menu) return;

    const escHandler = (e) => {
      if (e.key === "Escape") setMenu(false);
    };

    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, [menu, setMenu]);

  // 4️⃣ Prevent hydration mismatch cleanly
  if (!mounted) return null;

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "My Work", href: "/projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* MENU BUTTON */}
      <div className="fixed top-12 right-4 lg:right-40 z-50">
        <button
          onClick={() => setMenu(!menu)}
          className="px-8 py-2 rounded-full border text-2xl border-gray-600 bg-zinc-900 text-white font-extrabold scale-y-[0.88]">
          {menu ? "close" : "menu"}
        </button>
      </div>

      {/* NAV */}
      <nav
        className={`fixed inset-0 z-40 flex items-center justify-start transition-all duration-500 ease-[cubic-bezier(0.86,0,0.07,1)]
        bg-[radial-gradient(at_10%_20%,#ff5fa2_0%,transparent_45%),radial-gradient(at_80%_10%,#9fe0d0_0%,transparent_45%),radial-gradient(at_70%_80%,#ff8b8b_0%,transparent_45%),radial-gradient(at_30%_85%,#7fd3a6_0%,transparent_45%),linear-gradient(#ff6aa2,#ff6aa2)]
        ${menu ? "translate-x-0" : "-translate-x-full"}`}>
        <ol className="lg:ml-60 ml-12 space-y-12 text-5xl font-black text-white">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setMenu(false)}
                className="relative inline-block scale-y-[0.92] leading-none tracking-tight after:absolute after:left-0 after:-bottom-2 after:h-[4px] after:w-full after:bg-white after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
