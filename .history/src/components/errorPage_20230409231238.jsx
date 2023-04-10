// 404 ERROR COMPONENT

import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "../assets/images/pikabu-error-404.gif";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-page__content">
        <h1 className="error-page__content__title">404</h1>
        <p className="error-page__content__text">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="error-page__content__link">
          <FaHome className="error-page__content__link__icon" />
          <span className="error-page__content__link__text">Go Home</span>
        </Link>
      </div>
      <img
        src={require("../assets/images/pikabu-error-404.gif").default}
        alt="404 error"
        className="error-page__image"
      />
    </div>
  );
}

export default ErrorPage;