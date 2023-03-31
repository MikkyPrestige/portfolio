// FOOTER COMPONENT

import React from 'react';
import Avatar from './avatar';
import MoreThan from '../assets/images/icon-more-than.svg';
import LessThan from '../assets/images/icon-less-than.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer--line">{""}</p>
      <div className='footer--container'>
        <div className="footer--container__content">
          <div className="footer--container__content__contact">
            <div className="footer--container__content__contact--details">
              <div className="footer--container__content__contact--details__top">
              <div className="footer--container__content__contact--details__top--logo">
              <Avatar
                image={LessThan}
                alt="Less Than Icon"
                style={{ width: "1.3rem", height: "1.3rem" }}
              />
            <span cclassName="footer--container__content__contact--details__top--logo--span">
              ELUE
            </span>
            <span className="footer--container__content__contact--details__top--logo--span">
              MICHAEL
            </span>
            <span className="footer--container__content__contact--details__top--logo--span">
              /
            </span>
              <Avatar
                image={MoreThan}
                alt="More Than Icon"
                style={{ width: "1.3rem", height: "1.3rem" }}
              />
            </div>
            <p className="footer--container__content__contact--details__email">
              <a href="mailto: michaelelue117@gmail.com" className="footer--container__content__contact--details__email--link" >
                michaelelue117@gmail.com
              </a>
            </p>
              </div>
              <div className="footer--container__content__contact--details__bottom">
              <p className="footer--container__content__contact--details__bottom--text">
                I am a software developer with a passion for creating beautiful and functional user interfaces. I am currently looking for an internship position as a front-end developer.
              </p>
            </div>
            </div>
            <div className="footer--container__content__contact--media">
              <h2 className="footer--container__content__contact--media--title">Media</h2>
              <div className="footer--container__content__contact--media--links">
                <a href="https://github.com/MeekyBerry"
                  className="footer--container__content__contact--media--links--link"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/mikkylanky/"
                  className="footer--container__content__contact--media--links--link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://meekyberry.hashnode.dev/"
                  className="footer--container__content__contact--media--links--link"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="786382582220193803"
                  className="footer--container__content__contact--media--links--link"
                >
                  <i className="fab fa-instagram"></i>
                </a>
            </div>
            </div>
          </div>
          </div>
          <div className="footer--conatainer__copyright">
            <p className="footer--conatainer__copyright--text">
              &copy; 2020 Elue Michael
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;