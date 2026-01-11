import Image from "next/image";
import avatar from "../../public/assets/avatar.png";
import { FaDownload } from "react-icons/fa6";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-6xl font-black scale-y-[0.92]">About Me</h2>
        <p className="mt-3 text-xl text-gray-600 dark:text-gray-400">
          My Introduction
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <div className="relative h-80 w-[320px] lg:h-100 lg:w-100 rounded-full border-2 border-white dark:border-gray-700 bg-gray-00 overflow-hidden">
            <Image
              src={avatar}
              alt="Laukik Lanje"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left">
          <p className="text-[1.35rem] leading-[2.4rem] text-gray-700 dark:text-gray-300">
            Welcome to my portfolio! I&apos;m a passionate{" "}
            <span className="font-semibold text-black dark:text-[#fbbb7a]">
              Full-Stack Web Developer
            </span>{" "}
            dedicated to building robust, scalable, and user-friendly web
            applications. I love turning ideas into real-world products and
            crafting clean, maintainable code.
          </p>

          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/11BrYUSQL45VZXkY2_wlR6pUV7kB3nr9m/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-[#ac8e23] bg-black text-white dark:bg-white dark:text-black px-8 py-4 font-bold transition-transform duration-300 hover:scale-[1.04]">
              <FaDownload />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
