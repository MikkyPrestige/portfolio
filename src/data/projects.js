import HospitoFind from "../assets/images/projects/hospitoFind.webp";
import Laundry from "../assets/images/projects/laundry.webp";
import LawFirm from "../assets/images/projects/law-firm.webp";
import HangPanda from "../assets/images/projects/hangman.webp";
import GitFolio from "../assets/images/projects/gitFolio.webp";
import TaskTracker from "../assets/images/projects/task-tracker.webp";
import TrustBank from "../assets/images/projects/trustbank.webp";
import Bob from "../assets/images/projects/marley.webp";

const projects = [
  {
    slug: "hospitofind",
    title: "HospitoFind",
    image: HospitoFind,
    stack: ["React", "CSS Modules", "MongoDB"],
    github: "https://github.com/MikkyPrestige/hospitoFind",
    live: "https://hospitofind.online",
    description:
      "A global health-tech platform scaled from a regional locator to a directory covering five continents. Features an AI-driven symptom-matching assistant and a verified community submission engine for over 600 facilities, ensuring real-time data accuracy and global healthcare access.",
    caseStudy: {
      problem: "What challenge this project solved",
      solution: "How you designed and implemented it",
      impact: "Outcome, metrics, user/business value",
    },
    featured: true,
    bgClass: "project--card__bg--img-1",
  },
  {
    slug: "trust-bank",
    title: "Trust Bank",
    image: TrustBank,
    stack: ["Next.js", "CSS", "PostgreSQL"],
    github: "https://github.com/MikkyPrestige/trustbank",
    live: "https://trustbank-omega.vercel.app",
    description:
      "A high-fidelity banking simulation architected with a real-time transaction 'Movement Engine' and a secure Client Vault. Includes a centralized administrative Command Center for managing global site configurations and a relational database optimized for high-frequency financial queries.",
    caseStudy: {
      problem: "What challenge this project solved",
      solution: "How you designed and implemented it",
      impact: "Outcome, metrics, user/business value",
    },
    featured: true,
    bgClass: "project--card__bg--img-2",
  },
  {
    slug: "machala-laundry",
    title: "Machala Laundry",
    image: Laundry,
    stack: ["SCSS", "React", "Firebase"],
    github: "https://github.com/MikkyPrestige/machala-laundry",
    live: "https://machalalaundryservice.netlify.app",
    description:
      "A Service-as-a-Software (SaaS) platform for laundry business management featuring an integrated online booking system, live chat support and automated social proof through Google Reviews integration. The project involved managing the full deployment cycle, from front-end development to hosting and domain configuration.",
    caseStudy: {
      problem: "What challenge this project solved",
      solution: "How you designed and implemented it",
      impact: "Outcome, metrics, user/business value",
    },
    featured: true,
    bgClass: "project--card__bg--img-4",
  },
  {
    slug: "hangpanda",
    title: "HangPanda",
    image: HangPanda,
    stack: ["MERN", "Tailwind"],
    github: "https://github.com/n-shen/game-hangman",
    live: "https://hangman.ntec.app",
    description:
      "A collaborative MERN-stack word game featuring a real-time leaderboard and responsive UI. I contributed to the front-end logic and styling using Tailwind CSS, implementing a real-time scoring system and the global leaderboard to track top players.",
    caseStudy: {
      problem: "What challenge this project solved",
      solution: "How you designed and implemented it",
      impact: "Outcome, metrics, user/business value",
    },
    featured: true,
    bgClass: "project--card__bg--img-3",
  },
  {
    slug: "task-tracker",
    title: "Task Tracker",
    image: TaskTracker,
    stack: ["MERN", "CSS"],
    github: "https://github.com/MikkyPrestige/lighthall-super-league-level-2",
    live: "https://task-tracker.ntec.app",
    description:
      " A task management application built with a team of developers using the MERN stack. I was responsible for the core task manager page, developing the comprehensive CRUD operations, as well as complex sorting criteria (status, due date) and an interactive UI designed for efficient team workflow.",
    caseStudy: {
      problem: "What challenge this project solved",
      solution: "How you designed and implemented it",
      impact: "Outcome, metrics, user/business value",
    },
    featured: true,
    bgClass: "project--card__bg--img-5",
  },
  {
    slug: "gitfolio",
    title: "GitFolio",
    image: GitFolio,
    stack: ["React", "GitHub API"],
    github: "https://github.com/MikkyPrestige/GitFolio",
    live: "https://gitfoliohub.vercel.app",
    description:
      "A dynamic GitHub repository explorer leveraging the GitHub REST API to fetch and display repository data. Enables real-time searching and detailed repository insights about public projects and profile metrics.",
    caseStudy: {
      problem: "What challenge this project solved",
      solution: "How you designed and implemented it",
      impact: "Outcome, metrics, user/business value",
    },
    featured: true,
    bgClass: "project--card__bg--img-7",
  },
  {
    slug: "prestigeenigma-advocates",
    title: "PrestigeEnigma Advocates",
    image: LawFirm,
    stack: ["React", "CSS"],
    github: "https://github.com/MikkyPrestige/PrestigeEnigma-Advocates",
    live: "https://prestigeadvocates.vercel.app",
    description:
      "A professional responsive legal service landing page Focused on clean UI/UX and content architecture to effectively showcase practice areas and legal expertise to potential clients.",
    caseStudy: {
      problem: "What challenge this project solved",
      solution: "How you designed and implemented it",
      impact: "Outcome, metrics, user/business value",
    },
    featured: true,
    bgClass: "project--card__bg--img-6",
  },
  {
    slug: "tribute-page",
    title: "Bob Marley",
    image: Bob,
    stack: ["HTML", "CSS"],
    github:
      "https://github.com/MikkyPrestige/FCC-responsive-web-design-projects/tree/master/Bob%20Marley",
    live: "https://bob-marley-tribute.netlify.app",
    description:
      "A responsive tribute site paying homage to Bob Marley (The Greatest Musician Of ALL TIME). It focuses on semantic HTML and structured CSS to present a clean, narrative-driven biography of the artist.",
    caseStudy: {
      problem: "What challenge this project solved",
      solution: "How you designed and implemented it",
      impact: "Outcome, metrics, user/business value",
    },
    featured: true,
    bgClass: "project--card__bg--img-8",
  },
];

export default projects;
