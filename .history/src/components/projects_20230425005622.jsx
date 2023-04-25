import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "./footer";
import { Fade } from "react-awesome-reveal";
/** @jsxImportSource theme-ui */

const Projects = () => {
  return (
    <main className="app">
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
                  <div className="project--card__bg--img project--card__bg--img-1"></div>
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
                      GitHub Repository App
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is a React-based web app that displays a user's
                    repositories using the GitHub API. This app's user-friendly
                    interface allows users to easily view all of their
                    repositories in one place, including details such as name,
                    description, and star rating. It was one of the projects for
                    the <mark>AltSchool Africa School of Engineering</mark>{" "}
                    Examination in the second semester.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/exam-project-altschoolafrica",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://github-repos-display.vercel.app/",
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
                  <div className="project--card__bg--img project--card__bg--img-23"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Css</span>
                  <span className="project--card__frame__item">React</span>
                  <span className="project--card__frame__item">NodeJs</span>
                  <span className="project--card__frame__item">MongoDB</span>
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
                    The task tracker is a web application built was part of a
                    group project for the ongoing{" "}
                    <mark>LightHall Internship competition.</mark> I developed
                    the task manager page that users interact with after logging
                    in. The task manager allows users to perform a range of
                    actions such as adding, editing, and deleting tasks, as well
                    as sorting them by various criteria like title, status, and
                    due date. I was responsible for implementing the logic for
                    these actions.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/lighthall-super-league-level-2",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://task-tracker.ntec.app/",
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
                  <div className="project--card__bg--img project--card__bg--img-15"></div>
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
                    the number of people entered is not zero. This is a solution
                    to the "tip calculator"{" "}
                    <mark>frontend mentor challenge</mark>.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/Frontend-Mentor-challenges/tree/main/tip-calculator-app",
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
                  <div className="project--card__bg--img project--card__bg--img-24"></div>
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
                    database. The app uses Mapbox to render a map and allows
                    users to click on a button to increase the click count and
                    record the location where the click occurred. I built the
                    app in the first round of the ongoing{" "}
                    <mark>LightHall Internship Competition</mark> and have
                    qualified for the next round.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/Lighthall-internship/tree/main/chasing-clicks",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://chasing-d-clicks.vercel.app/",
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
                  <div className="project--card__bg--img project--card__bg--img-2"></div>
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
                        "https://github.com/MeekyBerry/Phonie-project-Phantom_Devz",
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
                  <div className="project--card__bg--img project--card__bg--img-25"></div>
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
                      Duplicate Removal
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is an app with two screens. The first screen takes user
                    input and, upon submission, redirects to screen two, which
                    displays the entered string as cards. Each card displays a
                    single character from the string, and each character's
                    duplicate instances can be removed by clicking the delete
                    icon. If a character has no duplicates, it will remain on
                    the screen. If there are no duplicate characters in the
                    string, a success header is displayed. The original and
                    updated strings are also displayed.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/duplicate-removal",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://duplicate-removal.vercel.app/",
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
                  <span className="project--card__frame__item">React</span>
                  <span className="project--card__frame__item">Firebase</span>
                  <span className="project--card__frame__item">Rest API</span>
                </figcaption>
              </figure>
              <article className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <header>
                    <h2 className="project--card__content__title margin-top">
                      RandomPeopleApp
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    This is a web app that displays random people and their
                    info. The data is generated from randomuser API. I also
                    added firebase authentication to verify and saved new users.
                    It was one of the projects for the{" "}
                    <mark>AltSchool Africa School of Engineering</mark>{" "}
                    Examination in the second semester.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname: "https://github.com/MeekyBerry/RandomPeopleApp",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{ pathname: "https://randompeopleapp.vercel.app" }}
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
                    This is a simple web tool for counting numbers. It uses
                    Local storage to store the count value. It was the third
                    semester Examination project for{" "}
                    <mark>AltSchool Africa School of Engineering.</mark>
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname: "https://github.com/MeekyBerry/counter-app",
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
                  <div className="project--card__bg--img project--card__bg--img-5"></div>
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
                    rating is submitted. This is a solution to a{" "}
                    <mark>Frontend Mentor Challenge.</mark>
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/Frontend-Mentor-challenges/tree/main/interactive-rating-component",
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
                        "https://interactive-ratings-component-project.netlify.app/",
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
                    This is a landing page for a fictional company called
                    Natours. It was a code along project from the online course
                    by JONAS SCHMEDTMANN on Udemy.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/Advanced-CSS-Sass-Course-Projects/tree/master/Natours-project",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://natour-landing-page.netlify.app/",
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
                  <div className="project--card__bg--img project--card__bg--img-7"></div>
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
                    This is a landing page for a fictional company called
                    Trillo. It was a code along project from the online course
                    by JONAS SCHMEDTMANN on Udemy.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/Advanced-CSS-Sass-Course-Projects/tree/master/Trillow-project",
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
                        "https://fantastic-crostata-3e9a02.netlify.app/",
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
                  <div className="project--card__bg--img project--card__bg--img-8"></div>
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
                        "https://github.com/MeekyBerry/fake-user-authentication",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{ pathname: "https://fake-auth.vercel.app/" }}
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
                  <div className="project--card__bg--img project--card__bg--img-9"></div>
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
                    is sleek and user-friendly on desktop, and the mathematical
                    algorithms are advanced.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname: "https://github.com/MeekyBerry/calculator",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://calculator-omega-murex.vercel.app/",
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
                  <div className="project--card__bg--img project--card__bg--img-10"></div>
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
                    This is a solution to{" "}
                    <mark>Frontend Mentor Challenge.</mark> In this project, I
                    re-created the visually stunning chat app CSS illustration
                    created by Frontend Mentor from scratch to finish.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/Frontend-Mentor-challenges/tree/main/chat-app-css-illustration",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://chat-app-css-project.netlify.app/",
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
                  <div className="project--card__bg--img project--card__bg--img-11"></div>
                </div>
                <figcaption className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                  <span className="project--card__frame__item">Sass</span>
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
                    CSS in 2022 crash course' by Design Course on Udemy. Sass
                    was also used but only for the Nesting feature.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/Shoe-brand-landing-page",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://shoe-brand-landing-page.netlify.app/",
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
                  <div className="project--card__bg--img project--card__bg--img-12"></div>
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
                    This is a solution to the{" "}
                    <mark>Frontend Mentor Challenge.</mark> It is a simple HTML
                    and CSS based card component.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/Frontend-Mentor-challenges/tree/main/order-summary-card-component",
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
                        "https://order-summary-card-project.netlify.app/",
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
                  <div className="project--card__bg--img project--card__bg--img-13"></div>
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
                    This is a solution to the{" "}
                    <mark>Frontend Mentor Challenge.</mark> I worked on this
                    project to practice CSS grid. as a beginner.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/Frontend-Mentor-challenges/tree/main/stats-preview-card-compo",
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
                        "https://stats-preview-card-project.netlify.app/",
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
                  <div className="project--card__bg--img project--card__bg--img-14"></div>
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
                    This is the solution to the{" "}
                    <mark>Frontend Mentor Challenge.</mark>
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/Frontend-Mentor-challenges/tree/main/fylo-data-store-layout",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://fylo-data-store-layout.netlify.app/",
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
          {/* <div className="project--card">
            <div className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-16"></div>
                </div>
                <div className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                </div>
            </div>
            <div className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <h2 className="project--card__content__title margin-top">
                    Survey Form
                  </h2>
                  <p className="project--card__content__desc">
                    For the 'Responsive Web Design' certification projects on
                    freeCodeCamp, I developed this survey form that accepts
                    various user inputs including name, email, number, dropdown,
                    radio buttons, checkboxes, and comments. The app also
                    includes validation and a submit button.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/FCC-responsive-web-design-projects/tree/master/Survey%20form",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://fcc-surveyform-project.netlify.app/",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
                </div>
              </div> */}
          <Fade direction="left" duration={5000}>
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
                      Tribute Page
                    </h2>
                  </header>
                  <p className="project--card__content__desc">
                    I created this tribute page to pay homage to the legendary
                    musician, <mark>Bob Marley</mark>. I hold Bob Marley in high
                    esteem and consider him to be the greatest musician of all
                    time.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/FCC-responsive-web-design-projects/tree/master/Bob%20Marley",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://bob-marley-tribute.netlify.app/",
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
          {/* <div className="project--card">
            <div className="project--card__side project--card__side__front">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-18"></div>
                </div>
                <div className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                </div>
            </div>
            <div className="project--card__side project--card__side__back">
                <div className="project--card__content">
                  <h2 className="project--card__content__title margin-top">
                    Technical Documentation
                  </h2>
                  <p className="project--card__content__desc">
                    For the 'Responsive Web Design' certification projects on
                    freeCodeCamp, I created this CSS documentation. I found CSS
                    to be particularly fascinating when I first embarked on my
                    journey as a developer, which inspired me to take this topic
                    for the project.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/FCC-responsive-web-design-projects/tree/master/CSS%20documentation",
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
                        "https://fcc-documentention-project.netlify.app/#Descendant_Selectors",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
            </div>
              </div> */}
          {/* <div className="project--card">
                <div className="project--card__bg">
                  <div className="project--card__bg--img project--card__bg--img-19"></div>
                </div>
                <div className="project--card__frame">
                  <span className="project--card__frame__item">Html</span>
                  <span className="project--card__frame__item">CSS</span>
                </div>
                <div className="project--card__content">
                  <h2 className="project--card__content__title margin-top">
                    Product Landing Page
                  </h2>
                  <p className="project--card__content__desc">
                    For the 'Responsive Web Design' certification projects on
                    freeCodeCamp, I developed this product landing page
                    featuring Binance, a company I aspire to work for someday.
                  </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/FCC-responsive-web-design-projects/tree/master/Binance%20landing%20page",
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
                        "https://fcc-landingpage-project.netlify.app/#home",
                    }}
                    target="_blank"
                    className="project--card__links__link live-link-bg blue-markup"
                  >
                    <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
                    View Live
                  </Link>
                </div>
              </div> */}
          <Fade direction="right" duration={5000}>
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
                        "https://github.com/MeekyBerry/Frontend-Mentor-challenges/tree/main/testimonial-grid-section",
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
                        "https://testimonial-grids-section.netlify.app/",
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
                      Beating Heart
                    </h2>
                  </header>
                  <p className="project--card__content__desc">Just for Fun.</p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/FCC-responsive-web-design-projects/tree/master/Beating%20heart",
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
                        "https://fanciful-salamander-e14723.netlify.app/",
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
                  <div className="project--card__bg--img project--card__bg--img-22"></div>
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
                      Half Moon
                    </h2>
                  </header>
                  <p className="project--card__content__desc">Just for Fun.</p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{
                      pathname:
                        "https://github.com/MeekyBerry/FCC-responsive-web-design-projects/tree/master/Half%20moon",
                    }}
                    target="_blank"
                    className="project--card__links__link github-link-bg"
                  >
                    <FaGithub style={{ color: "#000" }} />
                    View on GitHub
                  </Link>
                  <Link
                    to={{
                      pathname: "https://dreamy-dango-249305.netlify.app/",
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
      <Footer />
    </main>
  );
};

export default Projects;
