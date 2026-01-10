import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "BountyBites",
    description:
      "An online platform where users explore menus from restaurants, customize meals, and order for pickup or delivery.",
    tech: ["React", "CSS", "JS", "Material UI"],
    image: "/assets/project/bounty.png",
    github: "https://github.com/yourusername/bountybites",
    link: "https://bounty-bites.vercel.app/",
  },
  {
    title: "TravelBroad",
    description:
      "A villa booking platform similar to Airbnb allowing users to browse, compare, and book villas.",
    tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
    image: "/assets/project/travel.png",
    github: "https://github.com/yourusername/travelbroad",
    link: "https://travelbroad.onrender.com/listings",
  },
  {
    title: "TravelBroad",
    description:
      "A villa booking platform similar to Airbnb allowing users to browse, compare, and book villas.",
    tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
    image: "/assets/project/travel.png",
    github: "https://github.com/yourusername/travelbroad",
    link: "https://travelbroad.onrender.com/listings",
  },
  {
    title: "TravelBroad",
    description:
      "A villa booking platform similar to Airbnb allowing users to browse, compare, and book villas.",
    tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
    image: "/assets/project/travel.png",
    github: "https://github.com/yourusername/travelbroad",
    link: "https://travelbroad.onrender.com/listings",
  },
  {
    title: "TravelBroad",
    description:
      "A villa booking platform similar to Airbnb allowing users to browse, compare, and book villas.",
    tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
    image: "/assets/project/travel.png",
    github: "https://github.com/yourusername/travelbroad",
    link: "https://travelbroad.onrender.com/listings",
  },
  {
    title: "TravelBroad",
    description:
      "A villa booking platform similar to Airbnb allowing users to browse, compare, and book villas.",
    tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
    image: "/assets/project/travel.png",
    github: "https://github.com/yourusername/travelbroad",
    link: "https://travelbroad.onrender.com/listings",
  },
  {
    title: "TravelBroad",
    description:
      "A villa booking platform similar to Airbnb allowing users to browse, compare, and book villas.",
    tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
    image: "/assets/project/travel.png",
    github: "https://github.com/yourusername/travelbroad",
    link: "https://travelbroad.onrender.com/listings",
  },
  {
    title: "TravelBroad",
    description:
      "A villa booking platform similar to Airbnb allowing users to browse, compare, and book villas.",
    tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
    image: "/assets/project/travel.png",
    github: "https://github.com/yourusername/travelbroad",
    link: "https://travelbroad.onrender.com/listings",
  },
  {
    title: "TravelBroad",
    description:
      "A villa booking platform similar to Airbnb allowing users to browse, compare, and book villas.",
    tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
    image: "/assets/project/travel.png",
    github: "https://github.com/yourusername/travelbroad",
    link: "https://travelbroad.onrender.com/listings",
  },
  {
    title: "TravelBroad",
    description:
      "A villa booking platform similar to Airbnb allowing users to browse, compare, and book villas.",
    tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
    image: "/assets/project/travel.png",
    github: "https://github.com/yourusername/travelbroad",
    link: "https://travelbroad.onrender.com/listings",
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
