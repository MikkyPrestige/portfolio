import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
/** @jsxImportSource theme-ui */

const Projects = () => {
  return (
    <main className="app">
      <Helmet>
        <title>Front-End Dev | My Projects</title>
        <meta name="description" content="My works" />
      </Helmet>
      <div
        sx={{
          backgroundColor: "background",
          color: "text",
        }}
        className="project margin-top-5"
      >
        <header>
          <h1 className="project--title">My Works</h1>
        </header>
        <section className="project--wrapper">
          <Fade direction="left" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-25"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">React</span>
                  <span className="project--card__frame__item">TypeScript</span>
                  <span className="project--card__frame__item">MongoDB</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      HospitoFind
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    Access to healthcare in Nigeria can be very difficult and
                    painstaking. Quite absurd being that the first thing to
                    living is being healthy. HospitoFind is a simple tool that
                    aims to help any user find, export, and share hospitals
                    within the region.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname: "https://github.com/MikkyPrestige/hospitoFind",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://hospitofind.netlify.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="left" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-24"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Scss</span>
                  <span className="project--card__frame__item">React</span>
                  <span className="project--card__frame__item">Firebase</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Machala Laundry
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    Machala Laundry Service website is a user-friendly platform
                    that showcases their laundry services. The website features
                    convenient functionalities such as online booking, live
                    chat, and reviews. I also managed the hosting setup,
                    ensuring a secure and reliable online presence.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/machala-laundry",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: “https://machalalaundryservice.netlify.app”,
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="left" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-26"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">CSS</span>
                  <span className="project--card__frame__item">React</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      PrestigeEnigma Advocates
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    PrestigeEnigma Advocates website is a user-friendly platform
                    that showcases the legal services of a fictional law firm.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/PrestigeEnigma-Advocates",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://prestigeadvocates.vercel.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="left" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-1"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">
                    Tailwind Css
                  </span>
                  <span className="project--card__frame__item">MERN stack</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      HangPanda Game
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    HangPanda game is a team project which I took part in. It is
                    a web-based game built with MERN and Tailwind CSS. It is a
                    simple game where the user guesses a word by selecting
                    letters from the alphabet. The user has 7 lives and loses a
                    life for every wrong guess. The game ends when the user
                    guesses the word correctly or loses all their lives. There
                    is has a leaderBoard that displays the top players and their
                    scores.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname: "https://github.com/n-shen/game-hangman",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://hangman.ntec.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="left" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-2"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Css</span>
                  <span className="project--card__frame__item">React</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      GitFolio
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is a web app that displays my GitHub repositories using
                    the GitHub API. The app is also used to easily search for
                    anyone's GitHub repository with their username and view the
                    repository details.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname: "https://github.com/MikkyPrestige/GitFolio",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://gitfoliohub.vercel.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="left" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-3"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Css</span>
                  <span className="project--card__frame__item">MERN Stack</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Task Tracker
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    Task Tracker is a team project by me and two others. We
                    built a MERN web app using React for the front-end library.
                    I developed the task manager page that users interact with
                    after logging in. The task manager allows users to perform a
                    range of actions such as adding, editing, and deleting
                    tasks, as well as sorting them by various criteria like
                    title, status, and due date. I was responsible for
                    implementing the logic for these actions.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/lighthall-super-league-level-2",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://task-tracker.ntec.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="right" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-4"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">Css</span>
                  <span className="project--card__frame__item">JavaScript</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Tip Calculator
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is a tip calculator that calculates the correct tip
                    amount and total bill amount per person based on the values
                    entered by the user. It has a "Custom" button where you can
                    enter a specific tip percentage. The calculator also
                    includes a reset button and input validation to ensure that
                    the number of people entered is not zero.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/Frontend-Mentor-challenges/tree/main/tip-calculator-app",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://mikky-tip-calculator.vercel.app/",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="right" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-5"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">Css</span>
                  <span className="project--card__frame__item">JavaScript</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Phonie App
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    The Phonie Project is a web-based application created by the
                    team "Phantom_Devz" that determines the telecom carrier
                    based on a phone number entered by the user. It is one of
                    the projects featured in the{" "}
                    <mark>AltSchool Africa School of Engineering</mark> Holiday
                    Hackathon in August '22.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/Phonie-project-Phantom_Devz",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://phantom-devz-phonie.netlify.app/",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="right" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-6"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Scss</span>
                  <span className="project--card__frame__item">React</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      StringRefine
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is an app with two screens. The first screen takes user
                    input and, upon submission, redirects to screen two, which
                    displays the entered string as cards. Each card displays a
                    single character from the string, and each character's
                    duplicate instances can be removed by clicking the delete
                    icon.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname: "https://github.com/MikkyPrestige/StringRefine",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://stringrefine.vercel.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="right" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-7"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Scss</span>
                  <span className="project--card__frame__item">React</span>
                  <span className="project--card__frame__item">Firebase</span>
                  <span className="project--card__frame__item">Mapbox</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Chasing The Clicks
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    The click counter app is a web application that allows users
                    to track the number of clicks on and their location in
                    realtime. The app was built using React and Firebase as the
                    database. The app render's the user's location on a map and
                    allows users to click on a button to increase the click
                    count and record the location where the click occurred.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/Chasing-Clicks",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://chasing-clicks.vercel.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="right" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-9"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">CSS</span>
                  <span className="project--card__frame__item">Scss</span>
                  <span className="project--card__frame__item">Vue</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Counter App
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is a simple web tool for counting numbers. The count
                    value is stored locally so that it is still available on
                    page reload.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname: "https://github.com/MikkyPrestige/counter-app",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{ pathname: "https://meeky-counter-app.netlify.app/" }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="left" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-14"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Css</span>
                  <span className="project--card__frame__item">React</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Calculator
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    The calculator is a simple web application and functional
                    tool for performing mathematical operations. The interface
                    is sleek and user-friendly on desktop.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname: "https://github.com/MikkyPrestige/calculator",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://calculator-omega-murex.vercel.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="left" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-8"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Css</span>
                  <span className="project--card__frame__item">React</span>
                  <span className="project--card__frame__item">Firebase</span>
                  <span className="project--card__frame__item">Rest API</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      RandomProfiles
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is a web app that displays random people and their
                    info. The data is generated from randomuser API. I also
                    added firebase authentication.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/RandomProfiles",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{ pathname: "https://randomprofiles.vercel.app" }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="left" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-10"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                  <span className="project--card__frame__item">JavaScript</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Interactive Rating Component
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is an interactive web page that displays a rating
                    component in numbers. It allows the user select and submit a
                    number rating. Also display a "Thank you" card after a
                    rating is submitted.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/Frontend-Mentor-challenges/tree/main/interactive-rating-component",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname:
                        "https://interactive-ratings-component-project.netlify.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="right" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-11"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                  <span className="project--card__frame__item">Scss</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Natours Landing Page
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is a landing page for a fictional company. It was a
                    code along project from the online course by JONAS
                    SCHMEDTMANN on Udemy.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/Advanced-CSS-Sass-Course-Projects/tree/master/Natours-project",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://natour-landing-page.netlify.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="left" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-12"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                  <span className="project--card__frame__item">Scss</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Trillo Landing Page
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is a landing page for a fictional company. It was a
                    code along project from the online course by JONAS
                    SCHMEDTMANN on Udemy.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/Advanced-CSS-Sass-Course-Projects/tree/master/Trillow-project",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://fantastic-crostata-3e9a02.netlify.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="right" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-13"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Css</span>
                  <span className="project--card__frame__item">React</span>
                  <span className="project--card__frame__item">Firebase</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Phony Authentication
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is a simple fake authentication app. I worked on this
                    project to improve my skills on firebase authentication.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/fake-user-authentication",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{ pathname: "https://fake-auth.vercel.app" }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="right" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-15"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Chat App CSS Illustration
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    In this project, I re-created the chat app CSS illustration
                    on Frontend Mentor Challenge.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/Frontend-Mentor-challenges/tree/main/chat-app-css-illustration",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://chat-app-css-project.netlify.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="left" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-16"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                  <span className="project--card__frame__item">Scss</span>
                  <span className="project--card__frame__item">Javascript</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Shoe-Brand Landing Page
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This Landing page was a code along project on 'Learn HTML &
                    CSS in 2022 crash course' by Design Course on Udemy.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/Shoe-brand-landing-page",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://shoe-brand-landing-page.netlify.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="right" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-17"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Order Summary Card
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is a simple HTML and CSS based card component.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/Frontend-Mentor-challenges/tree/main/order-summary-card-component",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname:
                        "https://order-summary-card-project.netlify.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="left" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-18"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Stats Preview Card
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    I worked on this project from Frontend Mentor's Challenge to
                    practice CSS grid as a beginner.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/Frontend-Mentor-challenges/tree/main/stats-preview-card-compo",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname:
                        "https://stats-preview-card-project.netlify.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="right" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-19"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Fylo Data Storage
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is the solution to Frontend Mentor's Challenge.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/Frontend-Mentor-challenges/tree/main/fylo-data-store-layout",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://fylo-data-store-layout.netlify.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="left" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-20"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Tribute Page
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    I created this tribute page to pay homage to the legendary
                    musician, <mark>Bob Marley</mark>. Bob Marley is my Idol and
                    consider him to be the greatest musician of all time.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/FCC-responsive-web-design-projects/tree/master/Bob%20Marley",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://bob-marley-tribute.netlify.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
          <Fade direction="right" duration={5000}>
            <div className="project--card">
              <figure className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-21"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      Testimonial Grid section
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is the solution to the{" "}
                    <mark>Frontend Mentor Challenge</mark>
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MikkyPrestige/Frontend-Mentor-challenges/tree/main/testimonial-grid-section",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://testimonial-grids-section.netlify.app",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </article>
            </div>
          </Fade>
        </section>
      </div>
    </main>
  );
};

export default Projects;
