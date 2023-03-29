import { React, useState, useEffect, useRef } from "react";

const ProjectSlider = ({ projects, autoPlay = false, slideInterval = 3000 }) => {
  const [curentProject, setCurrentProject] = useState(0);
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

return (
  <div className="projectSlider">
    <div className="projectSlider--contents">
      <div className="projectSlider--contents__img">
        <img src={projects[currentProject].img} alt="Project Image" />
      </div>