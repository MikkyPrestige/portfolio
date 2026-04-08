import React from "react";
import SEO  from "../components/seo";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
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
      <div
        sx={{
          backgroundColor: "background",
          color: "text",
        }}
        className="project margin-top-5"
      >
        <header>
          <h1 className="project--title">My Works</h1>
        </header>

        <section className="project--wrapper">
  {projects.map((project) => (
    <Fade direction="left" duration={1500} key={project.slug}>
      <div className="project--card">
        <figure className="project--card__side project--card__side__front">
          <div className="project--card__bg">
            <div className={`project--card__bg--img ${project.bgClass}`}></div>
          </div>
          <figcaption className="project--card__frame">
            {project.stack.map((item) => (
              <span key={item} className="project--card__frame__item">
                {item}
              </span>
            ))}
          </figcaption>
        </figure>

        <article className="project--card__side project--card__side__back">
          <div className="project--card__content">
            <header>
              <h2 className="project--card__content__title margin-top">
                {project.title}
              </h2>
            </header>
            <p className="project--card__content__desc">{project.description}</p>
          </div>

          <div className="project--card__links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project--card__links__link github-link-bg"
            >
              <FaGithub style={{ color: "#000" }} />
              GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
              Demo
            </a>
            <Link
              to={`/projects/${project.slug}`}
              className="project--card__links__link"
        >
              Case Study
              </Link>
          </div>
        </article>
      </div>
    </Fade>
  ))}
</section>
      </div>
    </main>
  );
};

export default Projects;
