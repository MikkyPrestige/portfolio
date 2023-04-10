// 404 ERROR COMPONENT
import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Pikabu from "../assets/images/pikabu-error-404.gif";
import Avatar from "./avatar";
import { Zoom } from "react-awesome-reveal";

const ErrorPage = () => {
  return (
    <div className="app">
    {/* <div className="animation-overflow"> */}
    <Zoom duration={5000}>
    <div className="error-page">
      <div className="error-page--content">
        <div className="error-page--content__avatar">
          <Avatar
            image={Pikabu}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: ".5rem" }}
          />
        </div>
        <p className="error-page--content__text">
          The page you are looking for does not exist.
        </p>
      </div>
      <Link to="/" className="error-page--content__link">
        <FaHome className="error-page--content__link--icon" />
        <span className="error-page--content__link--text">Go Home</span>
      </Link>
    </div>
    </Zoom>
    </div>
    // </div>
  );
};

export default ErrorPage;
