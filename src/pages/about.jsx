import React from "react";
import { Helmet } from "react-helmet";
import Avatar from "../components/avatar";
import myAvatar from "../assets/images/prestige.webp";
import HTML5 from "../assets/images/skills/html-logo.webp";
import CSS3 from "../assets/images/skills/css-logo.webp";
import JS from "../assets/images/skills/javascript-logo.webp";
import Typescript from "../assets/images/skills/typescript.webp";
import REACT from "../assets/images/skills/react-logo.webp";
import NextJs from "../assets/images/skills/nextjs.webp";
import PostgreSQL from "../assets/images/skills/postgresql.webp";
import FIREBASE from "../assets/images/skills/firebase.svg";
import GIT from "../assets/images/skills/git-logo.webp";
import FIGMA from "../assets/images/skills/figma-logo.webp";
import Teamwork from "../assets/images/skills/teamwork.svg";
import Adaptability from "../assets/images/skills/adaptability-skill.svg";
import Cognition from "../assets/images/skills/cognition.svg";
import Agile from "../assets/images/skills/agile-management.webp";
/** @jsxImportSource theme-ui */

const technicalSkills = [
  { name: "HTML5", icon: HTML5 },
  { name: "CSS3", icon: CSS3 },
  { name: "JavaScript", icon: JS },
  { name: "TypeScript", icon: Typescript },
  { name: "React", icon: REACT },
  { name: "Next.js", icon: NextJs },
  { name: "PostgreSQL", icon: PostgreSQL},
  { name: "Firebase", icon: FIREBASE },
  { name: "Git", icon: GIT },
  { name: "Figma", icon: FIGMA },
];

const professionalSkills = [
  { name: "Problem Solving", icon: Cognition },
  { name: "Collaboration", icon: Teamwork },
  { name: "Agile Delivery", icon: Agile },
  { name: "Adaptability", icon: Adaptability },
  { name: "Product Thinking" },
  { name: "Communication" },
];

const SkillCard = ({ name, icon }) => (
  <li className="about__skill-card">
    {icon ? (
      <span className="about__skill-icon">
        <Avatar image={icon} alt={`${name} logo`} style={{ width: "100%", height: "100%" }} />
      </span>
    ) : (
      <span className="about__skill-icon about__skill-icon--text" aria-hidden="true">
        {name
          .split(" ")
          .map((w) => w[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()}
      </span>
    )}
    <span className="about__skill-name">{name}</span>
  </li>
);

const Background = () => {
  return (
    <main className="app">
      <Helmet>
        <title>About | Elue Michael</title>
        <meta
          name="description"
          content="Technical and professional background, core skills, and engineering strengths."
        />
      </Helmet>

      <section
        sx={{ backgroundColor: "background", color: "text" }}
        className="about"
        aria-label="About Elue Michael"
      >
        <div className="about__container">
          <header className="about__header">
            <p className="about__eyebrow">About</p>
            <h1 className="about__title">
              Building reliable products with clean frontend architecture.
            </h1>
            <p className="about__intro">
              I'm a front-end software engineer with a passion for crafting engaging web experiences. I specialize in React and modern JavaScript tooling, with a strong focus on accessibility, performance, and clean code. I thrive on solving complex problems and collaborating with teams to ship high-quality software.
            </p>
          </header>

          <section className="about__profile" aria-label="Profile summary">
            <div className="about__image-wrap">
              <div className="about__image-ring">
                <Avatar
                  image={myAvatar}
                  alt="Elue Michael portrait"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <span className="about__status">Open to opportunities</span>
            </div>

            <div className="about__bio">
              <h2>What I focus on</h2>
              <p>
                I build accessible, performant web applications with React and modern frontend tooling. I care deeply about product quality: accessibility, performance, developer experience, and clear communication with teammates and stakeholders.
              </p>
              <p>
                With a background in frontend development and a passion for learning, I am always excited to take on new challenges and expand my skill set. I am currently focused on mastering TypeScript and exploring the latest advancements in React and web development.
              </p>
            </div>
          </section>

          <section className="about__skills-section" aria-label="Technical skills">
            <div className="about__section-head">
              <h2>Technical Skills</h2>
              <p>A snapshot of my core technical skills and the tools I use to build web applications.</p>
            </div>
            <ul className="about__skills-grid">
              {technicalSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </ul>
          </section>

          <section className="about__skills-section" aria-label="Professional skills">
            <div className="about__section-head">
              <h2>Professional Strengths</h2>
              <p>
                Beyond technical skills, I bring strong problem-solving abilities, effective communication, and a collaborative mindset to every project. I thrive in agile environments and am always eager to learn and grow as an engineer.
              </p>
            </div>
            <ul className="about__skills-grid about__skills-grid--soft">
              {professionalSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Background;