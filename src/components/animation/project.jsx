import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProjectSlider from "./projectSlider";
import projects from "../../data/projects";

const ProjectSlide = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="project-showcase" aria-label="Featured projects">
      <header className="project-showcase__header">
        <div>
          <p className="project-showcase__eyebrow">Portfolio</p>
          <h2 className="project-showcase__title">Featured Projects</h2>
        </div>

        <Link to="/projects" className="project-showcase__view-all">
          View all projects <FaArrowRight />
        </Link>
      </header>

      <ProjectSlider projects={featuredProjects} autoPlay={true} slideInterval={5000} />
    </section>
  );
};

export default ProjectSlide;