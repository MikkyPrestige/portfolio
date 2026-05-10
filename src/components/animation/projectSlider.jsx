import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Avatar from "../avatar";
import Play from "../../assets/images/play.svg";
import Pause from "../../assets/images/pause.svg";
import { FaForward, FaBackward, FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const ProjectSlider = ({ projects = [], autoPlay = false, slideInterval = 5000 }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const intervalRef = useRef(null);

  const hasProjects = projects.length > 0;
  const active = hasProjects ? projects[currentProject] : null;

  const handleNextSlide = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePreviousSlide = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (!hasProjects) return;

    if (isPlaying) {
      intervalRef.current = setInterval(handleNextSlide, slideInterval);
    }

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, slideInterval, currentProject, hasProjects]);

  if (!hasProjects) {
    return (
      <section className="project-slider">
        <p className="project-slider__empty">No featured projects yet.</p>
      </section>
    );
  }

  return (
    <section className="project-slider" sx={{ backgroundColor: "background", color: "text" }}>
      <Fade duration={900} triggerOnce>
        <article className="project-slider__card">
          <div className="project-slider__media">
            <Avatar
              image={active.image}
              alt={active.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="project-slider__content">
            <h3 className="project-slider__title">{active.title}</h3>
            <p className="project-slider__desc">{active.description}</p>

            <div className="project-slider__chips">
              {active.stack?.map((tech) => (
                <span key={tech} className="project-slider__chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-slider__actions">
              <Link to={`/projects/${active.slug}`} className="project-slider__btn project-slider__btn--primary">
                Case Study
              </Link>

              <a
                href={active.live || active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-slider__btn project-slider__btn--ghost"
              >
                Live Demo
              </a>

              <a
                href={active.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-slider__icon-btn"
                aria-label={`Open ${active.title} GitHub repository`}
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </article>
      </Fade>

      <div className="project-slider__controls">
        <button
          className="project-slider__control-btn"
          onClick={handlePreviousSlide}
          aria-label="Go to previous project"
        >
          <FaBackward />
        </button>

        <button
          className="project-slider__control-btn project-slider__control-btn--play"
          onClick={handlePlayPause}
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isPlaying ? (
            <Avatar image={Pause} alt="Pause" style={{ width: "2rem", height: "2rem" }} />
          ) : (
            <Avatar image={Play} alt="Play" style={{ width: "2rem", height: "2rem" }} />
          )}
        </button>

        <button
          className="project-slider__control-btn"
          onClick={handleNextSlide}
          aria-label="Go to next project"
        >
          <FaForward />
        </button>
      </div>

      {projects.length > 1 && (
  <div className="project-slider__pagination">
    {projects.map((project, index) => (
      <button
        key={project.slug || index}
        aria-label={`Go to ${project.title} slide`}
        className={`project-slider__dot ${currentProject === index ? "active" : ""}`}
        onClick={() => setCurrentProject(index)}
      />
    ))}
    <span className="project-slider__counter">
      {currentProject + 1} / {projects.length} — {active.title}
    </span>
  </div>
)}
    </section>
  );
};

export default ProjectSlider;