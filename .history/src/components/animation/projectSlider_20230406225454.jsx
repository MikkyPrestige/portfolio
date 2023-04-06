import { React, useState, useEffect, useRef } from "react";
import Avatar from "../avatar";
// import Forward from "../../assets/images/forward.svg";
// import Backward from "../../assets/images/back.svg";
import Play from "../../assets/images/play.svg";
import Pause from "../../assets/images/pause.svg";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const ProjectSlider = ({
  projects,
  autoPlay = false,
  slideInterval = 3000,
  onNextSlide,
}) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState("");
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
      <Fade duration={5000} direction="right">
        <div className="projectSlider--contents">
          <div className="projectSlider--contents__container">
            <Avatar
              image={projects[currentProject].image}
              alt={projects[currentProject].title}
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid #ededed",
                borderRadius: "1rem",
                objectFit: "cover",
              }}
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
      </Fade>
      <Fade direction="left" duration={5000}>
        <div className="projectSlider--controls">
          <button
            className="projectSlider--controls__btn"
            onClick={handlePreviousSlide}
          >
            <FaBackward style={{ width: "100%", height: "100%", fill: "rgba(255, 0, 0, 0.5)" }} />
          </button>
          <button
            className="projectSlider--controls__btn"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <Avatar
                image={Pause}
                alt="Pause Icon"
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <Avatar
                image={Play}
                alt="Play Icon"
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </button>
          <button
            className="projectSlider--controls__btn"
            onClick={handleNextSlide}
          >
            <FaForward style={{ width: "100%", height: "100%", fill: "#1D976C" }} />
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
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(-1)}
              >
                {isHovered === index && (
                  // Display tooltip for the only for particular dot hovered on
                  <span className="projectSlider--pagination__dot--tooltip">
                    {project.title}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </Fade>
    </div>
  );
};

export default ProjectSlider;
