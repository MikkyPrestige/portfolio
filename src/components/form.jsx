import React, { useState } from "react";
import { database, ref, set } from "../config";
import Avatar from "./avatar";
import ThumbsUp from "../assets/images/thumbs-up.png";
import { Zoom } from "react-awesome-reveal";
/** @jsxImportSource theme-ui */

const Form = () => {
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
  const [fullNameSuccess, setFullNameSuccess] = useState("");

  // RESET STATE
  const [reset] = useState({
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
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      formIsValid = false;
      errors.email = "Please enter a valid email address";
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
      sendMessage(form);
      setFullNameSuccess(form.fullName);
      setForm(reset);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFullNameSuccess("");
      }, 15000);
    }
  };

  // SEND FORM DATA TO FIREBASE
  const sendMessage = (form) => {
    set(ref(database, "messages/" + Math.floor(Math.random() * 10000000)), {
      fullName: form.fullName,
      email: form.email,
      message: form.message,
    });
  };

  // FUNCTION TO REMOVE POPUP
  const removePopup = () => {
    setSuccess(false);
  };

  return (
    <section
      sx={{
        backgroundColor: "background",
        color: "text",
      }}
      className="form"
    >
      {success && (
        <aside className="form--popup">
          <div className="form--popup__wrapper">
            <div className="form--popup__avatar">
              <Avatar
                image={ThumbsUp}
                alt="Thumbs Up"
                style={{ width: "100%", height: "100%", ObjectFit: "cover" }}
              />
            </div>
            <div className="form--popup__content">
              <p className="form--popup__content--msg">
                Thank you{" "}
                <strong>
                  <em>{fullNameSuccess}</em>
                </strong>{" "}
                for sending a message, I will get back to you as soon as
                possible.
              </p>
              <button
                onClick={removePopup}
                className="form--popup__content--btn"
              >
                Okay!
              </button>
            </div>
          </div>
        </aside>
      )}
      <form
        action=""
        method="POST"
        className="form--content"
        onSubmit={handleFormSubmit}
      >
        <div className="form--content__container margin-bottom-1">
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="enter your full name"
            value={form.fullName}
            autoComplete="on"
            onChange={handleFormChange}
            className="form--content__input"
          />
          <label htmlFor="fullName" className="form--content__label">
            Name
          </label>
          <Zoom duration={3000}>
            {error.fullName && (
              <p className="form--content__error">{error.fullName}</p>
            )}
          </Zoom>
        </div>
        <div className="form--content__container margin-bottom-1">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email (username@example.com)"
            value={form.email}
            autoComplete="off"
            onChange={handleFormChange}
            className="form--content__input"
          />
          <label htmlFor="email" className="form--content__label">
            Email
          </label>
          <Zoom duration={3000}>
            {error.email && (
              <p className="form--content__error">{error.email}</p>
            )}
          </Zoom>
        </div>
        <div className="form--content__container">
          <textarea
            name="message"
            id="message"
            placeholder="enter your message"
            value={form.message}
            onChange={handleFormChange}
            className="form--content__input form--content__msg"
          ></textarea>
          <label htmlFor="message" className="form--content__label">
            Message
          </label>
          <Zoom duration={3000}>
            {error.message && (
              <p className="form--content__error">{error.message}</p>
            )}
          </Zoom>
        </div>
        <div className="form--content__container">
          <button type="submit" className="form--content__btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
