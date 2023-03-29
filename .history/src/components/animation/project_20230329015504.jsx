import React from "react";
import ProjectSlider from "./projectSlider";
import TipCalculator from "../../assets/images/projects/tip-calculator.jpeg";
import Phonie from "../../assets/images/projects/phonieApp.jpeg";
import Natours from "../../assets/images/projects/natours.jpeg";
import RandomPeople from "../../assets/images/projects/randomApp.jpeg";
import Trillo from "../../assets/images/projects/trillo.jpeg";
import ChatAppCss from "../../assets/images/projects/chatAppCss.jpeg";

const Project = [
  {
    title: "Phonie App",
    description:
      "A web-based application created by the team 'Phantom_Devz' that determines the telecom carrier based on a phone number entered by the use",
    image: Phonie,
    link: "https://phonie-app.netlify.app/",
  },
  {
    title: "Tip Calculator",
    description:
      "A simple tip calculator that calculates the tip amount and total bill amount based on the bill amount and tip percentage entered by the user.",
    image: TipCalculator,
    link: "https://tip-calculator-app.netlify.app/",
  },
  {
    title: "Natours",
    description:
      "A simple landing page for a fictional company that offers tours to the wilderness.",
    image: Natours,
    link: "https://natours-app.netlify.app/",
  },
  {
    title: "Chat App Css Illustration",
    description: "A simple chat app illustration created with CSS.",
    image: ChatAppCss,
    link: "https://chat-app-css-illustration.netlify.app/",
  },
  {
    title: "Random People",
    description: "A simple web app that displays random people's information.",
    image: RandomPeople,
    link: "https://random-people-app.netlify.app/",
  },
  {
    title: "Trillo",
    description: "A simple landing page for a fictional Hotel residency.",
    image: Trillo,
    link: "https://trillo-app.netlify.app/",
  },
];

const ProjectSlide = () => {
  const handleNextSlide = (currentSlideIndex) => {
    // console.log(`Slider moved to slide ${currentSlideIndex + 1}`);
  };

  const handlePreviousSlide = (currentSlideIndex) => {
    // console.log(`Slider moved to slide ${currentSlideIndex - 1}`);
  };

  return (
    <div className="project">
      <div className="project--slider">
        <div className="project--slider__title">
          <h1>Projects</h1>
        </div>
        <div className="project--slider__container">
            <ProjectSlider
              projects={Project}
              onNextSlide={handleNextSlide}
              onPreviousSlide={handlePreviousSlide}
              autoPlay={true}
              slideInterval={5000}
            />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
