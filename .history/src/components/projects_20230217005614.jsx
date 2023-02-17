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
          A web app that uses firebase authentication and displays random people using the randomuser API (built with React)
          </p>
        </div>
        <div className="project--card__links">
          <Link
            to={{ pathname: "https://randompeopleapp.vercel.app" }}
            target="_blank"
            className="project--card__links__link"
          >
            View on GitHub
          </Link>
          <Link
            to={{ pathname: "" }}
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
