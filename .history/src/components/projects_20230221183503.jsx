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
            <h2 className="project--card__content__title">RanDomPeopleApp</h2>
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
              <FaExternalLinkAlt />
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
              to={{
                pathname:
                  "https://github.com/MeekyBerry/Phonie-project-Phantom_Devz",
              }}
              target="_blank"
              className="project--card__links__link github-link-bg"
            >
              <FaGithub />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://phantom-devz-phonie.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg"
            >
              <FaExternalLinkAlt />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-3"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Chat App (Css Illustration)
            </h2>
            <p className="project--card__content__desc">
              This is a simple chat app built with HTML, CSS and JavaScript.
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
              <FaGithub />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://chat-app-css-project.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg"
            >
              <FaExternalLinkAlt />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-4"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Natour Landing Page
            </h2>
            <p className="project--card__content__desc">
              This is a landing page for a fictional company called Natours. It
              was built with HTML, CSS and SASS.
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
              <FaGithub />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://natour-landing-page.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg"
            >
              <FaExternalLinkAlt />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-5"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              GitHub Repository App
            </h2>
            <p className="project--card__content__desc">
              This is a web app that uses the GitHub API to display a user's
              repositories. It was built with React.
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
              <FaGithub />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://github-repos-display.vercel.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg"
            >
              <FaExternalLinkAlt />
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
              was built with HTML, CSS and SASS.
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
              <FaGithub />
              View on GitHub
            </Link>
            <Link
              to={{
                pathname: "https://fantastic-crostata-3e9a02.netlify.app/",
              }}
              target="_blank"
              className="project--card__links__link live-link-bg"
            >
              <FaExternalLinkAlt />
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
              <FaGithub />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://fake-auth.vercel.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg"
            >
              <FaExternalLinkAlt />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-8"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">Calculator</h2>
            <p className="project--card__content__desc">
              This is a simple calculator app built with React.
            </p>
          </div>
          <div className="project--card__links">
            <Link
              to={{ pathname: "https://github.com/MeekyBerry/calculator" }}
              target="_blank"
              className="project--card__links__link github-link-bg"
            >
              <FaGithub />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://calculator-omega-murex.vercel.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg"
            >
              <FaExternalLinkAlt />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-9"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Interactive Rating Component
            </h2>
            <p className="project--card__content__desc">
              This is an interactive rating component built with HTML, CSS and
              JavaScript
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
              <FaGithub />
              View on GitHub
            </Link>
            <Link
              to={{
                pathname:
                  "https://interactive-ratings-component-project.netlify.app/",
              }}
              target="_blank"
              className="project--card__links__link live-link-bg"
            >
              <FaExternalLinkAlt />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-10"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Flyo Data Store layout
            </h2>
            <p className="project--card__content__desc">
              This is a layout for a fictional company called Flyo. It was built
              with HTML and Css
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
              <FaGithub />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://fylo-data-store-layout.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg"
            >
              <FaExternalLinkAlt />
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
              This is a card component built with HTML and CSS
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
              <FaGithub />
              View on GitHub
            </Link>
            <Link
              to={{
                pathname: "https://order-summary-card-project.netlify.app/",
              }}
              target="_blank"
              className="project--card__links__link live-link-bg"
            >
              <FaExternalLinkAlt />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-13"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Stats Preview Card Component
            </h2>
            <p className="project--card__content__desc">
              This is a card component built with HTML and CSS
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
              <FaGithub />
              View on GitHub
            </Link>
            <Link
              to={{
                pathname: "https://stats-preview-card-project.netlify.app/",
              }}
              target="_blank"
              className="project--card__links__link live-link-bg"
            >
              <FaExternalLinkAlt />
              View Live
            </Link>
          </div>
        </div>
        <div className="project--card">
          <div className="project--card__blur project--card__blur-14"></div>
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
              <FaGithub />
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://shoe-brand-landing-page.netlify.app/" }}
              target="_blank"
              className="project--card__links__link live-link-bg"
            >
              <FaExternalLinkAlt />
              View Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
