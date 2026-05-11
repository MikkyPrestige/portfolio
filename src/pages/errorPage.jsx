import React from "react";
import { useColorMode } from "theme-ui";
import SEO  from "../components/seo";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Pikabu from "../assets/images/pikabu-error-404.gif";
import Avatar from "../components/avatar";
import { Zoom } from "react-awesome-reveal";
/** @jsxImportSource theme-ui */

const ErrorPage = () => {
  const [colorMode] = useColorMode();
  const themeClass = colorMode === "dark" ? "theme-dark" : "";

  return (
    <aside className="app">
   <SEO
     title="404 | Page Not Found"
    description=" Sorry, the page you're looking for doesn't exist. It might have been moved or deleted."
    noindex
      />
    <div className="error-page__zoom-wrapper">
      <Zoom duration={2000}>
        <div
          className={`error-page ${themeClass}`}
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
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>
          <Link to="/" className="error-page--content__link">
            <FaHome className="error-page--content__link--icon" />
            <span className="error-page--content__link--text">Go Home</span>
          </Link>
        </div>
      </Zoom>
      </div>
    </aside>
  );
};

export default ErrorPage;
