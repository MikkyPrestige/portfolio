import React from "react";
import ProjectSlider from "./projectSlider";
import HospitoFind from "../../assets/images/projects/hospitoFind.jpeg";
import Laundry from "../../assets/images/projects/laundry.jpeg";
import LawFirm from "../../assets/images/projects/law-firm.jpeg";
import TipCalculator from "../../assets/images/projects/tip-calculator.jpeg";
import Phonie from "../../assets/images/projects/phonieApp.jpeg";
import GitFolio from "../../assets/images/projects/gitFolio.jpeg";
import Task from "../../assets/images/projects/task-tracker.jpeg";
import HangPanda from "../../assets/images/projects/hangman.jpeg";
import StringRefine from "../../assets/images/projects/stringRefine.jpeg";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const Project = [
  {
    title: "HospitoFind",
    image: HospitoFind,
    link: "https://hospitofind.netlify.app",
  },
  {
    title: "Machala Laundry",
    image: Laundry,
    link: "https://machalalaundryservice.com",
  },
  {
    title: "PrestigeEnigma Advocates",
    image: LawFirm,
    link: "https://law-firm-website-seven.vercel.app",
  },
  {
    title: "HangPanda",
    image: HangPanda,
    link: "https://hangman.ntec.app",
  },
  {
    title: "Tip Calculator",
    image: TipCalculator,
    link: "https://mikky-tip-calculator.vercel.app",
  },
  {
    title: "Phonie App",
    image: Phonie,
    link: "https://phantom-devz-phonie.netlify.app",
  },
  {
    title: "GitFolio",
    image: GitFolio,
    link: "https://gitfoliohub.vercel.app",
  },
  {
    title: "Task Tracker",
    image: Task,
    link: "https://task-tracker.ntec.app",
  },
  {
    title: "StringRefine",
    image: StringRefine,
    link: "https://stringrefine.vercel.app",
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
