import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="project margin-top-5">
      <h1 className="project--title">My Works</h1>
      <div className="project--wrapper">
        <div className="project--card">
          <div className="project--card__img project--card__img-1"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Html</span>
            <span className="project--card__frame__item">Css</span>
            <span className="project--card__frame__item">JavaScript</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
               Tip Calculator
            </h2>
            <p className="project--card__content__desc">
              This is a simple tip calculator that calculates the tip amount and
              total bill amount based on the bill amount and tip percentage
              entered by the user. It was one of the projects for the AltSchool
              Africa School of Engineering Examination in the first semester.
            </p>
          </div>
          <div className="project--card__links">
            <Link
              to={{
                pathname:
                  "https://github.com/MeekyBerry/Frontend-Mentor-challenges/tree/main/tip-calculator-app"
              }}
              target="_blank"
              className="project--card__links__link github-link-bg"
            >
              <FaGithub style={{ color: "#000" }} />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://tip-calculator-app-eta.vercel.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-1"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Css</span>
            <span className="project--card__frame__item">React</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              GitHub Repository App
            </h2>
            <p className="project--card__content__desc">
              This is a React-based web app that displays a user's repositories
              using the GitHub API. This app's user-friendly interface allows
              users to easily view all of their repositories in one place,
              including details such as name, description, and star rating. It
              was one of the projects for the AltSchool Africa School of
              Engineering Examination in the second semester.
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
              to={{ pathname: "https://github-repos-display.vercel.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-2"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Html</span>
            <span className="project--card__frame__item">Css</span>
            <span className="project--card__frame__item">JavaScript</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              Phonie App
            </h2>
            <p className="project--card__content__desc">
              The Phonie Project is a web-based application created by the team
              "Phantom_Devz" that determines the telecom carrier based on a
              phone number entered by the user. <br /> It is one of the projects
              featured in the AltSchool Africa School of Engineering Holiday
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
              to={{ pathname: "https://phantom-devz-phonie.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-3"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Css</span>
            <span className="project--card__frame__item">React</span>
            <span className="project--card__frame__item">Firebase</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              RandomPeopleApp
            </h2>
            <p className="project--card__content__desc">
              This is a web app that uses firebase authentication and displays
              random people data generated from randomuser API.
            </p>
          </div>
          <div className="project--card__links">
            <Link
              to={{ pathname: "https://github.com/MeekyBerry/RandomPeopleApp" }}
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
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-4"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">VueJs</span>
            <span className="project--card__frame__item">Sass</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              Counter App
            </h2>
            <p className="project--card__content__desc">
              This is a simple web tool for counting numbers.
            </p>
          </div>
          <div className="project--card__links">
            <Link
              to={{ pathname: "https://github.com/MeekyBerry/counter-app" }}
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
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-5"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Html</span>
            <span className="project--card__frame__item">CSS</span>
            <span className="project--card__frame__item">JavaScript</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              Interactive Rating Component
            </h2>
            <p className="project--card__content__desc">
              This is a solution for the Frontend Mentor Challenge, 'Interactive
              rating component'. This is a small project to practice interacting
              with users and updating the DOM.
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
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-6"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Html</span>
            <span className="project--card__frame__item">CSS</span>
            <span className="project--card__frame__item">Sass</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              Natours Landing Page
            </h2>
            <p className="project--card__content__desc">
              This is a landing page for a fictional company called Natours. It
              was a code along project from the online course by JONAS
              SCHMEDTMANN on Udemy.
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
              to={{ pathname: "https://natour-landing-page.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-7"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Html</span>
            <span className="project--card__frame__item">CSS</span>
            <span className="project--card__frame__item">Sass</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              Trillo Landing Page
            </h2>
            <p className="project--card__content__desc">
              This is a landing page for a fictional company called Trillo. It
              was a code along project from the online course by JONAS
              SCHMEDTMANN on Udemy.
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
                pathname: "https://fantastic-crostata-3e9a02.netlify.app/",
              }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-8"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Css</span>
            <span className="project--card__frame__item">React</span>
            <span className="project--card__frame__item">Firebase</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              Phony Authentication
            </h2>
            <p className="project--card__content__desc">
              This is a simple fake authentication app. I worked on this project
              to improve my skills on firebase authentication.
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
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-9"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Css</span>
            <span className="project--card__frame__item">React</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              Calculator
            </h2>
            <p className="project--card__content__desc">
              This is a powerful calculator with high-level functions. The
              interface is sleek and user-friendly, and the mathematical
              algorithms are advanced.
            </p>
          </div>
          <div className="project--card__links">
            <Link
              to={{ pathname: "https://github.com/MeekyBerry/calculator" }}
              target="_blank"
              className="project--card__links__link github-link-bg"
            >
              <FaGithub style={{ color: "#000" }} />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://calculator-omega-murex.vercel.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-10"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Html</span>
            <span className="project--card__frame__item">CSS</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              Chat App CSS Illustration
            </h2>
            <p className="project--card__content__desc">
              This is a solution to Frontend Mentor Challenge, 'Chat App CSS
              Illustration'. Frontend Mentor created a visually stunning chat
              app illustration. In this project, I re-created it illustration
              from scratch to finish.
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
              to={{ pathname: "https://chat-app-css-project.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-11"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Html</span>
            <span className="project--card__frame__item">CSS</span>
            <span className="project--card__frame__item">Sass</span>
            <span className="project--card__frame__item">Javascript</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              Shoe-Brand Landing Page
            </h2>
            <p className="project--card__content__desc">
              This Landing page was a code along project on 'Learn HTML & CSS in
              2022 crash course' by Design Course on Udemy. Sass was also used
              but only for the Nesting feature.
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
              to={{ pathname: "https://shoe-brand-landing-page.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-12"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Html</span>
            <span className="project--card__frame__item">CSS</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              Order Summary Card
            </h2>
            <p className="project--card__content__desc">
              This is a solution to the Frontend Mentor Challenge's 'Order
              summary component'. It is an HTML and CSS-based card component.
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
                pathname: "https://order-summary-card-project.netlify.app/",
              }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-13"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Html</span>
            <span className="project--card__frame__item">CSS</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              Stats Preview Card
            </h2>
            <p className="project--card__content__desc">
              This is a solution to the 'Stats preview card component' on
              Frontend Mentor Challenge. I worked on this project to practice
              CSS grid.
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
                pathname: "https://stats-preview-card-project.netlify.app/",
              }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__img project--card__img-14"></div>
          <div className="project--card__frame">
            <span className="project--card__frame__item">Html</span>
            <span className="project--card__frame__item">CSS</span>
          </div>
          <div className="project--card__content">
            <h2 className="project--card__content__title margin-top">
              Fylo Data Storage
            </h2>
            <p className="project--card__content__desc">
              This is the solution to the Frontend Mentor Challenge's 'Fylo data
              storage component'.
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
              to={{ pathname: "https://fylo-data-store-layout.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78" }} />
              View Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
