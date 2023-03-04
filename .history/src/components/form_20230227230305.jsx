import React, { useState } from "react";

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
    <div className="form">
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
          <button type="submit">Send me a message let's talk👋</button>
        </div>
        {success && <p className="success">Message sent successfully</p>}
      </form>
    </div>
  );
};

export default Form;
