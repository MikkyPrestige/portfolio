import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="project">
      <h1 className="project--title">My Works</h1>
      <div className="project--wrapper">
        <div className="project--card">
          <div className="project--card__blur project--card__blur-1"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">GitHub Repository App</h2>
            <p className="project--card__content__desc">
            This is a React-based web app that utilizes the GitHub API to showcase a user's repositories. With its sleek and intuitive interface, this app allows users to easily view all of their repositories in one place, including details such as the name, description, and number of stars.
            </p>
          </div>
          <div className="project--card__links">
            <Link
              to={{ pathname: "https://github.com/MeekyBerry/exam-project-altschoolafrica" }}
              target="_blank"
              className="project--card__links__link github-link-bg"
            >
              <FaGithub style={{ color: "#000"}} />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://github-repos-display.vercel.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78"}} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-2"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">Phonie App</h2>
            <p className="project--card__content__desc">
              The Phonie Project is a web-based application created by the team
              "Phantom_Devz" that determines the telecom carrier based on a
              phone number entered by the user
            </p>
          </div>
          <div className="project--card__links">
            <Link
              to={{ pathname: "https://github.com/MeekyBerry/Phonie-project-Phantom_Devz" }}
              target="_blank"
              className="project--card__links__link github-link-bg"
            >
              <FaGithub style={{ color: "#000"}} />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://phantom-devz-phonie.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78"}} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-3"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              RandomPeopleApp
            </h2>
            <p className="project--card__content__desc">
            This is a web app that uses firebase authentication and displays
              random people data generated from randomuser API. (built with
              React).
            </p>
          </div>
          <div className="project--card__links">
            <Link
              to={{ pathname: "https://github.com/MeekyBerry/RandomPeopleApp" }}
              target="_blank"
              className="project--card__links__link github-link-bg"
            >
              <FaGithub style={{ color: "#000"}} />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://randompeopleapp.vercel.app" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78"}} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-4"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Interactive Rating Component
            </h2>
            <p className="project--card__content__desc">
            This is a solution to An interactive rating component built with HTML, CSS, and JavaScript. This is a small project to practice handling user interactions and updating the DOM.
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
              <FaGithub style={{ color: "#000"}} />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://natour-landing-page.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78"}} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-5"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Natours Landing Page
            </h2>
            <p className="project--card__content__desc">
            This is a landing page for a fictional company called Natours. It
              was built with HTML, CSS and SASS From JONAS SCHMEDTMANN online course.
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
              <FaGithub style={{ color: "#000"}} />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://natour-landing-page.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78"}} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-6"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Trillo Landing Page
            </h2>
            <p className="project--card__content__desc">
              This is a landing page for a fictional company called Trillo. It
              was built with HTML, CSS and SASS From JONAS SCHMEDTMANN online course.
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
              <FaGithub style={{ color: "#000"}} />
              View on GitHub
            </Link>
            <Link
              to={{
                pathname: "https://fantastic-crostata-3e9a02.netlify.app/",
              }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78"}} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-7"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Phony Authentication
            </h2>
            <p className="project--card__content__desc">
              This is a simple authentication app built with React and Firebase.
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
              <FaGithub style={{ color: "#000"}} />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://fake-auth.vercel.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78"}} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-8"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">Calculator</h2>
            <p className="project--card__content__desc">
            This is a powerful calculator that can perform high-level functions. Built with a sleek, user-friendly interface and advanced mathematical algorithms.
            </p>
          </div>
          <div className="project--card__links">
            <Link
              to={{ pathname: "https://github.com/MeekyBerry/calculator" }}
              target="_blank"
              className="project--card__links__link github-link-bg"
            >
              <FaGithub style={{ color: "#000"}} />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://calculator-omega-murex.vercel.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78"}} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-9"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
            Chat App CSS Illustration
            </h2>
            <p className="project--card__content__desc">
            A visually stunning chat app illustration built with CSS and HTML from Frontend Mentor Challenge. In this project, I built the entire app illustration from scratch.
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
              <FaGithub style={{ color: "#000"}} />
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
              <FaExternalLinkAlt style={{ color: "#a8ff78"}} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-10"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              ShoeBrand Landing Page
            </h2>
            <p className="project--card__content__desc">
            This is a Landing page built with HTML, CSS and little Javascript. Sass was also used but only for the Nesting elements feature. It was a code along project on "Learn HTML & CSS in 2022 crash course" by Design Course.
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
              <FaGithub style={{ color: "#000"}} />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://fylo-data-store-layout.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78"}} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-11"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Order Summary Card Component
            </h2>
            <p className="project--card__content__desc">
            This is a solution to the Order summary component on Frontend Mentor Challenge. It is a card component built with HTML and CSS.
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
              <FaGithub style={{ color: "#000"}} />
              View on GitHub
            </Link>
            <Link
              to={{
                pathname: "https://order-summary-card-project.netlify.app/",
              }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78"}} />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-12"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Stats Preview Card Component
            </h2>
            <p className="project--card__content__desc">
              This is a solution to the Stats preview card component on Frontend Mentor Challenge. It is a card component built with HTML and CSS.
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
              <FaGithub style={{ color: "#000"}} />
              View on GitHub
            </Link>
            <Link
              to={{
                pathname: "https://stats-preview-card-project.netlify.app/",
              }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78"}} />
              View Live
            </Link>
          </div>
        </div>
        {/* <div className="project--card">
          <div className="project--card__blur project--card__blur-13"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Shoe Brand Landing Page
            </h2>
            <p className="project--card__content__desc">
              This is a landing page for a shoe brand built with HTML and CSS
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
              <FaGithub style={{ color: "#000"}} />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://shoe-brand-landing-page.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg blue-markup"
            >
              <FaExternalLinkAlt style={{ color: "#a8ff78"}} />
              View Live
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
