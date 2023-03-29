import React from "react";
import ProjectSlider from "./projectSlider";
import TipCalculator from "../../assets/images/projects/tip-calculator.jpeg";
import Phonie from "../../assets/images/projects/phonieApp.jpeg";
import Natours from "../../assets/images/projects/natours.jpeg";
import RandomPeople from "../../assets/images/projects/randomApp.jpeg";
import Trillo from "../../assets/images/projects/trillo.jpeg";
import ChatAppCss from "../../assets/images/projects/chatAppCss.jpeg";
import RepoDisplay from "../../assets/images/projects/repoApp.jpeg";

const Project = [
  {
    title: "Phonie App",
    description:
      "A web-based application created by the team 'Phantom_Devz' that determines the telecom carrier based on a phone number entered by the use",
    image: Phonie,
    link: "https://phantom-devz-phonie.netlify.app/",
  },
  {
    title: "Tip Calculator",
    description:
      "A simple tip calculator that calculates the tip amount and total bill amount based on the bill amount and tip percentage entered by the user.",
    image: TipCalculator,
    link: "https://mikky-tip-calculator.vercel.app/",
  },
  {
    title: "Natours",
    description: "A simple landing page for a fictional company that offers tours to the wilderness.",
    image: Natours,
    link: "https://natour-landing-page.netlify.app/",
  },
  {
    title: "GitHub Repository Display",
    description: "A simple web app that displays a user's GitHub repositories and also search for gitHub repo's with gitHun usernames",
    image: RepoDisplay,
    link: "https://github-repos-display.vercel.app/",
  },
  {
    title: "Chat App Css Illustration",
    description: "A simple chat app illustration created with CSS.",
    image: ChatAppCss,
    link: "https://chat-app-css-project.netlify.app/",
  },
  {
    title: "Random People",
    description: "A simple web app that displays random people's information.",
    image: RandomPeople,
    link: "https://randompeopleapp.vercel.app",
  },
  {
    title: "Trillo",
    description: "A simple landing page for a fictional Hotel residency.",
    image: Trillo,
    link: "https://fantastic-crostata-3e9a02.netlify.app/",
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
      <div className="project--slider">
          <h1 className="project--slider__head">Projects</h1>
            <ProjectSlider
              projects={Project}
              onNextSlide={handleNextSlide}
              onPreviousSlide={handlePreviousSlide}
              autoPlay={true}
              slideInterval={5000}
            />
      </div>
  );
};

export default ProjectSlide;
