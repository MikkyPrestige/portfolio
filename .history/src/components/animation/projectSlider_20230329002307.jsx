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
}