import React from "react";
import Avatar from "./avatar";
import Skills from "../assets/images/skills/skill-logo.png";
import HTML5 from "../assets/images/skills/html-logo.png";
import CSS3 from "../assets/images/skills/css-logo.png";
import SASS from "../assets/images/skills/sass-logo.png";
import JS from "../assets/images/skills/javascript-logo.png";
import GIT from "../assets/images/skills/git-logo.png";
import REACT from "../assets/images/skills/react-logo.png";
import VUE from "../assets/images/skills/vuejs-logo.png";
import FIGMA from "../assets/images/skills/figma-logo.png";
import Footer from "./footer";
import { Zoom } from "react-awesome-reveal";
import "animate.css";

const AboutMe = () => {
  return (
    <div className="app">
      <div className="about">
        <div className="about--wrapper">
          <Zoom duration={5000} cascade damping={0.00001}>
            <div className="about--desc">
              <div className="about--img">
                <p className="about--img__content1"> </p>
                <p className="about--img__content2"> </p>
              </div>
              <div className="about--content">
                <div className="about--content__title">
                  <h1 className="about--content__title__head">
                    <span className="about--content__title__span">/</span>
                    About-Me
                  </h1>
                  <p className="about--content__title__subhead">Who am i?</p>
                </div>
                <div className="about--content__text">
                  <h2 className="about--content__text__head">
                    Hi, I'm{" "}
                    <span className="about--content__text__head__name">
                      Elue
                    </span>
                    !
                  </h2>
                  <p className="about--content__text__desc">
                    I am a motivated and passionate frontend developer currently
                    pursuing a diploma in Software Engineering at AltSchool
                    Africa. <br /> I've have gained experience in HTML, CSS, and
                    JavaScript, as well as exposure to frameworks such as React
                    and Vue. I am eager to continue my education and apply my
                    knowledge in a professional setting. <br /> As an intern or
                    entry-level developer, I am dedicated to delivering clean
                    and efficient code, effectively collaborating with my team,
                    and constantly striving for growth and improvement. I am
                    excited about the opportunity to contribute to a company's
                    success while also further developing my skills in a dynamic
                    and supportive environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="about--skills">
              <div className="about--skills__title">
                <h1 className="about--skills__title__head">My skills</h1>
                <div className="about--skills__title__avatar">
                  <Avatar
                    image={Skills}
                    alt="skills-logo"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div className="about--skills__content">
                <div className="about--skills__content__items">
                  <div className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={HTML5}
                        alt="html5-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <h2 className="about--skills__content__items__card__text">
                      HTML5
                    </h2>
                  </div>
                  <div className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={CSS3}
                        alt="css3-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <h2 className="about--skills__content__items__card__text">
                      CSS3
                    </h2>
                  </div>
                  <div className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={SASS}
                        alt="sass-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <h2 className="about--skills__content__items__card__text">
                      SCSS
                    </h2>
                  </div>
                  <div className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={JS}
                        alt="javascript-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <h2 className="about--skills__content__items__card__text">
                      JavaScript
                    </h2>
                  </div>
                  <div className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={GIT}
                        alt="git-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <h2 className="about--skills__content__items__card__text">
                      Git
                    </h2>
                  </div>
                  <div className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={REACT}
                        alt="react-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <h2 className="about--skills__content__items__card__text">
                      React
                    </h2>
                  </div>
                  <div className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={VUE}
                        alt="vue-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <h2 className="about--skills__content__items__card__text">
                      Vue
                    </h2>
                  </div>
                  <div className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={FIGMA}
                        alt="figma-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <h2 className="about--skills__content__items__card__text">
                      Figma
                    </h2>
                  </div>
                  <div className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="Firebase"><polygon fill="#fe9526" points="12.314 10.903 3.336 19.254 10.086 6.408 12.314 10.903" class="colorf57f17 svgShape"></polygon><path fill="#53d86a" d="M10.086,6.408l-6.75,12.846L6.344,0.477c0.113-0.582,0.443-0.641,0.741-0.126L10.086,6.408L10.086,6.408z" class="colorffa000 svgShape"></path><polygon fill="#595bd4" points="6.711 12.831 3.336 19.254 6.711 16.115 6.711 12.831" class="colord56f14 svgShape"></polygon><path fill="#167ffc" d="M6.689,0H6.67C6.525,0.007,6.404,0.169,6.344,0.477L3.336,19.254l3.375-6.423V0.002C6.704,0.001,6.697,0,6.689,0L6.689,0z" class="colorde8b00 svgShape"></path><path fill="#53d86a" d="M14.714,8.669l-2.4,2.235l-2.229-4.496l1.152-2.585c0.291-0.516,0.766-0.523,1.058,0L14.714,8.669L14.714,8.669z" class="colorffa000 svgShape"></path><path fill="#167ffc" d="M11.767,3.433c-0.192,0-0.385,0.131-0.531,0.389l-1.152,2.585L12,10.271V3.499C11.925,3.455,11.846,3.433,11.767,3.433L11.767,3.433z" class="colorde8b00 svgShape"></path><path fill="#ff9628" d="M17.346,5.251c0.43-0.41,0.873-0.272,0.984,0.311l2.334,13.58l-7.741,4.648C12.651,23.94,11.931,24,11.931,24s-0.654-0.08-0.905-0.218l-7.689-4.528L17.346,5.251L17.346,5.251z" class="colorffca28 svgShape"></path><path fill="#de8323" d="M17.832,5.015c-0.151,0-0.32,0.077-0.487,0.236L3.336,19.254l7.689,4.528C11.276,23.921,11.931,24,11.931,24s0.721-0.06,0.992-0.211l1.595-0.958L18.021,5.06C17.963,5.03,17.9,5.015,17.832,5.015L17.832,5.015z" class="colordeb023 svgShape"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
