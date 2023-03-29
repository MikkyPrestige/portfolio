import React from "react";
import WebDeveloper from "../assets/images/web-developer.gif";
import GitHub from "../assets/images/socials/icons8-github-94.png";
import LinkedIn from "../assets/images/socials/icons8-linkedin-94.png";
import LeetCode from "../assets/images/socials/leetCode.png";
// import AboutMe from "./about";
// import Projects from "./projects";
// import Contact from "./contact";

const Home = () => {
  return (
    <div className="home">
      <div className="home--media">
        <div className="home--media__line"></div>
        <div className="home--media__frame">
          <div className="home--media__frame__github">
            <a
              href="https://github.com/MeekyBerry"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GitHub}
                alt="GitHub Icon"
                className="home--media__frame__img"
              />
            </a>
          </div>
          <div className="home--media__frame__leetCode">
            <a
              href="https://leetcode.com/meekyberry/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LeetCode}
                alt="LeetCode Icon"
                className="home--media__frame__img"
              />
            </a>
          </div>
          <div className="home--media__frame__LinkedIn">
            <a
              href="https://www.linkedin.com/in/mikkylanky/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn Icon"
                className="home--media__frame__img"
              />
            </a>
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
            <a href="https://www.canva.com/design/DAFdxBFz6mg/Sr0P3VS0WESZ7iLlzw7JIw/view?utm_content=DAFdxBFz6mg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" download>
              <button className="home--content__btn__download">
                Download CV
              </button>
            </a>

            <a href="mailto: michaelelue117@gmail.com">
              <button className="home--content__btn__talk">Let's Talk</button>
            </a>
        </div>
        <div className="home--avatar">
          <img
            src={WebDeveloper}
            alt="GIF of a web developer working"
            className="home--avatar__img"
          />
        </div>
      </div>
      {/* <AboutMe />
      <Projects />
      <Contact /> */}
    </div>
  );
};

export default Home;
