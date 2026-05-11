import HospitoFind from "../assets/images/projects/hospitofind.webp";
import HospitoLeads from "../assets/images/projects/leadgen.webp";
import Laundry from "../assets/images/projects/laundry.webp";
import FootballX from "../assets/images/projects/telegram.webp";
import GitAudit from "../assets/images/projects/gitAudit.webp";
import TrustBank from "../assets/images/projects/trustbank.webp";

const projects = [
  {
    slug: "trust-bank",
    title: "Trust Bank",
    image: TrustBank,
    stack: ["Next.js", "Typescript", "CSS Modules", "PostgreSQL"],
    github: "https://github.com/MikkyPrestige/trustbank",
    live: "https://trustbank-omega.vercel.app",
    description:
      "A full-stack banking simulation platform that models realistic transactional workflows, role-based controls, and data consistency under frequent operations. The project demonstrates full product thinking beyond UI: secure flows, operational tooling, and scalable data modeling. It showcases my ability to build systems that balance user experience, data integrity, and maintainability.",
    caseStudy: {
      problem:
        "The challenge was to design a banking simulation that accurately reflected real-world transactional complexities, including concurrent operations, account state management, and administrative controls for platform configuration.",
      solution:
        "I implemented a robust backend with PostgreSQL to handle transactional data integrity and concurrency. The front-end was built with Next.js to provide a responsive and intuitive user interface for both customers and administrators. I also developed operational tools for managing accounts, transactions, and platform settings, ensuring a comprehensive simulation experience.",
      impact:
        "The platform successfully simulated realistic banking operations, providing users with an engaging and educational experience. It also demonstrated my ability to design and implement complex systems that require careful consideration of data integrity, user experience, and operational needs.",
    },
    featured: true,
    bgClass: "project--card__bg--img-1",
  },
  {
    slug: "hospitofind",
    title: "HospitoFind",
    image: HospitoFind,
    stack: ["React", "CSS Modules", "MongoDB"],
    github: "https://github.com/MikkyPrestige/hospitoFind",
    live: "https://hospitofind.online",
    description:
      "A healthcare facility directory and symptom-guided assistant platform designed to improve discoverability and trust in healthcare data. The project features a searchable directory with location-aware filtering, structured records, and a moderation workflow for community-submitted updates. Additionally, it includes a symptom-guided assistant flow to enhance discovery intent and reduce user friction when seeking urgent care options.",
    caseStudy: {
      problem:
        "The healthcare industry often suffers from fragmented and unreliable data, making it difficult for users to find accurate information about nearby facilities, especially in urgent situations. The challenge was to create a platform that not only aggregated healthcare facility data but also provided a user-friendly experience that guided users based on their symptoms and location.",
      solution:
        "I developed a full-stack application using React for the front-end and MongoDB for the back-end to manage healthcare facility data. The platform includes a searchable directory with location-aware filtering, allowing users to find relevant facilities based on their current location. I also implemented a moderation workflow for community-submitted updates to ensure data accuracy and reliability. The symptom-guided assistant flow was designed to help users quickly identify appropriate care options based on their symptoms, reducing friction and improving the overall user experience.",
      impact:
        "The platform successfully improved the discoverability of healthcare facilities and provided users with a more intuitive way to find care options based on their symptoms. It also demonstrated my ability to design and implement a complex system that addresses real-world problems in the healthcare industry, balancing user experience, data integrity, and community engagement.",
    },
    featured: true,
    bgClass: "project--card__bg--img-2",
  },
  {
    slug: "git-audit",
    title: "GitAudit",
    image: GitAudit,
    stack: ["React", "Typescript", "Tailwind CSS", "GitHub API"],
    github: "https://github.com/MikkyPrestige/git-audit",
    live: "https://git-audit-iota.vercel.app",
    description:
      "A tool for analyzing and comparing GitHub projects side-by-side to understand code structure, quality, and metrics. It features a search-and-display flow that fetches data from the GitHub API, presenting insights through reusable UI components.",
    caseStudy: {
      problem:
        "The challenge was to create a tool that could fetch and display comprehensive data about GitHub repositories in a way that was both informative and easy to navigate. Users needed a way to quickly assess repository health, structure, and key metrics without having to manually sift through GitHub's interface.",
      solution:
        "I developed a React application that integrates with the GitHub API to fetch repository data based on user input. The application features a search interface where users can enter repository names, and the results are displayed in a side-by-side format for easy comparison.",
      impact:
        "The tool successfully provides users with a streamlined way to analyze GitHub repositories, offering insights into code structure, quality, and key metrics. It demonstrates my ability to design and implement a data-driven application that integrates with external APIs and presents information in a user-friendly manner.",
    },
    featured: true,
    bgClass: "project--card__bg--img-3",
  },
  {
    slug: "machala-laundry",
    title: "Machala Laundry",
    image: Laundry,
    stack: ["SCSS", "React", "Firebase"],
    github: "https://github.com/MikkyPrestige/machala-laundry",
    live: "https://machala-laundry.vercel.app",
    description:
      "A responsive service platform for a local laundry business, designed to enhance online presence and streamline customer interactions. The platform features a booking-focused user experience, embedded communication channels, and social-proof integration to improve service discoverability and reduce manual communication overhead.",
    caseStudy: {
      problem:
        "The laundry business needed a professional online platform to attract customers, facilitate bookings, and reduce the time spent on routine inquiries. The challenge was to create a user-friendly interface that clearly communicated services and encouraged customer engagement.",
      solution:
        "I designed a responsive website with a clear section hierarchy to guide users through the service offerings. I embedded communication channels for easy inquiries and integrated social proof elements to build trust. The platform also included a booking flow to streamline the customer journey from discovery to action.",
      impact:
        "The website successfully enhanced the laundry's online presence, attracting new customers and improving engagement. It provided a convenient way for customers to learn about services and make bookings, ultimately contributing to increased business and customer satisfaction.",
    },
    featured: true,
    bgClass: "project--card__bg--img-4",
  },
  {
    slug: "football-x-agent",
    title: "Football X Agent",
    image: FootballX,
    stack: ["Python", "Groq LLM", "Telegram Bot", "API-Football", "Docker"],
    github: "https://github.com/MikkyPrestige/football-x-agent",
    live: "https://t.me/MyFootballAgentBot",
    description:
      "An AI powered Telegram bot that monitors live football matches, analyses news sentiment, and generates draft tweets. It combines real‑time data from 7+ sports sources, a Groq powered large language model for content generation, and a full command driven queue management system for reviewing, holding, posting, and tracking tweet performance.",
    caseStudy: {
      problem:
        "Football content creators and analysts struggle to keep up with live matches and breaking news, often spending hours manually aggregating sources and drafting social posts. The challenge was to build an intelligent agent that could autonomously collect real‑time data, synthesise insights, and manage a publish queue, all within a lightweight, always available interface.",
      solution:
        "I architected a Python based agent running in Docker that ingests live match events, RSS feeds, Reddit threads, and API‑Football data. The Groq LLM generates contextual draft tweets with a custom few shot prompt and style rule system. Users interact with the bot entirely through Telegram commands reviewing a queue of drafts, quarantining, posting, and tracking engagement metrics. A health check system monitors source reliability, and the database can be backed up to Telegram itself.",
      impact:
        "The bot automates the entire content workflow: from data ingestion and analysis to draft generation and performance tracking. It demonstrates advanced Python engineering, prompt engineering for LLMs, robust error handling, and thoughtful UX design within the constraints of a chat interface. The project reflects my genuine passion for football and understanding of automation.",
    },
    featured: true,
    bgClass: "project--card__bg--img-5",
  },
  {
    slug: "hospitofind-leadgen",
    title: "HospitoFind Lead Gen",
    image: HospitoLeads,
    stack: [
      "Python",
      "Reddit API",
      "Google Sheets API",
      "GitHub Actions",
      "Email Enrichment",
    ],
    github: "https://github.com/MikkyPrestige/hospitofind-leadgen",
    live: "https://github.com/MikkyPrestige/hospitofind-leadgen",
    description:
      "An automated lead generation pipeline for identifying potential healthcare facility outreach targets. It monitors Reddit for relevant threads, scores each lead by intent and relevance, and outputs structured, enriched records into a Google Sheet. The system runs on a daily cron, making the entire lead discovery process hands‑off.",
    caseStudy: {
      problem:
        "Identifying valuable marketing or partnership leads in the healthcare space traditionally involves manual searching across forums, social media, and directories. The process is time consuming, inconsistent and rarely produces structured, scored outputs that can be fed directly into outreach workflows.",
      solution:
        "I built a Python script that runs as a GitHub Actions cron job, scanning specified subreddits for posts mentioning healthcare needs, facility requests, or operational gaps. Using NLP‑based intent scoring and keyword analysis, each lead is assigned a relevance score. The enriched data, including post content, author context, timestamp, and inferred contact details via email enrichment, is written automatically to a Google Sheet. Blacklisting and deduplication prevent repeat entries, and a sent‑log tracks outreach status.",
      impact:
        "The result is a reliable, low cost lead generation pipeline that surfaces actionable opportunities daily, with zero manual intervention. It showcases automation, API integration (Reddit, Google Sheets, email enrichment), and data engineering skills, with a clear use case for healthcare focused sales or growth teams.",
    },
    featured: true,
    bgClass: "project--card__bg--img-6",
  }
];

export default projects;
