import React from "react";
import { Helmet } from "react-helmet";
import Avatar from "../components/avatar";
import Skills from "../assets/images/skills/skill-logo.png";
import HTML5 from "../assets/images/skills/html-logo.png";
import CSS3 from "../assets/images/skills/css-logo.png";
import SASS from "../assets/images/skills/sass-logo.png";
import JS from "../assets/images/skills/javascript-logo.png";
import GIT from "../assets/images/skills/git-logo.png";
import REACT from "../assets/images/skills/react-logo.png";
import VUE from "../assets/images/skills/vue-logo.png";
import FIGMA from "../assets/images/skills/figma-logo.png";
import FIREBASE from "../assets/images/skills/firebase.svg";
import SoftSkill from "../assets/images/skills/flexibility-skill.svg";
import Cognition from "../assets/images/skills/cognition.svg";
import Thinking from "../assets/images/skills/hacker-thinking.gif";
import Adaptability from "../assets/images/skills/adaptability-skill.svg";
import Research from "../assets/images/skills/research.gif";
import ShareMind from "../assets/images/skills/share-mind.png";
import Agile from "../assets/images/skills/agile-management.png";
import Typescript from "../assets/images/skills/typescript.png";
import MERN from "../assets/images/skills/mern.webp";
import Auth0 from "../assets/images/skills/auth0.png";
import Mindful from "../assets/images/skills/mindful.svg";
import myAvatar from "../assets/images/prestige.jpeg";
import Teamwork from "../assets/images/skills/teamwork.svg";
import { Zoom } from "react-awesome-reveal";
import "animate.css";
/** @jsxImportSource theme-ui */

const Background = () => {
  return (
    <main className="app">
      <Helmet>
        <title>Front-End Dev | My About</title>
        <meta
          name="description"
          content="I am an enthusiastic and dedicated frontend developer"
        />
      </Helmet>
      <div
        sx={{
          backgroundColor: "background",
          color: "text",
        }}
        className="about"
      >
        <section className="about--wrapper">
          <Zoom duration={5000} cascade damping={0.0001}>
            <div className="about--content__title">
              <h1 className="about--content__title__head">
                <span className="about--content__title__span">/</span>
                About-Me
              </h1>
              <p className="about--content__title__subhead">Who am i?</p>
            </div>
            <section className="about--desc">
              <div className="about--img">
                <Avatar
                  image={myAvatar}
                  alt="My avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10%",
                  }}
                />
              </div>
              <div className="about--content">
                <div className="about--content__text">
                  <h2 className="about--content__text__head">
                    I'm{" "}
                    <span className="about--content__text__head__name">
                      Elue
                    </span>
                    !
                  </h2>
                  <p className="about--content__text__desc">
                    I am an enthusiastic and dedicated frontend developer,
                    holding a diploma in Front-End Engineering from AltSchool
                    Africa School Of Engineering. My journey has equipped me
                    with a solid grounding in essential web technologies like
                    HTML, CSS, and JavaScript. Additionally, I have embraced the
                    world of modern frameworks including React, Vue and
                    currently mastering TypeScript. Beyond frontend expertise, I
                    also build full stack apps utilizing the MERN stack. Fueled
                    by a diligent work ethic and a continuous thirst for
                    learning and self-improvement my journey in the world of
                    frontend development is by a genuine passion, and I am
                    always excited to push boundaries and expand my horizons.
                  </p>
                </div>
              </div>
            </section>
            <section className="about--skills">
              <header className="about--skills__title">
                <h1 className="about--skills__title__head">Technical skills</h1>
                <figure className="about--skills__title__avatar">
                  <Avatar
                    image={Skills}
                    alt="skills-logo"
                    style={{ width: "100%", height: "100%" }}
                  />
                </figure>
              </header>
              <div className="about--skills__content">
                <div className="about--skills__content__items">
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={HTML5}
                        alt="html5-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      HTML5
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={CSS3}
                        alt="css3-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      CSS3
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={SASS}
                        alt="sass-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      SCSS
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={JS}
                        alt="javascript-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      JavaScript
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={GIT}
                        alt="git-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      Git
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={REACT}
                        alt="react-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      React
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={Typescript}
                        alt="Typescript logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      TypeScript
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={MERN}
                        alt="MongoDB logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      MERN Stack
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={VUE}
                        alt="vue-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      Vue
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={FIGMA}
                        alt="figma logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      Figma
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={Auth0}
                        alt="Auth0 logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      Auth0
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={FIREBASE}
                        alt="Firebase logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      Firebase
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section className="about--skills margin-top">
              <header className="about--skills__title">
                <h1 className="about--skills__title__head">
                  Professional skills
                </h1>
                <figure className="about--skills__title__avatar">
                  <Avatar
                    image={SoftSkill}
                    alt="soft-skills-logo"
                    style={{ width: "100%", height: "100%" }}
                  />
                </figure>
              </header>
              <div className="about--skills__content">
                <div className="about--skills__content__items">
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={Thinking}
                        alt="thinking logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      Critical Thinking
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={Agile}
                        alt="Agile logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      Agile Development
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={ShareMind}
                        alt="teamwork-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      Emotional Intelligence
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={Cognition}
                        alt="teamwork-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      Cognitive Skills
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={Mindful}
                        alt="teamwork-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      Self Management
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={Teamwork}
                        alt="teamwork-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      Relationship Management
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={Research}
                        alt="teamwork-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      Research Skills
                    </figcaption>
                  </figure>
                  <figure className="about--skills__content__items__card">
                    <div className="about--skills__content__items__card__avatar animate__animated animate__tada">
                      <Avatar
                        image={Adaptability}
                        alt="teamwork-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <figcaption className="about--skills__content__items__card__text">
                      Flexibility & Adaptability
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>
          </Zoom>
        </section>
      </div>
    </main>
  );
};

export default Background;
