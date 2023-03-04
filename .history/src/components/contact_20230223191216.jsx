import React, { useState} from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, message);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  }

  return (
    <div className="contact">
      <div className="contact--header">
        <h1 className="contact--header__title">Contact</h1>
        <p className="contact--header__subtitle">Get in touch</p>
      </div>
      <div className="contact--content">
        <div className="contact--content__left">
          <h2 className="contact--content__left__title">Contact Form</h2>
          <p className="contact--content__left__subtitle">Send me a message let's talk👋</p>
          <form className="contact--content__left__form" onSubmit={handleSubmit}>
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
                value={name}
                onChange={handleChange}
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
                value={email}
                onChange={handleChange}
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
                value={message}
                onChange={handleChange}
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
          {/* <div className="contact--content__social">
            <a href="#">LinkedIn</a>
            <a href="#">Github</a>
            <a href="#">Twitter</a>
          </div>
        </div> */}
      </div>
    </div>
    <div className="contact--location">
        <h2 className="contact--location__title">Locate Me</h2>
      <div className="contact--location__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d3.3515629999999997!3d6.524444000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f7e7b5c3b3b%3A0x9b2f3b2b2b2b2b2b2!2sAsaba%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1621361000000!5m2!1sen!2sng"
          title="Location Map"
          // width="600"
          // height="450"
          // style={{ border: 0 }}
          // allowfullscreen=""
          loading="lazy"
        ></iframe>
        </div>
        </div>
    </div>
  );
};

export default Contact;
