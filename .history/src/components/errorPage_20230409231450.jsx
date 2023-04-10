// 404 ERROR COMPONENT

import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Pikabu from "../assets/images/pikabu-error-404.gif";
import Avatar from "./avatar";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-page__content">
        <Avatar 
        image={Pikabu}
        alt="Pikabu 404 Error"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <p className="error-page__content__text">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="error-page__content__link">
          <FaHome className="error-page__content__link__icon" />
          <span className="error-page__content__link__text">Go Home</span>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;