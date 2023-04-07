// FOOTER COMPONENT
import React from "react";
import Avatar from "./avatar";
import CodeCup from "../assets/images/projects/coding-coffee.jpg"
import Discord from "../assets/images/socials/discord.svg";
import Github from "../assets/images/socials/icons8-github-94.png";
import Linkedin from "../assets/images/socials/linkedin.png";
import { Reveal } from "react-awesome-reveal";
import {keyframes} from "@emotion/react";


const Jello = keyframes`
from,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}`;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--line">
        <p className="footer--line__content"></p>
      </div>
      <div className="footer--container animation-overflow">
        <Reveal keyframes={Jello} duration={5000}>
        <div className="footer--container__content">
          <div className="footer--container__content--details">
            <div className="footer--container__content--details__top">
              <div className="footer--container__content--details__top--logo">
                <Avatar
                  image={CodeCup}
                  alt="Laptop Image"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </div>
              <p className="footer--container__content--details__top--email">
                <a
                  href="mailto: michaelelue117@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer--container__content--details__top--email--link"
                >
                  michaelelue117@gmail.com
                </a>
              </p>
            </div>
            <div className="footer--container__content--details__bottom">
              <p className="footer--container__content--details__bottom--text">
                I am a software developer with a passion for creating beautiful
                and functional user interfaces.
              </p>
            </div>
          </div>
          <div className="footer--container__content--media">
            <h2 className="footer--container__content--media--title">Media</h2>
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
            &copy; 2023. Made by Elue
          </p>
        </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
