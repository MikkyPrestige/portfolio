import React, { useState, useEffect, useRef, useCallback  } from "react";
import { Link } from "react-router-dom";
import Avatar from "../avatar";
import Play from "../../assets/images/play.svg";
import Pause from "../../assets/images/pause.svg";
import { FaForward, FaBackward, FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
/** @jsxImportSource theme-ui */

const ProjectSlider = ({ projects = [], autoPlay = false, slideInterval = 5000 }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);

  const hasProjects = projects.length > 0;
  const active = hasProjects ? projects[currentProject] : null;

  const handleNextSlide = useCallback(() => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, [projects.length]);

  const handlePreviousSlide = useCallback(() => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, [projects.length]);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Autoplay logic
  useEffect(() => {
    if (!hasProjects || !isPlaying) return;
    intervalRef.current = setInterval(handleNextSlide, slideInterval);
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, slideInterval, handleNextSlide, hasProjects]);

    // Keyboard navigation (arrow keys)
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePreviousSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNextSlide();
    }
  };

  if (!hasProjects) {
    return (
      <section className="project-slider">
        <p className="project-slider__empty">No featured projects yet.</p>
      </section>
    );
  }

  return (
    <section
      className="project-slider"
      ref={sliderRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Featured projects slider"
      sx={{ backgroundColor: "background", color: "text" }}
    >
        <article className="project-slider__card">
          <div className="project-slider__media">
            <Avatar
              image={active.image}
              alt={active.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

        <Fade duration={500} key={currentProject}>
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
          </Fade>
        </article>

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