// 404 ERROR COMPONENT
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Pikabu from "../assets/images/pikabu-error-404.gif";
import Avatar from "../components/avatar";
import { Zoom } from "react-awesome-reveal";
/** @jsxImportSource theme-ui */

const ErrorPage = () => {
  return (
    <aside className="app">
      <Helmet>
        <title>Front-End Dev | 404 Error</title>
        <meta name="description" content="404 error page" />
      </Helmet>
      <Zoom duration={5000}>
        <div
          sx={{
            backgroundColor: "background",
            color: "text",
          }}
          className="error-page"
        >
          <div className="error-page--content">
            <div className="error-page--content__avatar">
              <Avatar
                image={Pikabu}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: ".5rem",
                }}
              />
            </div>
            <p className="error-page--content__text">
              The page you are looking for does not exist!!!
            </p>
          </div>
          <Link to="/" className="error-page--content__link">
            <FaHome className="error-page--content__link--icon" />
            <span className="error-page--content__link--text">Go Home</span>
          </Link>
        </div>
      </Zoom>
    </aside>
  );
};

export default ErrorPage;
