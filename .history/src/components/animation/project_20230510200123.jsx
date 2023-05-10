import React from "react";
import ProjectSlider from "./projectSlider";
import TipCalculator from "../../assets/images/projects/tip-calculator.jpeg";
import Phonie from "../../assets/images/projects/phonieApp.jpeg";
import Natours from "../../assets/images/projects/natours.jpeg";
import RandomPeople from "../../assets/images/projects/randomApp.jpeg";
import Trillo from "../../assets/images/projects/trillo.jpeg";
import ChatAppCss from "../../assets/images/projects/chatAppCss.jpeg";
import RepoDisplay from "../../assets/images/projects/github-repo.jpeg";
import Task from "../../assets/images/projects/task-tracker.jpeg";
import Clicks from "../../assets/images/projects/clicks.jpeg";
import Duplicate from "../../assets/images/projects/duplicate.jpeg";
import HangPanda from "../../assets/images/projects/hangman.jpeg";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const Project = [
  {
    title: "HangPanda",
    description:
      "A simple task tracker app that allows users to add, delete and edit tasks.",
    image: Task,
    link: "https://task-tracker.ntec.app/",
  },
  {
    title: "Task Tracker",
    description:
      "A simple task tracker app that allows users to add, delete and edit tasks.",
    image: Task,
    link: "https://task-tracker.ntec.app/",
  },
  {
    title: "GitHub Repository",
    description:
      "A simple web app that displays a user's GitHub repositories and also search for gitHub repo's with gitHun usernames",
    image: RepoDisplay,
    link: "https://github-repos-display.vercel.app/",
  },
  {
    title: "Tip Calculator",
    description:
      "A simple tip calculator that calculates the tip amount and total bill amount based on the bill amount and tip percentage entered by the user.",
    image: TipCalculator,
    link: "https://mikky-tip-calculator.vercel.app/",
  },
  {
    title: "Clicks",
    description:
      "A simple web app that counts the number of clicks on a button and show the location it was clicked from on a map.",
    image: Clicks,
    link: "https://chasing-d-clicks.vercel.app/",
  },
  {
    title: "Phonie App",
    description:
      "A web-based application created by the team 'Phantom_Devz' that determines the telecom carrier based on a phone number entered by the use",
    image: Phonie,
    link: "https://phantom-devz-phonie.netlify.app/",
  },
  {
    title: "Duplicate Removal",
    description: "A simple web app that removes duplicate characters.",
    image: Duplicate,
    link: "https://duplicate-removal.vercel.app/",
  },
  {
    title: "Natours Tour",
    description:
      "A simple landing page for a fictional company that offers tours to the wilderness.",
    image: Natours,
    link: "https://natour-landing-page.netlify.app/",
  },
  {
    title: "ChatApp Css",
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
    title: "Trillo Hotel",
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
    <section className="project--slider">
      <header className="project--slider__wrapper">
        <h1 className="project--slider__wrapper__head">
          <span className="project--slider__wrapper__head--span">#</span>
          Projects{" "}
          <span className="project--slider__wrapper__head--line">{""}</span>
        </h1>
        <div className="project--slider__wrapper__view">
          <Link to="/projects" className="project--slider__wrapper__view--link">
            View all
            <FaArrowCircleRight className="project--slider__wrapper__view--link--icon" />
          </Link>
        </div>
      </header>
      <ProjectSlider
        projects={Project}
        onNextSlide={handleNextSlide}
        onPreviousSlide={handlePreviousSlide}
        autoPlay={true}
        slideInterval={8000}
      />
    </section>
  );
};

export default ProjectSlide;
