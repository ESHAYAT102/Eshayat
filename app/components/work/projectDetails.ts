export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "Snap!",
    description: "open-source CSS framework inspired by TailwindCSS.",
    github: "https://github.com/ESHAYAT102/snap",
    demo: "https://snap-css.vercel.app/",
    image: "/projects/snap.png",
    available: true,
  },
  {
    id: 1,
    name: "Web Development Roadmap",
    description:
      "100% free web development roadmap which starts from absolute basic so that anyone can start it from scratch.",
    github: "https://github.com/ESHAYAT102/Web-Development-Roadmap",
    demo: "https://web-development-roadmap.vercel.app/",
    image: "/projects/webdev.png",
    available: true,
  },
  {
    id: 2,
    name: "Save Bangladeshi Students",
    description:
      "The story of some of the first days of the independency war of 2024.",
    github: "https://github.com/ESHAYAT102/SaveBangladeshiStudents",
    demo: "https://save-bangladeshi-students.vercel.app/",
    image: "/projects/sbs.png",
    available: true,
  },
];
