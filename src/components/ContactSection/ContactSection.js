import React, { useState } from "react";
import "./ContactSection.css";
import no_image from "../../media/no_image.jpg";

const ContactSection = () => {
  //states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //handler functions
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  //submit function
  const handleSubmit = (e) => {
    if (name == "" || email == "" || message == "") {
      alert("Fill in the required fields");
    } else {
      alert("Thank you " + name);
    }
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact-section">
      <div className="form-container">
        <div className="form-contact-box">
          <div className="contact-heading">
            <h3>CONTACT US</h3>
            <p>Please fill out the required fields to get in touch with us.</p>
          </div>

          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label htmlFor="name">Name(required)</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              value={name}
              required
              onChange={(e) => {
                handleNameChange(e);
              }}
            />
            <br />
            <br />
            <label htmlFor="email">Email(required)</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              value={email}
              required
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
            <br />
            <br />
            <label htmlFor="message">Message(required)</label>
            <br />
            <textarea
              id="message"
              name="message"
              className="input"
              value={message}
              required
              onChange={(e) => {
                handleMessageChange(e);
              }}
            />
            <br />
            <br />
            <div className="submit-btn-div">
              <input type="submit" value="SEND MESSAGE" className="submit" />
            </div>
          </form>
        </div>
        <div className="contact-address">
          <img src={no_image} alt="contact address" />
          <div className="contact-text">
            <h6>
              DAZZLE JENCC HOMES AND ACCESSORIES
              <br />
              Silverline Plaza, Garki 2, Abuja, Nigeria
              <br />
              Tel: +234 8033022061
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
