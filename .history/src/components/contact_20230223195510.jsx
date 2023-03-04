import React, { useState } from "react";

const Contact = () => {
  // CREATE A STATE FOR THE FORM
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // ERROR STATE
  const [error, setError] = useState({});

  // SUCCESS STATE
  const [success, setSuccess] = useState(false);

  // RESET STATE
  const [reset, setReset] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // CREATE A FUNCTION TO HANDLE THE FORM INPUTS
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // CREATE A FUNCTION TO VALIDATE FORM
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    if (!form.fullName.trim()) {
      formIsValid = false;
      errors.fullName = "Name is required";
    }
    if (!form.email.trim()) {
      formIsValid = false;
      errors.email = "Email is required";
    }
    if (!form.message.trim()) {
      formIsValid = false;
      errors.message = "Message is required";
    }
    setError(errors);
    return formIsValid;
  };

  // CREATE A FUNCTION TO HANDLE THE FORM SUBMISSION
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(form);
      setSuccess(true);
      setForm(reset);
    }
  };

  return (
    <div className="contact">
      <div className="contact--header">
        <h1 className="contact--header__title">Contact</h1>
        <p className="contact--header__subtitle">Get in touch</p>
      </div>
      <div className="contact--content">
        <div className="contact--content__left">
          <h2 className="contact--content__left__title">Contact Form</h2>
          <p className="contact--content__left__subtitle">
            Send me a message let's talk👋
          </p>
          <form
            className="contact--content__left__form"
            onSubmit={handleFormSubmit}
          >
            <div className="contact--content__left__form__group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Please Enter your full name"
                value={form.fullName}
                onChange={handleFormChange}
              />
              <p className="error">{error.fullName}</p>
            </div>
            <div className="contact--content__left__form__group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Please Enter your email address"
                value={form.email}
                onChange={handleFormChange}
              />
              <p className="error">{error.email}</p>
            </div>
            <div className="contact--content__left__form__group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                // cols="30"
                // rows="10"
                placeholder="Please Enter your message"
                value={form.message}
                onChange={handleFormChange}
              ></textarea>
              <p className="error">{error.message}</p>
            </div>
            <div className="contact--content__left__form__group">
              <button type="submit">Send Message</button>
            </div>
            {success && <p className="success">Message sent successfully</p>}
          </form>
        </div>
        <div className="contact--content__right">
          <h2 className="contact--content__right__title">Contacts</h2>
          <p className="contact--content__right__subtitle">
            If you liked my work and you need me, I'm ready to talk to you.
          </p>
          <div className="contact--content__right__info">
            <div className="contact--content__right__info__item">
              <p className="contact--content__right__info__item__text">
                <a href="tel: 08030849685">+2348030849685</a>
              </p>
            </div>
            <div className="contact--content__right__info__item">
              <p className="contact--content__right__info__item__text">
                <a href="mailto: michaelelue117@gmail.com">
                  michaelelue117@gmail.com
                </a>
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
