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
                

            </div>

  )