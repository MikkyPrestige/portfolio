import React from "react";
import Avatar from "./avatar";
import Skills from "../assets/images/skills/skill";
import HTML5 from "../assets/images/skills/html";
import CSS3 from "../assets/images/skills/css";
import SASS from "../assets/images/skills/sass";
import JS from "../assets/images/skills/js";
// import { GiSkills } from "react-icons/gi";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { FaSass } from "react-icons/fa";
// import { FaJs } from "react-icons/fa";
// import { DiGit } from "react-icons/di";
// import { FaReact } from "react-icons/fa";
// import { FaVuejs } from "react-icons/fa";
// import { FaFigma } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="about--wrapper">
        <div className="about--desc">
          <div className="about--img">
            <p className="about--img__content1"> </p>
            <p className="about--img__content2"> </p>
          </div>
          <div className="about--content">
            <div className="about--content__title">
              <h1 className="about--content__title__head">
                <span className="about--content__title__span">/</span>About-Me
              </h1>
              <p className="about--content__title__subhead">Who am i?</p>
            </div>
            <div className="about--content__text">
              <h2 className="about--content__text__head">
                Hi, I'm{" "}
                <span className="about--content__text__head__name">Elue</span>!
              </h2>
              <p className="about--content__text__desc">
                I am a motivated and passionate frontend developer currently
                pursuing a diploma in Software Engineering at AltSchool Africa.{" "}
                <br /> I've have gained experience in HTML, CSS, and JavaScript,
                as well as exposure to frameworks such as React and Vue. I am
                eager to continue my education and apply my knowledge in a
                professional setting. <br /> As an intern or entry-level
                developer, I am dedicated to delivering clean and efficient
                code, effectively collaborating with my team, and constantly
                striving for growth and improvement. I am excited about the
                opportunity to contribute to a company's success while also
                further developing my skills in a dynamic and supportive
                environment.
              </p>
            </div>
          </div>
        </div>
        <div className="about--skills">
          <div className="about--skills__title">
            <h1 className="about--skills__title__head">
              My skills{" "}
              <span className="about--skills__title__icon">
                {/* <GiSkills style={{ color: "#228be6" }} /> */}
              </span>
            </h1>
          </div>
          <div className="about--skills__content">
            <div className="about--skills__content__items">
              <div className="about--skills__content__items__card">
                <div className="about--skills__content__items__card__icon">
                  {/* <FaHtml5 style={{ color: "#dd4b25" }} /> */}
                </div>
                <h2 className="about--skills__content__items__card__text">
                  HTML5
                </h2>
              </div>
              <div className="about--skills__content__items__card">
                <div className="about--skills__content__items__card__icon">
                  {/* <FaCss3Alt style={{ color: "#254bdd" }} /> */}
                </div>
                <h2 className="about--skills__content__items__card__text">
                  CSS3
                </h2>
              </div>
              <div className="about--skills__content__items__card">
                <div className="about--skills__content__items__card__icon">
                  {/* <FaSass style={{ color: "#cc6699" }} /> */}
                </div>
                <h2 className="about--skills__content__items__card__text">
                  SCSS
                </h2>
              </div>
              <div className="about--skills__content__items__card">
                <div className="about--skills__content__items__card__icon">
                  {/* <FaJs style={{ color: "#e8d44d" }} /> */}
                </div>
                <h2 className="about--skills__content__items__card__text">
                  JavaScript
                </h2>
              </div>
              <div className="about--skills__content__items__card">
                <div className="about--skills__content__items__card__icon">
                  {/* <DiGit style={{ color: "#e84d31" }} /> */}
                </div>
                <h2 className="about--skills__content__items__card__text">
                  Git
                </h2>
              </div>
              <div className="about--skills__content__items__card">
                <div className="about--skills__content__items__card__icon">
                  {/* <FaReact style={{ color: "#67def3" }} /> */}
                </div>
                <h2 className="about--skills__content__items__card__text">
                  React
                </h2>
              </div>
              <div className="about--skills__content__items__card">
                <div className="about--skills__content__items__card__icon">
                  {/* <FaVuejs style={{ color: "#3fb27f" }} /> */}
                </div>
                <h2 className="about--skills__content__items__card__text">
                  Vue
                </h2>
              </div>
              <div className="about--skills__content__items__card">
                <div className="about--skills__content__items__card__icon">
                  {/* <FaFigma style={{ color: "#cc4600" }} /> */}
                </div>
                <h2 className="about--skills__content__items__card__text">
                  Figma
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
