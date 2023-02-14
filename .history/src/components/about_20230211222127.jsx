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
            <h2 className="about--content__text__head">Hi, I'm <span className="about--content__text__head__name">Elue!</span></h2>
            <p className="about--content__text__para">I am a highly motivated and passionate frontend developer currently pursuing a diploma in Software Engineering with a focus on web development at AltSchool Africa. I've gained experience in HTML, CSS, and JavaScript as a result of my studies and various projects, as well as exposure to frameworks such as Sass, React, and Vue. I am eager to continue my education and apply my knowledge in a professional setting. As an intern or entry-level developer, I am dedicated to delivering clean and efficient code, effectively collaborating with my team, and constantly striving for growth and improvement. I am excited about the opportunity to contribute to a company's success while also further developing my skills in a dynamic and supportive environment.</p>
          </div>
      </div>
    </div>
  </div>
  )
}

export default AboutMe;