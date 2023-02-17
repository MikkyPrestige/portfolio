import { Link } from "react-router-dom";

const Projects = () => {
  return (
  <div className="project">
    <h1 className="project--header">My Works</h1>
    <div className="project--wrapper">
      <div className="project--card">
        <div className="project--card__blur"></div>
        <div className="project--card__content">
          <h2 className="project--card__content__title">RanDomPeopleApp</h2>
          <p className="project--card__content__desc">
          This is a web app that uses firebase authentication and displays random people data generated from randomuser API. (built with React).
          </p>
        </div>
        <div className="project--card__links">
          <Link
            to={{ pathname: "https://github.com/MeekyBerry/RandomPeopleApp" }}
            target="_blank"
            className="project--card__links__link"
          >
            View on GitHub
          </Link>
          <Link
            to={{ pathname: "https://randompeopleapp.vercel.app" }}
            target="_blank"
            className="project--card__links__link"
          >
            View Live
          </Link>
        </div>
      </div>
      <div className="project--card">
        <div className="project--card__blur"></div>
        <div className="project--card__content">
          <h2 className="project--card__content__title">Phonie App</h2>
          <p className="project--card__content__desc">
          The Phonie Project is a web-based application created by the team "Phantom_Devz" that determines the telecom carrier based on a phone number entered by the user
          </p>
          </div>
          <div className="project--card__links">
            <Link
              to={{ pathname: "https://github.com/MeekyBerry/Phonie-project-Phantom_Devz" }}
              target="_blank"
              className="project--card__links__link"
            >
              View on GitHub
            </Link>
            <Link
              to={{ pathname: "https://phantom-devz-phonie.netlify.app/" }}
              target="_blank"
              className="project--card__links__link"
            >
              View Live
            </Link>
            </div>
            </div>
            <div className="project--card">
              <div className="project--card__blur"></div>
              <div className="project--card__content">
                <h2 className="project--card__content__title">Chat App (Css Illustration)</h2>
                <p className="project--card__content__desc">
                This is a simple chat app built with HTML, CSS and JavaScript.
                </p>
                </div>
                <div className="project--card__links">
                  <Link
                    to={{ pathname: "https://github.com/MeekyBerry/Frontend-Mentor-challenges/tree/main/chat-app-css-illustration" }}
                    target="_blank"
                    className="project--card__links__link"
                  >
                    View on GitHub
                  </Link>
                  <Link
                    to={{ pathname: "https://chat-app-css-project.netlify.app/" }}
                    target="_blank"
                    className="project--card__links__link"
                  >
                    View Live
                  </Link>
                  </div>
                  </div>
                  <div className="project--card">
                    <div className="project--card__blur"></div>
                    <div className="project--card__content">
                      <h2 className="project--card__content__title">Natour Landing Page</h2>
                      <p className="project--card__content__desc">
                      This is a landing page for a fictional company called Natours. It was built with HTML, CSS and SASS.
                      </p>
                      </div>
                      <div className="project--card__links">
                        <Link
                          to={{ pathname: "https://github.com/MeekyBerry/Advanced-CSS-Sass-Course-Projects/tree/master/Natours-project" }}
                          target="_blank"
                          className="project--card__links__link"
                        >
                          View on GitHub
                        </Link>
                        <Link 
                        to={{ pathname: "https://natour-landing-page.netlify.app/"}}
                        target="_blank"
                        className="project--card__links__link"
                        >
                          View Live
                        </Link>
                        </div>
                        </div>
    </div>
  </div>
  );
};

export default Projects;
