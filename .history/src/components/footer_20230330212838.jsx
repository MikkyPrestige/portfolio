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
            <div className="form--content__container__contact--details">
              <div className="footer--content__container--details__logo">
              <Avatar
                image={LessThan}
                alt="Less Than Icon"
                style={{ width: "1.3rem", height: "1.3rem" }}
              />
            <span className="layout--header__title__content__span--2">
              ELUE
            </span>
            <span className="layout--header__title__content__span--3">
              MICHAEL
            </span>
            <span className="layout--header__title__content__span">
              /
            </span>
              <Avatar
                image={MoreThan}
                alt="More Than Icon"
                style={{ width: "1.3rem", height: "1.3rem" }}
              />
            </div>
  )