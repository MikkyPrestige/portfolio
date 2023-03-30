import React from "react";
import WebDeveloper from "../assets/images/web-developer.gif";
import GitHub from "../assets/images/socials/icons8-github-94.png";
import LinkedIn from "../assets/images/socials/icons8-linkedin-94.png";
import LeetCode from "../assets/images/socials/leetCode.png";
import { Link } from "react-router-dom";
import Resume from "../assets/images/socials/resume.pdf";
import ProjectSlide from "./animation/project";

const Home = () => {
  return (
    <div className="home">
      <div className="home--media">
        <div className="home--media__line"></div>
        <div className="home--media__frame">
          <div className="home--media__frame__github">
            <Link
              to="https://github.com/MeekyBerry"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GitHub}
                alt="GitHub Icon"
                className="home--media__frame__img"
              />
            </Link>
          </div>
          <div className="home--media__frame__leetCode">
            <Link
              to="https://leetcode.com/meekyberry/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LeetCode}
                alt="LeetCode Icon"
                className="home--media__frame__img"
              />
            </Link>
          </div>
          <div className="home--media__frame__LinkedIn">
            <Link
              to="https://www.linkedin.com/in/mikkylanky/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn Icon"
                className="home--media__frame__img"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="home--contents">
        <div className="home--content">
          <h1 className="home--content__title">ELUE MICHAEL</h1>
          <h2 className="home--content__subtitle">Frontend Developer</h2>
          <p className="home--content__desc">
            I'm a frontend Developer with a strong foundation in HTML, CSS,
            JavaScript, and more looking for opportunities to develop and
            enhance my skills while creating innovative and dynamic web
            solutions.
          </p>
          <div className="home--content__btn">
            <a href={Resume} download="resume">
              <button className="home--content__btn__link">
                Download Resume
              </button>
            </a>

            <a href="mailto: michaelelue117@gmail.com">
              <button className="home--content__btn__link">
                Let's Talk 👋
              </button>
            </a>
          </div>
        </div>
        <div className="home--avatar">
          <img
            src={WebDeveloper}
            alt="GIF of a web developer working"
            className="home--avatar__img"
          />
        </div>
        <figure className="home--quote">
          <blockquote
            className="home--quote__block"
            cite="https://www.goodreads.com/quotes/1013-when-you-want-to-succeed-as-badly-as-you-want-to"
          >
            <p className="home--quote__block__text">
            The best way to predict the future is to invent it.
            </p>
          </blockquote>
            <figcaption className="home--quote__block__footer">
            Alan Kay
              <cite className="home--quote__block__footer__cite">
                Ted Ideas worth sharing
              </cite>
            </figcaption>
        </figure>
        <div className="home--slides">
          <ProjectSlide />
        </div>
      </div>
    </div>
  );
};

export default Home;
