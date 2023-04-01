import React from "react";
import WebDeveloper from "../assets/images/web-developer.gif";
import GitHub from "../assets/images/socials/icons8-github-94.png";
import LinkedIn from "../assets/images/socials/icons8-linkedin-94.png";
import LeetCode from "../assets/images/socials/leetCode.png";
import { Link } from "react-router-dom";
// import Resume from "../assets/images/socials/resume.pdf";
import ProjectSlide from "./animation/project";
import Avatar from "./avatar";
import Footer from "./footer";

const Home = () => {
  const resumePDF = "../assets/images/socials/resume.pdf";
  return (
    <div className="app">
      <div className="home">
        <div className="home--media">
          <div className="home--media__line"></div>
          <div className="home--media__frame">
            <Link
              to="https://github.com/MeekyBerry"
              target="_blank"
              rel="noreferrer"
              className="home--media__frame__img"
            >
              <Avatar
                image={GitHub}
                alt="GitHub Icon"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </Link>
            <Link
              to="https://leetcode.com/meekyberry/"
              target="_blank"
              rel="noreferrer"
              className="home--media__frame__img"
            >
              <Avatar
                image={LeetCode}
                alt="LeetCode Icon"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/mikkylanky/"
              target="_blank"
              rel="noreferrer"
              className="home--media__frame__img"
            >
              <Avatar
                image={LinkedIn}
                alt="LinkedIn Icon"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </Link>
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
              {/* <a href={Resume} download="resume">
                <button className="home--content__btn__link">
                  Download Resume
                </button>
              </a> */}
              <iframe
                src={`/pdfjs-3.4.120-dist/web/viewer.html?file=${resumePDF}&page=1`}
                // width="100%"
                // height="100%"
                title="resume"
                className="home--content__btn__link"
              >
                View Resume
              </iframe>
              <a href="mailto: michaelelue117@gmail.com">
                <button className="home--content__btn__link">
                  Let's Talk 👋
                </button>
              </a>
            </div>
          </div>
          <div className="home--avatar">
            <Avatar
              image={WebDeveloper}
              alt="GIF of a web developer working"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "rgba(240, 227, 202, 1)",
                border: "1px solid #ededed",
              }}
            />
          </div>
          <figure className="home--quote">
            <blockquote
              className="home--quote__block"
              cite="https://www.ted.com/speakers/alan_kay#:~:text=%22The%20best%20way%20to%20predict,epistemology%2C%20molecular%20biology%20and%20more"
            >
              <p className="home--quote__block__text">
                The best way to predict the future is to invent it.
              </p>
            </blockquote>
            <figcaption className="home--quote__block__caption">
              — Alan Kay
              <cite>
                <a
                  href="https://www.ted.com/speakers/alan_kay#:~:text=%22The%20best%20way%20to%20predict,epistemology%2C%20molecular%20biology%20and%20more"
                  target="_blank"
                  rel="noreferrer"
                  className="home--quote__block__caption__cite"
                >
                  TED ideas worth spreading
                </a>
              </cite>
            </figcaption>
          </figure>
          <div className="home--slides">
            <ProjectSlide />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
