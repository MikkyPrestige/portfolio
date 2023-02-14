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
            <h2 className="about--content__text__head">Hi, I'm <span className="about--content__text__head__name">Elue!</span></h2>]
            <p className="about--content__text__para">I'm a full-stack web developer with a passion for creating beautiful, functional, and intuitive websites. I'm currently working as a freelance developer, and I'm always looking for new opportunities to work with new people.</p>
            <p className="about--content__text__para">I'm a self-taught developer, and I'm always looking for new ways to improve my skills. I'm currently learning React, and I'm looking forward to learning more about it.</p>
            <p className="about--content__text__para">I'm also a musician, and I'm currently working on a few projects. I'm also a huge fan of video games, and I'm always looking for new games to play.</p>

          </div>
      </div>
    </div>
  )
}

export default AboutMe;