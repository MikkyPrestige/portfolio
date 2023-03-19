import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Avatar from "./avatar";
import RepoApp from "../assets/images/projects/repoApp.jpeg";
import PhonieApp from "../assets/images/projects/phonieApp.jpeg";
import RandomPeopleApp from "../assets/images/projects/randomApp.jpeg";
import Counter from "../assets/images/projects/counter.jpeg";
import RatingApp from "../assets/images/projects/ratingApp.jpeg";
import Natours from "../assets/images/projects/natours.jpeg";
import PhonyApp from "../assets/images/projects/phonyApp.jpeg";
import Trillo from "../assets/images/projects/trillo.jpeg";
import Calculator from "../assets/images/projects/calculator.jpeg";
import ChatAppCss from "../assets/images/projects/chatAppCss.jpeg";
import ShoeBrand from "../assets/images/projects/shoebrand.jpeg";
import  OrderCard from "../assets/images/projects/orderCard.jpeg";
import Fylo from "../assets/images/projects/fylo.jpeg";
import StatsCard from "../assets/images/projects/statsCard.jpeg";


const Projects = () => {
  return (
    <div className="project margin-top-5">
      <h1 className="project--title">My Works</h1>8
      <div className="project--wrapper">
        <div className="project--card">
          <div className="project--card__img--container">
            <Avatar image={RepoApp} alt="Repo App" className="project--card__img" style={{ width: "10rem", height: "10rem"}}/>
        </div>
          <div className="project--card__frame">
          <span className="project--card__frame__item">React</span>
          <span className="project--card__frame__item">CSS</span>
          </div>
          <div className="project--card__content">
          <h2 className="project--card__content__title">
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
        {/* <div className="project--card">
          <div className="project--card__blur project--card__blur-1"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
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
          <div className="project--card__blur project--card__blur-2"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">Phonie App</h2>
            <p className="project--card__content__desc">
              The Phonie Project is a web-based application created by the team
              "Phantom_Devz" that determines the telecom carrier based on a
              phone number entered by the user. <br /> It is one of the projects
              featured in the AltSchool Africa School of Engineering Holiday
              Hackathon in August '22. It was built with HTML, CSS and
              JavaScript.
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
          <div className="project--card__blur project--card__blur-3"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">RandomPeopleApp</h2>
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
          <div className="project--card__blur project--card__blur-4"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">Counter App</h2>
            <p className="project--card__content__desc">
              This is a simple web tool for counting numbers. (built with VueJs and Sass).
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
          <div className="project--card__blur project--card__blur-5"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Interactive Rating Component
            </h2>
            <p className="project--card__content__desc">
              This is a solution for the Frontend Mentor Challenge's
              'Interactive rating component'. This is a small project to
              practice interacting with users and updating the DOM. Built with
              HTML, CSS, and JavaScript.
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
          <div className="project--card__blur project--card__blur-6"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Natours Landing Page
            </h2>
            <p className="project--card__content__desc">
              This is a landing page for a fictional company called Natours. It
              was created using HTML, CSS, and SASS from the online course by
              JONAS SCHMEDTMANN.
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
          <div className="project--card__blur project--card__blur-7"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Trillo Landing Page
            </h2>
            <p className="project--card__content__desc">
              This is a landing page for a fictional company called Trillo. It
              was created using HTML, CSS, and SASS from the online course by
              JONAS SCHMEDTMANN.
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
          <div className="project--card__blur project--card__blur-8"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Phony Authentication
            </h2>
            <p className="project--card__content__desc">
              This is a simple authentication app built with React and Firebase.
              I worked on this project to improve my firebase skills.
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
          <div className="project--card__blur project--card__blur-9"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">Calculator</h2>
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
          <div className="project--card__blur project--card__blur-10"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Chat App CSS Illustration
            </h2>
            <p className="project--card__content__desc">
              This is a solution to Frontend Mentor Challenge's 'Chat app CSS
              illustration'. Frontend Mentor created a visually stunning chat
              app illustration. In this project, I re-created the entire app
              illustration from scratch with CSS and HTML.
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
          <div className="project--card__blur project--card__blur-11"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              ShoeBrand Landing Page
            </h2>
            <p className="project--card__content__desc">
              This is a Landing page built with HTML, CSS and little Javascript.
              Sass was also used but only for the Nesting feature. It was a code
              along project on 'Learn HTML & CSS in 2022 crash course' by Design
              Course.
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
          <div className="project--card__blur project--card__blur-12"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
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
          <div className="project--card__blur project--card__blur-13"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">
              Stats Preview Card
            </h2>
            <p className="project--card__content__desc">
              This is a solution to the 'Stats preview card component' on
              Frontend Mentor Challenge. It is a card component built with HTML
              and CSS.
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
          <div className="project--card__blur project--card__blur-14"></div>
          <div className="project--card__content">
            <h2 className="project--card__content__title">Fylo Data Storage</h2>
            <p className="project--card__content__desc">
              This is the solution to the Frontend Mentor Challenge's 'Fylo data
              storage component'. HTML and CSS were used to create it.
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
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
