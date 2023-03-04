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
    