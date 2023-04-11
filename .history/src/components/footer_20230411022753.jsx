// FOOTER COMPONENT
import React from "react";
import Avatar from "./avatar";
import CodeCup from "../assets/images/projects/coding-coffee.jpg";
import Discord from "../assets/images/socials/discord.svg";
import Github from "../assets/images/socials/icons8-github-94.png";
import Linkedin from "../assets/images/socials/linkedin.png";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
/** @jsxImportSource theme-ui */

const FadeInBottomLeft = keyframes`  from {
  opacity: 0;
  -webkit-transform: translate3d(-100%, 100%, 0);
  transform: translate3d(-100%, 100%, 0);
}
to {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
}`;

const Footer = () => {
  return (
    <footer
      sx={{
        backgroundColor: "background",
        color: "text",
      }}
      className="footer"
    >
      <div className="footer--line">
        <p className="footer--line__content"></p>
      </div>
      <div className="footer--container animation-overflow">
        <Reveal keyframes={FadeInBottomLeft} duration={5000}>
          <div className="footer--container__content">
            <div className="footer--container__content--details">
              <div className="footer--container__content--details__logo">
                <Avatar
                  image={CodeCup}
                  alt="Laptop Image"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="footer--container__content--details__wrapper">
                <p className="footer--container__content--details__email">
                  <a
                    href="mailto: michaelelue117@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="footer--container__content--details__email--link"
                  >
                    michaelelue117@gmail.com
                  </a>
                </p>
                <p className="footer--container__content--details__text">
                  I am a software developer with a passion for creating
                  beautiful and functional user interfaces.
                </p>
              </div>
            </div>
            <div className="footer--container__content--media">
              <h2 className="footer--container__content--media--title">
                Media
              </h2>
              <div className="footer--container__content--media--links">
                <a
                  href="https://github.com/MeekyBerry"
                  target="_blank"
                  rel="noreferrer"
                  className="footer--container__content--media--links--link"
                >
                  <Avatar
                    image={Github}
                    alt="GitHub Icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mikkylanky/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer--container__content--media--links--link"
                >
                  <Avatar
                    image={Linkedin}
                    alt="GitHub Icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
                <a
                  href="https://discordapp.com/users/786382582220193803"
                  target="_blank"
                  rel="noreferrer"
                  className="footer--container__content--media--links--link"
                >
                  <Avatar
                    image={Discord}
                    alt="GitHub Icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer--container__copyright">
            <p className="footer--container__copyright--text">
              &copy; 2023.{" "}
              <a href="https://github.com/MeekyBerry/portfolio">Michael Elue</a>
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
