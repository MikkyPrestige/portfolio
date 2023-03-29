import { React, useState, useEffect, useRef } from "react";

const ProjectSlider = ({ projects, autoPlay = false, slideInterval = 3000 }) => {
  const [curentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);
  const slideRef = useRef(null);

}