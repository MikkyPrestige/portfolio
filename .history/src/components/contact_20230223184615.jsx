import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact--header">
        <h1 className="contact--header__title">Contact</h1>
        <p className="contact--header__subtitle">Get in touch</p>
      </div>
      <div className="contact--content">
        <div className="contact--content__left">
          <h2 className="contact--content__left__title">Contact Form</h2>
          <p className="contact--content__left__subtitle">Send me a message</p>
          <form className="contact--content__left__form">
            <div className="contact--content__left__form__group">
              <label
                className="contact--content__left__form__group__label"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="contact--content__left__form__group__input"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="contact--content__left__form__group">
              <label
                className="contact--content__left__form__group__label"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="contact--content__left__form__group__input"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="contact--content__left__form__group">
              <label
                className="contact--content__left__form__group__label"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="contact--content__left__form__group__input"
                name="message"
                id="message"
                // cols="30"
                // rows="10"
              ></textarea>
            </div>
            <button
              className="contact--content__left__form__button"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="contact--content__right">
          <h2 className="contact--content__right__title">Contacts</h2>
          <p className="contact--content__right__subtitle">If you liked my work and you need me, I'm ready to talk to you.</p>
          <div className="contact--content__right__info">
            <div className="contact--content__right__info__item">
              <p className="contact--content__right__info__item__text">
                <a href="tel: 08030849685">+2348030849685</a>
              </p>
            </div>
            <div className="contact--content__right__info__item">
              <p className="contact--content__right__info__item__text">
                <a href="mailto: michaelelue117@gmail.com">michaelelue117@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="contact--content__social">
            <a href="#">LinkedIn</a>
            <a href="#">Github</a>
            <a href="#">Twitter</a>
            <a href="#"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
