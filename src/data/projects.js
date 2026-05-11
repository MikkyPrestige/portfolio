import HospitoFind from "../assets/images/projects/hospitofind.png";
import Laundry from "../assets/images/projects/laundry.webp";
import LawFirm from "../assets/images/projects/law-firm.webp";
import GitAudit from "../assets/images/projects/gitAudit.png";
import TrustBank from "../assets/images/projects/trustbank.webp";
import Bob from "../assets/images/projects/bob-marley.png";

const projects = [
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
    slug: "prestigeenigma-advocates",
    title: "PrestigeEnigma Advocates",
    image: LawFirm,
    stack: ["React", "CSS"],
    github: "https://github.com/MikkyPrestige/PrestigeEnigma-Advocates",
    live: "https://prestigeadvocates.vercel.app",
    description:
      "A responsive landing page for a law firm, designed to enhance user experience and drive client engagement. The project focused on creating a clear section hierarchy, service-focused messaging, and conversion-friendly calls to action to guide potential clients through the discovery and inquiry process.",
    caseStudy: {
      problem:
        "The law firm needed a modern, user-friendly landing page that effectively communicated their services and encouraged potential clients to take action. The challenge was to create a design that was both professional and approachable, while also being optimized for conversions.",
      solution:
        "I designed a clean, responsive layout with a clear visual hierarchy to guide users through the content. I focused on crafting service-focused messaging and strategically placed calls to action to encourage inquiries. The design also incorporated trust signals and client testimonials to build credibility.",
      impact:
        "The landing page successfully enhanced the firm's online presence and improved user engagement. It provided a clear pathway for potential clients to learn about the firm's services and take action, ultimately contributing to increased inquiries and client acquisition.",
    },
    featured: true,
    bgClass: "project--card__bg--img-5",
  },
  {
    slug: "tribute-page",
    title: "Bob Marley",
    image: Bob,
    stack: ["HTML", "CSS"],
    github: "https://github.com/MikkyPrestige/bob_marley",
    live: "https://bob-marley-mu.vercel.app",
    description:
      "A personal tribute to my idol, Bob Marley. I created this project to celebrate his life, his music, and the message of 'One Love' that has inspired me. The page features a clean, responsive design with a focus on storytelling and accessibility, ensuring that visitors can easily navigate through the content and learn about Bob Marley's legacy.",
    caseStudy: {
      problem:
        "I wanted to create a tribute page that not only honored Bob Marley's legacy but also provided an engaging and accessible experience for visitors. The challenge was to present a wealth of information in a way that was easy to navigate and visually appealing.",
      solution:
        "I designed a responsive layout that highlights key moments in Bob Marley's life and career, using a combination of images, text, and multimedia elements. I also focused on accessibility by ensuring that the page was navigable via keyboard and screen readers, and by using semantic HTML to structure the content effectively.",
      impact:
        "The tribute page serves as a heartfelt homage to Bob Marley, offering fans and newcomers alike an engaging way to explore his life and music. It also demonstrates my ability to create meaningful, content-rich web experiences with a focus on accessibility and user engagement.",
    },
    featured: true,
    bgClass: "project--card__bg--img-6",
  },
];

export default projects;
