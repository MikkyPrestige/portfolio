import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import projects from "../data/projects";
/** @jsxImportSource theme-ui */

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="app">
        <section className="project-detail margin-top-5">
          <h1>Project not found</h1>
          <Link to="/projects">Back to Projects</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="app">
      <Helmet>
        <title>{project.title} | Case Study</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <section
        className="project-detail margin-top-5"
        sx={{ backgroundColor: "background", color: "text" }}
      >
        <Link to="/projects" className="project-detail__back">
          <FaArrowLeft /> Back to Projects
        </Link>

        <header className="project-detail__header">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </header>

        <div className="project-detail__hero">
          <img src={project.image} alt={project.title} />
        </div>

        <section className="project-detail__stack">
          <h2>Tech Stack</h2>
          <div>
            {project.stack?.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="project-detail__case">
          <h2>Case Study</h2>
          <p>{project.caseStudy?.problem || "Problem statement coming soon."}</p>
          <p>{project.caseStudy?.solution || "Solution details coming soon."}</p>
          <p>{project.caseStudy?.impact || "Impact metrics coming soon."}</p>
        </section>

        <div className="project-detail__links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project--card__links__link github-link-bg"
          >
            <FaGithub style={{ color: "#000" }} />
            View on GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project--card__links__link live-link-bg blue-markup"
          >
            <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
            View Live
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;