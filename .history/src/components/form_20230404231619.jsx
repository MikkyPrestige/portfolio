import React, { useState } from "react";
import { database, ref, set } from "../config";

const Form = () => {
  // CREATE A STATE FOR THE FORM
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    // title: "",
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
    // title: "",
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
    // if (!form.title.trim()) {
    //   formIsValid = false;
    //   errors.title = "Title is required";
    // }
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
      sendMessage(form);
      // alert(
      //   `Thank you ${form.fullName} for your message, I will get back to you shortly`
      // );
      setSuccess(true);
      setForm(reset);
    }
  };

  // SEND FORM DATA TO FIREBASE
  const sendMessage = (form) => {
    set(ref(database, 'users/' + Math.floor(Math.random() * 10000000)), {
      fullName: form.fullName,
      email: form.email,
      // title: form.title,
      message: form.message,
    });
  };


  return (
    <div className="form">
      <form action="" method= "POST" className="form--content" onSubmit={handleFormSubmit}>
        <div className="form--content__container margin-bottom-1">
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Please enter your full name"
            value={form.fullName}
            onChange={handleFormChange}
            className="form--content__input"
          />
          <label htmlFor="fullName" className="form--content__label">
            Full Name
          </label>
          <p className="form--content__error">{error.fullName}</p>
        </div>
        <div className="form--content__container margin-bottom-1">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please enter your email address"
            value={form.email}
            onChange={handleFormChange}
            className="form--content__input"
          />
          <label htmlFor="email" className="form--content__label">
            Email Address
          </label>
          <p className="form--content__error">{error.email}</p>
        </div>
        {/* <div className="form--content__container margin-bottom-1">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Please enter your message title"
            value={form.title}
            onChange={handleFormChange}
            className="form--content__input"
          />
          <label htmlFor="title" className="form--content__label">
            Title
          </label>
          <p className="form--content__error">{error.title}</p>
        </div> */}
        <div className="form--content__container">
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Please enter your message"
            value={form.message}
            onChange={handleFormChange}
            className="form--content__input form--content__msg"
          ></textarea>
          <label htmlFor="message" className="form--content__label">
            Message
          </label>
          <p className="form--content__error">{error.message}</p>
        </div>
        <div className="form--content__container">
          <button type="submit" className="form--content__btn">
            Send Message
          </button>
        </div>
        {/* {success && (
          <p className="form--content__success">Message sent successfully</p>
        )} */}
      </form>
    </div>
  );
};

export default Form;