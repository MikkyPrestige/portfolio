import { React, useState, useEffect, useRef } from "react";

const ProjectSlider = ({ projects, autoPlay = false, slideInterval = 3000, onNextSlide }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);
  const slideRef = useRef(null);

  // FUNCTION TO HANDLE NEXT SLIDE
  const handleNextSlide = () => {
  setCurrentProject(currentProject === projects.length - 1 ? 0 : currentProject + 1);
}

// FUNCTION TO HANDLE PREVIOUS SLIDE
const handlePreviousSlide = () => {
  setCurrentProject(currentProject === 0 ? projects.length - 1 : currentProject - 1);
}

// FUNCTION TO HANDLE PAUSE
const handlePause = () => {
  setIsPlaying(false);
}

// FUNCTION TO HANDLE PLAY
const handlePlay = () => {
  setIsPlaying(true);
}

// FUNCTION TO HANDLE HOVER
const handleHover = () => {
  setIsHovered(true);
}

// FUNCTION TO HANDLE HOVER
const handleLeave = () => {
  setIsHovered(false);
}

useEffect(() => {
  if (isPlaying) {
    slideRef.current = setInterval(() => {
      handleNextSlide();
    }, slideInterval);
  } else {
    clearInterval(slideRef.current);
  }
  return () => clearInterval(slideRef.current);
}, [ isPlaying, slideInterval, currentProject, projects.length, handleNextSlide ]);

useEffect(() => {
  if (onNextSlide) {
    onNextSlide(currentProject);
  }
}, [currentProject, onNextSlide]);
})

return (
  <div className="projectSlider">
    <div className="projectSlider--contents">
      <div className="projectSlider--contents__img">
        <img src={projects[currentProject].img} alt={projects[currentProject].title} />
      </div>
      <div className="projectSlider--contents__details">
          <h2 className="projectSlider--contents__details--title">{projects[currentProject].title}</h2>
          <p className="projectSlider--contents__details--desc">{projects[currentProject].description}</p>
          <div className="projectSlider--contents__details--links">
            <a href={projects[currentProject].link} target="_blank" rel="noreferrer" className="projectSlider--contents__details--links__link">View Project</a>
            <a href={projects[currentProject].github} target="_blank" rel="noreferrer" className="projectSlider--contents__details--links__link">View Code</a>
          </div>
      </div>
    </div>
    <div className="projectSlider--controls">
      <button className="projectSlider--controls__prev" onClick={handlePreviousSlide}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="portfolio-slider__play-pause" onClick={handlePlayPause}>
        {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
      </button>
      <button className="projectSlider--controls__next" onClick={handleNextSlide}>
        <i className="fas fa-chevron-right"></i>
        </button>
    </div>
    {projects.length > 1 && (
      <div className="projectSlider--pagination">
        {projects.map((project, index) => (
          <button
            key={index}
            className={`projectSlider--pagination__dot ${currentProject === index ? "active" : ""}`}
            onClick={() => setCurrentProject(index)}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            {/* {i + 1} */}
            {isHovered && <span className="projectSlider--pagination__dot--tooltip">{project.title}</span>}
          </button>
        ))}
  </div>
)}
</div>
);
};

export default ProjectSlider;
