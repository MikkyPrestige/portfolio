import { Link } from "react-router-dom"

const Projcets = () => {
  <div className="project">
        <h1 className="project--header">My Works</h1>
        <div className="project--wrapper">
          <div className="project--card">
            <div className="project--card__blur"></div>
            <div className="project--card__content">
              <h2 className="project--card__content__title">
                lorem
              </h2>
              <p className="project--card__content__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                </p>
            </div>
            <div className="project--card__links">
              <Link
                to={{ pathname: "",
                target="_blank",
                className="project--card__links__link"> Open in GitHub
              </Link>
              // <Link
              //   to={{ pathname: "",
              //   target="_blank",
              //   className="project--card__links__link"
              // >
              //   <FaExternalLinkAlt />
              // </Link>
              </div>
              </div>
  </div>
}

export default Projcets