import React from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import ProjectSlider from "./projectSlider";
import projects from "../../data/projects";

const ProjectSlide = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  const handleNextSlide = () => {};
  const handlePreviousSlide = () => {};

  return (
    <section className="project--slider">
      <header className="project--slider__wrapper">
        <h1 className="project--slider__wrapper__head">
          <span className="project--slider__wrapper__head--span">#</span>
          Projects{" "}
          <span className="project--slider__wrapper__head--line">{""}</span>
        </h1>
        <div className="project--slider__wrapper__view">
          <Link to="/projects" className="project--slider__wrapper__view--link">
            View all
            <FaArrowCircleRight className="project--slider__wrapper__view--link--icon" />
          </Link>
        </div>
      </header>

      <ProjectSlider
        projects={featuredProjects}
        onNextSlide={handleNextSlide}
        onPreviousSlide={handlePreviousSlide}
        autoPlay={true}
        slideInterval={5000}
      />
    </section>
  );
};

export default ProjectSlide;