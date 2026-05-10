import React from "react";
import SEO from "../components/seo";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import projects from "../data/projects";
/** @jsxImportSource theme-ui */

const Projects = () => {
  return (
    <main className="app">
      <SEO
        title="Projects | Elue Michael"
        description="Selected software engineering projects, case studies, and live demos."
        canonical="https://michaelelue.netlify.app/projects"
      />

      <section
        sx={{
          backgroundColor: "background",
          color: "text",
        }}
        className="project margin-top-5"
      >
        <header className="project--header">
          <p className="project--header__eyebrow">Portfolio</p>
          <h1 className="project--title">Selected Projects</h1>
          <p className="project--header__intro">
            Here are some of the projects I've worked on, showcasing my skills in React, TypeScript, modern frontend development and practical full-stack execution.. Each project includes a case study detailing the problem, solution, and impact.
          </p>
        </header>

        <section className="project--wrapper">
          {projects.map((project, index) => (
            <Fade
              direction="up"
              duration={900}
              triggerOnce
              delay={index * 40}
              key={project.slug}
            >
              <article className="project--card">
                <figure className="project--card__media">
                  <div className={`project--card__bg--img ${project.bgClass}`} />
                </figure>

                <div className="project--card__body">
                  <header className="project--card__content">
                    <h2 className="project--card__content__title">{project.title}</h2>
                    <p className="project--card__content__desc">{project.description}</p>
                  </header>

                  <div className="project--card__frame" aria-label={`${project.title} technology stack`}>
                    {project.stack.map((item) => (
                      <span key={item} className="project--card__frame__item">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="project--card__links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project--card__links__link project--card__links__link--github"
                    >
                      <FaGithub />
                      View Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project--card__links__link project--card__links__link--demo"
                    >
                      <FaExternalLinkAlt />
                      View Live
                    </a>

                    <Link
                      to={`/projects/${project.slug}`}
                      className="project--card__links__link project--card__links__link--case"
                    >
                      Case Study
                    </Link>
                  </div>
                </div>
              </article>
            </Fade>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Projects;