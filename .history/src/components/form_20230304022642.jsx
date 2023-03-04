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
      // alert(`Thank you ${form.fullName} for your message, I will get back to you shortly`);
      alert(success && <p className="form--content__success">Message sent successfully</p>)
      setSuccess(true);
      setForm(reset);
    }
  };

  return (
    <div className="form">
       <form
            className="form--content"
            onSubmit={handleFormSubmit}
          >
            <div className="form--content__container">

              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Please enter your full name"
                value={form.fullName}
                onChange={handleFormChange}
                className="form--content__input"
              />
              <label htmlFor="fullName" className="form--content__label">Full Name</label>
              <p className="form--content__error">{error.fullName}</p>
            </div>
            <div className="form--content__container">

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Please enter your email address"
                value={form.email}
                onChange={handleFormChange}
                className="form--content__input"
              />
              <label htmlFor="email" className="form--content__label">Email Address</label>
              <p className="form--content__error">{error.email}</p>
            </div>
            <div className="form--content__container">
              <textarea
                name="message"
                id="message"
                // cols="30"
                rows="5"
                placeholder="Please enter your message"
                value={form.message}
                onChange={handleFormChange}
                className="form--content__input form--content__msg"
              ></textarea>
              <label htmlFor="message" className="form--content__label">Message</label>
              <p className="form--content__error">{error.message}</p>
            </div>
            <div className="form--content__container">
              <button type="submit" className="form--content__btn">Send Message</button>
            </div>
            {/* {success && <p className="form--content__success">Message sent successfully</p>} */}
          </form>
    </div>
  );
};

export default Form;