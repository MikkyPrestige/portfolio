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
          A web-based app that determines the telecom carrier based on a phone number entered by the user
    </div>
  </div>
  );
};

export default Projects;
