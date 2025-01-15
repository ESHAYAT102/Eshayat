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
    name: "Blog",
    description:
      "My Personal Blog Page.",
    github: "https://github.com/ESHAYAT102",
    demo: "https://blog.eshayat.com",
    image: "/projects/blog.png",
    available: true,
  },
  {
    id: 1,
    name: "Tech Stack Builder",
    description:
      "Make Custom Teck Stacks For New Projects.",
    github: "https://github.com/ESHAYAT102",
    demo: "https://tech-stack.eshayat.com",
    image: "/projects/tsb.png",
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
