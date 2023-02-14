import React from "react";

const AboutMe = () => {

  return (
    <div className="about">
      <div className="about--container">
        <div className="about--title">
          <h1 className="about--title__head">/ About Me</h1>
          <p className="about--title__subhead">who am i?</p>
        </div>
        <div className="about--content">
          <div className="about--content__text">
            <h2 className="about--content__text__head">Hi, I'm <span className="about--content__text__head__name">Michael!</span></h2>
          </div>
      </div>
    </div>
  )
}

export default AboutMe;