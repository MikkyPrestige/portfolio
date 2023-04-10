// 404 ERROR COMPONENT
import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Pikabu from "../assets/images/pikabu-error-404.gif";
import Avatar from "./avatar";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-page--content">
        <div className="error-page--content__avatar">
          <Avatar
            image={Pikabu}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <p className="error-page--content__text">
          The page you are looking for does not exist.
        </p>
      </div>
      <Link to="/" className="error-page--content__link">
        <FaHome className="error-page--content__link__icon" />
        <span className="error-page--content__link__text">Go Home</span>
      </Link>
    </div>
  );
};

export default ErrorPage;
