import React, { useState } from "react";
import { useColorMode } from "theme-ui";
import { database, ref, set } from "../config";
import emailjs from "@emailjs/browser";
import Avatar from "./avatar";
import ThumbsUp from "../assets/images/thumbs-up.webp";
import { Zoom } from "react-awesome-reveal";
/** @jsxImportSource theme-ui */

const Form = () => {
  const [colorMode] = useColorMode();
  const themeClass = colorMode === "dark" ? "theme-dark" : "";

  const initialForm = {
    fullName: "",
    email: "",
    message: "",
  };

  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [fullNameSuccess, setFullNameSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (error[name]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!form.fullName.trim()) errors.fullName = "Name is required";
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) errors.message = "Message is required";

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.fullName,
          reply_to: form.email,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY
      );

      try {
        await set(ref(database, `messages/${crypto.randomUUID()}`), form);
      } catch (dbErr) {
        console.warn("Firebase logging failed, but email was sent.", dbErr);
      }

      setFullNameSuccess(form.fullName);
      setForm(initialForm);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setFullNameSuccess("");
      }, 8000);
    } catch (err) {
      console.error("Critical submission error:", err);
      setSubmitError("Communication failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const removePopup = () => {
    setSuccess(false);
  };

  return (
    <section
      sx={{
        backgroundColor: "background",
        color: "text",
      }}
      className={`form ${themeClass}`}
    >
      {success && (
        <aside className="form--popup" role="status" aria-live="polite">
          <div className="form--popup__wrapper">
            <div className="form--popup__avatar">
              <Avatar
                image={ThumbsUp}
                alt="Thumbs Up"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="form--popup__content">
              <p className="form--popup__content--msg">
                Thank you{" "}
                <strong>
                  <em>{fullNameSuccess}</em>
                </strong>{" "}
                for sending a message. I will get back to you as soon as possible.
              </p>
              <button
                onClick={removePopup}
                className="form--popup__content--btn"
                type="button"
              >
                Okay
              </button>
            </div>
          </div>
        </aside>
      )}

      <form className="form--content" onSubmit={handleFormSubmit} noValidate>
        <div className="form--content__container margin-bottom-1">
          <label htmlFor="fullName" className="form--content__label">
            Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter your full name"
            value={form.fullName}
            autoComplete="name"
            onChange={handleFormChange}
            className="form--content__input"
            disabled={isSubmitting}
            aria-invalid={!!error.fullName}
            aria-describedby={error.fullName ? "fullName-error" : undefined}
          />
          <Zoom duration={300}>
            {error.fullName && (
              <p id="fullName-error" className="form--content__error" role="alert">
                {error.fullName}
              </p>
            )}
          </Zoom>
        </div>

        <div className="form--content__container margin-bottom-1">
          <label htmlFor="email" className="form--content__label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email (you@example.com)"
            value={form.email}
            autoComplete="email"
            onChange={handleFormChange}
            className="form--content__input"
            disabled={isSubmitting}
            aria-invalid={!!error.email}
            aria-describedby={error.email ? "email-error" : undefined}
          />
          <Zoom duration={300}>
            {error.email && (
              <p id="email-error" className="form--content__error" role="alert">
                {error.email}
              </p>
            )}
          </Zoom>
        </div>

        <div className="form--content__container">
          <label htmlFor="message" className="form--content__label">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Tell me about your project or opportunity..."
            value={form.message}
            onChange={handleFormChange}
            className="form--content__input form--content__msg"
            disabled={isSubmitting}
            aria-invalid={!!error.message}
            aria-describedby={error.message ? "message-error" : undefined}
          />
          <Zoom duration={300}>
            {error.message && (
              <p id="message-error" className="form--content__error" role="alert">
                {error.message}
              </p>
            )}
          </Zoom>
        </div>

        {submitError && (
          <p className="form--content__error margin-top-1" role="alert">
            {submitError}
          </p>
        )}

        <div className="form--content__container">
          <button type="submit" className="form--content__btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;