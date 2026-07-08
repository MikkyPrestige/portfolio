import HospitoFind from "../assets/images/projects/hospitofind.webp";
import HospitoLeads from "../assets/images/projects/leadgen.webp";
import Laundry from "../assets/images/projects/laundry.webp";
import FootyDraft from "../assets/images/projects/footydraft.png";
import GitAudit from "../assets/images/projects/gitAudit.webp";
import TrustBank from "../assets/images/projects/trustbank.webp";

const projects = [
  {
    slug: "hospitofind",
    title: "HospitoFind",
    image: HospitoFind,
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
      "TensorFlow.js",
      "Groq",
      "PWA",
    ],
    github: "https://github.com/MikkyPrestige/hospitoFind",
    live: "https://hospitofind.online",
    description:
      "Healthcare discovery platform that translates everyday symptoms into accurate, location aware hospital recommendations. It combines a conversational assistant (backed by Groq LLM and a custom semantic search engine built on TensorFlow.js) with a verified global hospital directory, an OpenStreetMap data pipeline, and a full admin moderation suite. The app is production deployed with Redis caching, structured logging, Sentry monitoring, and automated CI/CD.",
    caseStudy: {
      problem:
        "People describe symptoms in natural language — 'tightness in my chest' — but hospital directories are written in clinical terms like 'cardiology'. Traditional search fails this gap entirely, returning zero results or irrelevant facilities. For users who don't know medical terminology, the friction can delay critical care. Additionally, hospital data in many regions is fragmented, unverified, and hard to discover without scraping or manual curation.",
      solution:
        "I built a fullstack platform with a conversational AI assistant that uses a hybrid matching engine: keyword based symptom-to-service mapping combined with a custom semantic (RAG) matcher powered by TensorFlow.js Universal Sentence Encoder. The AI understands vague descriptions and boosts hospitals that are semantically relevant, while location-based tiering (city → country → continent) ensures results are always nearby. To solve the data problem, I integrated a free OpenStreetMap import pipeline with dry-run preview and admin verification, allowing the database to scale globally without a paid API dependency. The backend features Zod validation, Redis caching, rate-limiting, and structured JSON logging with Sentry error monitoring. The frontend is a PWA with offline support, dark/light themes, an admin dashboard for batch-approval of submissions, and a dynamic symptom-mapping CRUD.",
      impact:
        "The app now correctly maps vague symptoms to the right medical specialities e.g cardiology, gastroenterology, and pulmonology queries all return the expected top result. It processes over 300 verified hospitals and rebuilds embeddings automatically in the background. The OSM pipeline imported hundreds of hospitals from Lagos alone with zero external cost. The platform is installable on mobile and desktop, fully tested with automated CI, and demonstrates high level engineering across AI, full-stack development, DevOps, and product design.",
    },
    featured: true,
    bgClass: "project--card__bg--img-1",
  },
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
    bgClass: "project--card__bg--img-2",
  },
  {
    slug: "footydraft",
    title: "FootyDraft",
    image: FootyDraft,
    stack: [
      "Python",
      "Groq LLM",
      "Telegram Bot",
      "API-Football",
      "Football‑Data.org",
      "Streamlit",
      "Docker",
      "Fly.io",
    ],
    github: "https://github.com/MikkyPrestige/footydraft",
    live: "https://footydraft-cvqefrtcypjrqd5rn8xgpv.streamlit.app",
    description:
      "An AI powered football content engine that turns live match data, breaking news, and tournament statistics into ready-to-post tweet drafts. It monitors 10+ sources in real time, generates contextual drafts with a Groq LLM, provides a password protected analytics dashboard, and learns from engagement, all controlled via a Telegram bot.",
    caseStudy: {
      problem:
        "Football accounts need to post instantly when a goal is scored, a transfer breaks, or a quirky stat emerges, but manually watching matches, scraping stats, and drafting tweets is unsustainable. The challenge was to build a single agent that could ingest live data, generate insightful drafts (news, stats, and nerdy insights), manage a review queue, and even analyse performance over time.",
      solution:
        "I built FootyDraft, a Python agent deployed 24/7 on Fly.io. It fetches live match events, RSS feeds, Reddit, Google News, and API-Football data. On top of real time news drafts, it also generates post match, half time, and live goal stat packs (xG, possession, shots, etc.), weekly top scorer & assist leaderboards, and a 'Nerdy Stats of the Week' roundup that detects patterns like xG overperformance or possession without result. A dedicated fast feed lane polls six transfer focused RSS feeds every 10 minutes for near instant gossip. All drafts go through a Telegram based approval queue with one tap copy, hold, post, and metrics tracking. The Streamlit dashboard (password protected) provides analytics, source health, rule management, and database backups. The system uses a Groq LLM with few-shot examples from the user's own best performing tweets and learns from engagement via weekly rule suggestions,",
      impact:
        "FootyDraft automates the entire football content pipeline, from raw data to publish-ready drafts and performance analytics. It demonstrates advanced Python, prompt engineering, real-time data handling, and thoughtful UX design within a chat interface. The project reflects my ability to build practical, end-to-end AI tools that solve a real content creator's pain point, while showcasing a deep understanding of football culture and data.",
    },
    featured: true,
    bgClass: "project--card__bg--img-3",
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
    bgClass: "project--card__bg--img-4",
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
      "An automated lead generation pipeline for identifying potential healthcare facility outreach targets. It monitors Reddit for relevant threads, scores each lead by intent and relevance, and outputs structured, enriched records into a Google Sheet. The system runs on a daily cron, making the entire lead discovery process hands-off.",
    caseStudy: {
      problem:
        "Identifying valuable marketing or partnership leads in the healthcare space traditionally involves manual searching across forums, social media, and directories. The process is time consuming, inconsistent and rarely produces structured, scored outputs that can be fed directly into outreach workflows.",
      solution:
        "I built a Python script that runs as a GitHub Actions cron job, scanning specified subreddits for posts mentioning healthcare needs, facility requests, or operational gaps. Using NLP-based intent scoring and keyword analysis, each lead is assigned a relevance score. The enriched data, including post content, author context, timestamp, and inferred contact details via email enrichment, is written automatically to a Google Sheet. Blacklisting and deduplication prevent repeat entries, and a sent log tracks outreach status.",
      impact:
        "The result is a reliable, low cost lead generation pipeline that surfaces actionable opportunities daily, with zero manual intervention. It showcases automation, API integration (Reddit, Google Sheets, email enrichment), and data engineering skills, with a clear use case for healthcare focused sales or growth teams.",
    },
    featured: true,
    bgClass: "project--card__bg--img-6",
  },
];

export default projects;
