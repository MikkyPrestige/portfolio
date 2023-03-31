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
            <div className="footer--content__container__contact--details">
              <div className="footer--content__container--details__top">
              <div className="footer--content__container--details__top--logo">
              <Avatar
                image={LessThan}
                alt="Less Than Icon"
                style={{ width: "1.3rem", height: "1.3rem" }}
              />
            <span cclassName="footer--content__container--details__top--logo--span">
              ELUE
            </span>
            <span className="footer--content__container--details__top--logo--span">
              MICHAEL
            </span>
            <span className="footer--content__container--details__top--logo--span">
              /
            </span>
              <Avatar
                image={MoreThan}
                alt="More Than Icon"
                style={{ width: "1.3rem", height: "1.3rem" }}
              />
            </div>
            <p className="footer--content__container--details__email">
              <a href="mailto: michaelelue117@gmail.com" className="footer--content__container--details__email--link" >
                michaelelue117@gmail.com
              </a>
            </p>
              </div>
            </div>
            <div className="footer--content__container--details__into">
              <p className="footer--content__container--details__into--text">
                I am a software developer with a passion for creating beautiful and functional user interfaces. I am currently looking for an internship position as a front-end developer.
              </p>
            </div>
          </div>
          </div>

  )