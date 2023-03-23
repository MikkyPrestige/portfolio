import React from "react";
import Avatar from "./avatar";
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
            <a href="https://github.com/MeekyBerry" target="_blank" rel="noreferrer">
            <Avatar image={GitHub} alt="GitHub icon" style={{ width: "2rem", height: "2rem" }} />
            </a>
          </div>
          <div className="home--media__frame__leetCode">
            <a href="https://leetcode.com/meekyberry/" target="_blank" rel="noreferrer">
            <Avatar image={LeetCode} alt="LeetCode icon" style={{ width: "2rem", height: "2rem" }} />
            </a>
          </div>
          <div className="home--media__frame__LinkedIn">
            <a href="https://www.linkedin.com/in/mikkylanky/" target="_blank" rel="noreferrer">
            <Avatar image={LinkedIn} alt="LinkedIn icon" style={{ width: "2rem", height: "2rem" }} />
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
        </div>
        <div className="home--avatar">
          <div className="home--avatar__img">
            <Avatar
              image={WebDeveloper}
              alt="Meeky"
              style={{ width: "20rem", height: "20rem", borderRadius: "5%" }}
            />
          </div>
        </div>
      </div>
      {/* <AboutMe />
      <Projects />
      <Contact /> */}
    </div>
  );
};

export default Home;
