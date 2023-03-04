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
              <label className="contact--content__left__form__group__label" htmlFor="name">Name</label>
              <input className="contact--content__left__form__group__input" type="text" name="name" id="name" />

    </div>
  );
}

export default Contact;