// FOOTER COMPONENT

import React from "react";
import Avatar from "./avatar";
import Laptop from "../assets/images/laptop (1).png";
import Discord from "../assets/images/socials/discord.svg";
import Github from "../assets/images/socials/icons8-github-94.png";
import Linkedin from "../assets/images/socials/linkedin.png";
import Twitter from "../assets/images/socials/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--line">
      <p className="footer--line__content"></p>
      </div>
      <div className="footer--container">
        <div className="footer--container__content">
            <div className="footer--container__content--details">
              <div className="footer--container__content--details__top">
                <div className="footer--container__content--details__top--logo">
                  <Avatar image={Laptop} alt="Laptop Image" style={{ width: "100%", height: "100%"}} />
                </div>
                <p className="footer--container__content--details__top--email">
                  <a
                    href="mailto: michaelelue117@gmail.com"
                    className="footer--container__content--details__top--email--link"
                  >
                    michaelelue117@gmail.com
                  </a>
                </p>
              </div>
              <div className="footer--container__content--details__bottom">
                <p className="footer--container__content--details__bottom--text">
                  I am a software developer with a passion for creating
                  beautiful and functional user interfaces. I am currently
                  looking for an internship position as a front-end developer.
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
                  className="footer--container__content--media--links--link"
                >
                  <Avatar
                    image={Discord}
                    alt="GitHub Icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
                {/* <a
                  href="https://meekyberry.hashnode.dev/"
                  className="footer--container__content--media--links--link"
                >
                  <Avatar
                    image={Twitter}
                    alt="GitHub Icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a> */}
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className="footer--container__copyright">
          <p className="footer--container__copyright--text">
            &copy; 2020 Elue Michael
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
