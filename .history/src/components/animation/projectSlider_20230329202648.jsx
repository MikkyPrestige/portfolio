import { React, useState, useEffect, useRef } from "react";
import Forward from "../../assets/images/forward.svg";
import Backward from "../../assets/images/back.svg";
import Play from "../../assets/images/play.svg";
import Pause from "../../assets/images/pause.svg";
// import Right from "../../assets/images/right.svg";

const ProjectSlider = ({
  projects,
  autoPlay = false,
  slideInterval = 3000,
  onNextSlide,
}) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const slideRef = useRef(null);

  // FUNCTION TO HANDLE NEXT SLIDE
  const handleNextSlide = () => {
    setCurrentProject(
      currentProject === projects.length - 1 ? 0 : currentProject + 1
    );
  };

  // FUNCTION TO HANDLE PREVIOUS SLIDE
  const handlePreviousSlide = () => {
    setCurrentProject(
      currentProject === 0 ? projects.length - 1 : currentProject - 1
    );
  };

  // FUNCTION TO HANDLE PLAY/PAUSE
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // FUNCTION TO HANDLE HOVER
  const handleHover = () => {
    setIsHovered(true);
  };

  // FUNCTION TO HANDLE HOVER
  const handleLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (isPlaying) {
      slideRef.current = setInterval(() => {
        setCurrentProject(
          currentProject === projects.length - 1 ? 0 : currentProject + 1
        );
      }, slideInterval);
    } else {
      clearInterval(slideRef.current);
    }
    return () => clearInterval(slideRef.current);
  }, [isPlaying, slideInterval, currentProject, projects.length]);

  useEffect(() => {
    if (onNextSlide) {
      onNextSlide(currentProject);
    }
  }, [currentProject, onNextSlide]);

  return (
    <div className="projectSlider">
      <div className="projectSlider--contents">
        <div className="projectSlider--contents__container">
          <img
            src={projects[currentProject].image}
            alt={projects[currentProject].title}
            className="projectSlider--contents__container--img"
          />
        </div>
        <div className="projectSlider--contents__details">
          <h2 className="projectSlider--contents__details--title">
            {projects[currentProject].title}
          </h2>
          {/* <p className="projectSlider--contents__details--desc">
            {projects[currentProject].description}
          </p> */}
          <a
            href={projects[currentProject].link}
            target="_blank"
            rel="noreferrer"
            className="projectSlider--contents__details--link"
          >
            View Project
          </a>
        </div>
      </div>
      <div className="projectSlider--controls">
        <button
          className="projectSlider--controls__btn"
          onClick={handlePreviousSlide}
        >
          <img
            src={Backward}
            alt="Backward Icon"
            className="projectSlider--controls__btn--img"
          />
        </button>
        <button
          className="projectSlider--controls__btn"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <img
              src={Pause}
              alt="Pause Icon"
              className="projectSlider--controls__btn--img"
            />
          ) : (
            <img
              src={Play}
              alt="Play Icon"
              className="projectSlider--controls__btn--img"
            />
          )}
        </button>
        <button
          className="projectSlider--controls__btn svgSize"
          onClick={handleNextSlide}
        >
          <img
            src={Forward}
            alt="Forward Icon"
            className="projectSlider--controls__btn--img"
          />
        </button>
      </div>
      {projects.length > 1 && (
        <div className="projectSlider--pagination">
          {projects.map((project, index) => (
            <button
              key={index}
              className={`projectSlider--pagination__dot ${
                currentProject === index ? "active" : ""
              }`}
              onClick={() => setCurrentProject(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              {hoveredIndex === index && (
                // Display tooltip for the only for particular dot hover up
                <span className="projectSlider--pagination__dot--tooltip">
                {/* {project.title}  */}
                {projects[currentProject].title}
              </span>
              )}
            </button>
          ))}
          {/* {
            // Display tooltip for the only for particular dot hover up
            isHovered && (
              <span className="projectSlider--pagination__dot--tooltip">
                {projects[currentProject].title}
              </span>
            )
          } */}
        </div>
      )}
    </div>
  );
};

export default ProjectSlider;
