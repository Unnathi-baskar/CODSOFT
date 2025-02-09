import React, { useState } from "react";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('SEND');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setTimeout(() => {
      setButtonText("SEND");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully!" });
    }, 2000);
  };

  return (
    <section className="skill" id="skills">
    <div className="contact-container">
      <div className="contact-header">LET'S CONNECT</div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            placeholder="First Name"
            value={formDetails.firstName}
            onChange={(e) => onFormUpdate('firstName', e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formDetails.lastName}
            onChange={(e) => onFormUpdate('lastName', e.target.value)}
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            placeholder="Email Address"
            value={formDetails.email}
            onChange={(e) => onFormUpdate('email', e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone No."
            value={formDetails.phone}
            onChange={(e) => onFormUpdate('phone', e.target.value)}
          />
        </div>
        <div className="form-row">
          <textarea
            rows="4"
            placeholder="Message"
            value={formDetails.message}
            onChange={(e) => onFormUpdate('message', e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          {buttonText}
        </button>
        {status.message && (
          <p className={`status-msg ${status.success ? "success" : "error"}`}>
            {status.message}
          </p>
        )}
      </form>
    </div>
    </section>
  );
};
