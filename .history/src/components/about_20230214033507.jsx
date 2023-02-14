import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
// import { TbBrandSass } from"react-icons/tb";
import { FaJs } from "react-icons/fa";
import { DiGit } from ".react-icons/d"
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";


const AboutMe = () => {
  return (
    <div className="about">
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
              developer, I am dedicated to delivering clean and efficient code,
              effectively collaborating with my team, and constantly striving
              for growth and improvement. I am excited about the opportunity to
              contribute to a company's success while also further developing my
              skills in a dynamic and supportive environment.
            </p>
          </div>
        </div>
      </div>
      <div className="about--skills">
        <div className="about--skills__title">
          <h1 className="about--skills__title__head">My skills</h1>
        </div>
        <div className="about--skills__content">
          <div className="about--skills__content__item">
            <div className="about--skills__content__item__icon">
            <FaHtml5 />
            </div>
            <div className="about--skills__content__item__text">
              <h2 className="about--skills__content__item__text__head">HTML5</h2>
            </div>
          </div>
          <div className="about--skills__content__item">
            <div className="about--skills__content__item__icon">
            <FaCss3Alt />
            </div>
            <div className="about--skills__content__item__text">
              <h2 className="about--skills__content__item__text__head">CSS3</h2>
            </div>
          </div>
          <div className="about--skills__content__item">
            <div className="about--skills__content__item__icon">
            <FaSass />
            </div>
            <div className="about--skills__content__item__text">
              <h2 className="about--skills__content__item__text__head">
                SCSS
              </h2>
            </div>
          </div>
          <div className="about--skills__content__item">
            <div className="about--skills__content__item__icon">
            <FaJs />
            </div>
            <div className="about--skills__content__item__text">
              <h2 className="about--skills__content__item__text__head">
                JavaScript
              </h2>
            </div>
          </div>
          <div className="about--skills__content__item">
            <div className="about--skills__content__item__icon">
            <DiGit />
            </div>
            <div className="about--skills__content__item__text">
              <h2 className="about--skills__content__item__text__head">Git</h2>
            </div>
          </div>
          <div className="about--skills__content__item">
            <div className="about--skills__content__item__icon">
            <FaReact />
            </div>
            <div className="about--skills__content__item__text">
              <h2 className="about--skills__content__item__text__head">React</h2>
            </div>
          </div>
          <div className="about--skills__content__item">
            <div className="about--skills__content__item__icon">
            <FaVuejs />
            </div>
            <div className="about--skills__content__item__text">
              <h2 className="about--skills__content__item__text__head">Vue</h2>
            </div>
          </div>
          <div className="about--skills__content__item">
            <div className="about--skills__content__item__icon">
            <FaFigma />
            </div>
            <div className="about--skills__content__item__text">
              <h2 className="about--skills__content__item__text__head">Figma</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
