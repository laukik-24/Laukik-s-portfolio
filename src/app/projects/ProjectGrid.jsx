import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "TravelBroad",
    description:
      "A villa booking platform similar to Airbnb allowing users to browse, compare, and book villas.",
    tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
    image: "/assets/project/travel.png",
    github: "https://github.com/laukik-24/TravelBroad",
    link: "https://travelbroad.onrender.com/listings",
  },
  {
    title: "BountyBites",
    description:
      "An online platform where users explore menus from restaurants, customize meals, and order for pickup or delivery.",
    tech: ["React", "CSS", "JS", "Material UI"],
    image: "/assets/project/bounty.png",
    github: "https://github.com/laukik-24/BountyBites",
    link: "https://bounty-bites.vercel.app/",
  },

  {
    title: "Kingsukh GuestHouse",
    description:
      "A responsive guest house frontend designed to showcase rooms, amenities, and booking details with a clean and user-friendly interface.",
    tech: ["React", "JS", "Tailwind", "Framer-motion"],
    image: "/assets/project/kingsukh.png",
    github: "https://github.com/laukik-24/Kingsukh-Guest-Houes",
    link: "https://kingsukh-guest-houes.vercel.app/",
  },
  {
    title: "Mars",
    description:
      "A modern frontend website featuring secure authentication with Supabase, polished UI components using shadcn/ui, and smooth animations powered by Framer Motion.",
    tech: ["Next.js", "Tailwind", "Shadcn", "Supabase", "Framer-motion"],
    image: "/assets/project/mars.png",
    github: "https://github.com/laukik-24/mars",
    link: "https://mars-info.vercel.app/",
  },
  {
    title: "Upsurge 2k24",
    description:
      "A responsive tech fest website designed to showcase events, workshops, and competitions with a smooth and engaging user experience.",
    tech: ["Next.js", "Tailwind", "Three.js", "GSAP", "Framer-Motion"],
    image: "/assets/project/upsurge.png",
    github: "https://github.com/spectropaws/upsurge2k24-dev",
    link: "https://upsurge2k24-dev.vercel.app/",
  },
  {
    title: "Yash 25.0",
    description:
      "A vibrant cultural fest website that brings events, competitions, and innovations together in one interactive digital experience.",
    tech: ["React", "JS", "Tailwind", "Framer-motion"],
    image: "/assets/project/yash.png",
    github: "https://github.com/laukik-24/YASH-25.0",
    link: "https://www.yash2k25.tech/",
  },
  {
    title: "Simon Says",
    description:
      "A classic Simon Says memory game built with interactive UI and increasing difficulty to challenge player focus and recall.",
    tech: ["HTML", "CSS", "JS"],
    image: "/assets/project/simon.jpeg",
    github: "https://github.com/laukik-24/Simon-Says",
    link: "https://simon-says-laukik.vercel.app/",
  },
  {
    title: "Caption Generator",
    description:
      "A caption generator that creates engaging and context-aware captions to enhance social media content.",
    tech: ["React", "TypeScript", "Gemini API", "Tailwind", "Vite"],
    image: "/assets/project/caption.png",
    github: "https://github.com/laukik-24/Caption-Generator",
    link: "https://vac-caption-generator.vercel.app/",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 space-y-32">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} index={index} {...project} />
      ))}
    </section>
  );
}
