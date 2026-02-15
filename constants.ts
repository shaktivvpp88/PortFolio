import { Experience, Project, Skill } from "./types";

export const DEV_NAME = "Shakti Saxena";
export const DEV_ROLE = "Full-Stack Developer";
export const DEV_PROFILE_IMAGE = "/images/profile.jpeg";

export const ABOUT_TEXT = `Full-Stack Developer with proven experience in building scalable web applications. 
Passionate about creating and maintaining reusability in code bases and maximizing user efficiency. 
I specialize in the React, Node.js and Vue ecosystems, with a strong focus on third-party integrations, 
performance optimization.`;

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Excellence Technologies",
    role: "Full-Stack Developer",
    period: "March 2025 - Present",
    description: [
      "Designed and developed end-to-end web applications by integrating scalable front-end interfaces with robust back-end architectures.",
      "Developed and optimized database schemas, queries, and data models to improve efficiency and system reliability.",
      "Collaborated across teams to translate business requirements into technical solutions while maintaining code quality and scalability standards."
    ]
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Gotobeat",
    description: "Developed reusable UI components for an events platform using React and Remix. Fixed critical UI & functional issues to ensure a smoother user experience.",
    techStack: ["React", "Remix", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/seed/gotobeat/600/400",
    liveUrl: "https://gotobeat.com/"
  },
  {
    id: 2,
    title: "MTMPRO",
    description: "Resolved multiple front- and back-end bugs and refactored legacy code, significantly improving performance, maintainability, and overall code quality.",
    techStack: ["Vue 2", "NestJS", "Vuetify", "Vuex"],
    imageUrl: "https://picsum.photos/seed/realiseme/600/400",
    liveUrl: "https://www.mtmpro.com/"
  },
  {
    id: 3,
    title: "Hungry Democracy",
    description: "Built a recipe-sharing application using Nuxt.js. Implemented Firebase Authentication and Firestore queries for dynamic content.",
    techStack: ["Nuxt.js", "Vuetify", "Firebase"],
    imageUrl: "https://picsum.photos/seed/hungry/600/400",
    liveUrl: "https://hungrydemocracy.com/"
  },
  {
  id: 4,
  title: "Casamia",
  description: "Worked on improving SEO and optimizing Lighthouse performance for faster load times and better search visibility.",
  techStack: ["Nuxt 3", "Bootstrap", "Firebase"],
  imageUrl: "https://picsum.photos/seed/casamia/600/400",
  liveUrl: "https://www.casamia.co/"
}
];

export const SKILLS: Skill[] = [
  { name: "Vue.js / Nuxt", category: "Frontend", level: 90 },
  { name: "React.js", category: "Frontend", level: 85 },
  { name: "JavaScript", category: "Frontend", level: 90 },
  { name: "HTML / CSS", category: "Frontend", level: 95 },
  { name: "Tailwind CSS", category: "Frontend", level: 90 },
  { name: "Nest JS", category: "Backend", level: 80 },
  { name: "Java", category: "Backend", level: 75 },
  { name: "Node.js", category: "Backend", level: 85 },];