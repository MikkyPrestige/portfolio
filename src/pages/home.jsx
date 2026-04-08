import React from "react";
import SEO  from "../components/seo";
import myAvatar from "../assets/images/myAvatar.webp";
import GitHub from "../assets/images/socials/icons8-github-94.webp";
import LinkedIn from "../assets/images/socials/icons8-linkedin-94.webp";
import { Link } from "react-router-dom";
import Resume from "../assets/images/socials/elue_michael_software_engineer.pdf";
import ProjectSlide from "../components/animation/project";
import Avatar from "../components/avatar";
import { Reveal, JackInTheBox, Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
/** @jsxImportSource theme-ui */

const rotateInDownRight = keyframes`
from {
  -webkit-transform: rotate3d(0, 0, 1, -45deg);
  transform: rotate3d(0, 0, 1, -45deg);
  opacity: 0;
}
to {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  opacity: 1;
}`;

const lightSpeedInLeft = keyframes`
from {
  -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
  transform: translate3d(-100%, 0, 0) skewX(30deg);
  opacity: 0;
}

60% {
  -webkit-transform: skewX(-20deg);
  transform: skewX(-20deg);
  opacity: 1;
}

80% {
  -webkit-transform: skewX(5deg);
  transform: skewX(5deg);
}

to {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}`;

const Home = () => {
  const codeSnippet = `
  let button_menu = document.querySelector(".header_button");
  let float_menu = document.querySelector(".header_menu--float");
  let line_top = document.querySelector(".header_button_line--top");
  let line_under = document.querySelector(".header_button_line--bottom");
  button_menu.isSelected = false;
  function addEffectWriting(element, time) {
    let element_array = element.innerText.split("");
    element.count = 0;
    element.innerText = "";
    function writeSymbols() {
      element.innerText += element_array[element.count];
      element.count++;
      if (element.count <= element_array.length) {
        setTimeout(() => {
          writeSymbols();
        }, time);
      } else if (element.count >= element_array.length) {
        element.count = 0;
        element.innerText = "";
        writeSymbols();
      }
    }
    writeSymbols();
  }`;

  return (
    <main className="app">
    <SEO
  title="Elue Michael | Front-End Software Engineer"
  description="Front-end software engineer focused on React, accessibility, performance, and clean user experiences."
  canonical="https://michaelelue.netlify.app/"
/>
      <section
        className="home"
        sx={{
          backgroundColor: "layoutBG",
          color: "text",
        }}
      >
        <aside className="home--media">
          <Fade direction="up" duration={900}>
            <div className="home--media__line"></div>
            <div className="home--media__frame">
              <Link
                to="https://github.com/MikkyPrestige"
                target="_blank"
                rel="noopener noreferrer"
                className="home--media__frame__img"
              >
                <Avatar
                  image={GitHub}
                  alt="GitHub Icon"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/mikkyprestige"
                target="_blank"
                rel="noopener noreferrer"
                className="home--media__frame__img"
              >
                <Avatar
                  image={LinkedIn}
                  alt="LinkedIn Icon"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </Link>
            </div>
          </Fade>
        </aside>
        <section className="home--contents">
          <section className="home--contents__wrapper">
            <div className="home--contents__content">
              <JackInTheBox duration={1200}>
                <h1 className="home--contents__content__title">ELUE MICHAEL</h1>
                <h2 className="home--contents__content__subtitle">
                  Front-End Developer
                </h2>
                <p className="home--contents__content__desc">
                  I am a dedicated web developer with a focus on HTML,
                  JavaScript, React, MongoDB, and an array of other tools and
                  technologies. My driving force is to create exceptional
                  software that positively impacts the lives of those around me.
                </p>
                <div className="home--contents__content__btn">
                  <a href={Resume} target="_blank" rel="noopener noreferrer">
                    <button className="home--contents__content__btn__link">
                      View My Resume
                    </button>
                  </a>

                  <a href="mailto: michaelelue117@gmail.com">
                    <button className="home--contents__content__btn__link">
                      Let's Talk 👋
                    </button>
                  </a>
                </div>
              </JackInTheBox>
            </div>
            <div className="home--contents__illustration">
              <Reveal keyframes={rotateInDownRight} duration={1500}>
                <div>
                  <div className="home--contents__illustration__wrapper">
                    <div className="home--contents__illustration__wrapper--avatar">
                      <Avatar
                        image={myAvatar}
                        alt="Avatar"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div className="home--contents__illustration__wrapper--overlay"></div>
                  </div>
                  <pre className="home--contents__illustration__text">
                    {codeSnippet}
                  </pre>
                </div>
              </Reveal>
            </div>
          </section>
          <figure className="home--contents__quote">
            <Reveal keyframes={lightSpeedInLeft} duration={1500}>
              <blockquote
                className="home--contents__quote__block"
                cite="https://www.ted.com/speakers/alan_kay#:~:text=%22The%20best%20way%20to%20predict,epistemology%2C%20molecular%20biology%20and%20more"
              >
                <p className="home--contents__quote__block__text">
                  The best way to predict the future is to invent it.
                </p>
              </blockquote>
              <figcaption className="home--contents__quote__block__caption">
                — Alan Kay
                <cite>
                  <a
                    href="https://www.ted.com/speakers/alan_kay#:~:text=%22The%20best%20way%20to%20predict,epistemology%2C%20molecular%20biology%20and%20more"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home--contents__quote__block__caption__cite"
                  >
                    TED ideas worth spreading
                  </a>
                </cite>
              </figcaption>
            </Reveal>
          </figure>
          <aside className="home--slides">
            <ProjectSlide />
          </aside>
        </section>
      </section>
    </main>
  );
};

export default Home;
