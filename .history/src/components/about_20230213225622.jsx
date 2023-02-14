import React from "react";

const AboutMe = () => {
  return (
    <di className="about">
      <div className="about--desc">
        <div className="about--img">
          <p className="about--img__content1"> </p>
          <p className="about--img__content2"> </p>
        </div>
        <div className="about--content">
          <div className="about--content__title">
            <h1 className="about--content__title__head"><span className="about--content__title__span">/</span>About-Me</h1>
            <p className="about--content__title__subhead">Who am i?</p>
          </div>
          <div className="about--content__text">
            <h2 className="about--content__text__head">
              Hi, I'm{" "}
              <span className="about--content__text__head__name">Elue</span>!
            </h2>
            <p className="about--content__text__desc">
              I am a motivated and passionate frontend developer currently
              pursuing a diploma in Software Engineering at AltSchool Africa.{" "}
              <br /> I've have gained experience in HTML, CSS, and JavaScript,
              as well as exposure to frameworks such as React and Vue. I am
              eager to continue my education and apply my knowledge in a
              professional setting. <br /> As an intern or entry-level
              developer, I am dedicated to delivering clean and efficient code,
              effectively collaborating with my team, and constantly striving
              for growth and improvement. I am excited about the opportunity to
              contribute to a company's success while also further developing my
              skills in a dynamic and supportive environment.
            </p>
          </div>
        </div>
      </div>
      <div className="about--skills">
        <div className="about--skills__title">
          <h1 className="about--skills__title__head">My skills</h1>
          </div>
          <div className="about--skills__content">
            <div className="about--skills__content__item">
              <div className="about--skills__content__item__icon">
                <i className="fab fa-html5"></i>
              </div>
              <div className="about--skills__content__item__text">
                <h2 className="about--skills__content__item__text__head">
                  HTML
                </h2>
                <p className="about--skills__content__item__text__desc">
                  I have a good understanding of HTML and how it works.
                </p>
            </div>

          </div>
    </div>
  );
};

export default AboutMe;
