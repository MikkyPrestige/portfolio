import React from "react";
import Avatar from "./avatar";
import CodingCoffee from "../assets/images/coding-coffee.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home--contents">
        <div className="home--content">
          <h1 className="home--content__title">ELUE MICHAEL</h1>
          <h2 className="home--content__subtitle">Frontend Developer</h2>
          <p className="home--content__desc">
            Frontend Developer with a strong foundation in HTML, CSS,
            JavaScript, and more looking for opportunities to develop and
            enhance my skills while creating innovative and dynamic web
            solutions.
          </p>
        </div>
        <div className="home--avatar">
          {/* <div className="home--avatar__container"> */}
            <div className="home--avatar__img">
              <Avatar
                image={CodingCoffee}
                alt="Coding Coffee"
                style={{ width: "15rem", height: "25rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Home;
