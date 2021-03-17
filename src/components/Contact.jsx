import React from "react";
import "../styles/contact.scss";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit] = useForm("mbjpnbqj");

  return (
    <>
      <div className="placeholder-div" id="contact"></div>
      <div className="contact-div">
        <h1>Contact Me</h1>
        {state.succeeded ? (
          <div className="contact-form after-submit">
            <h2>Thanks for getting in touch!</h2>
            <p>I will get back to you as soon as I can!</p>
          </div>
        ) : (
          <>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Email Address:</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message to me!"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className="submit-button-div">
                <button
                  className="submit-button"
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
        <div className="icon-div">
          <a
            href="https://github.com/derricklai33"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/derrick-laijy/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/cout_Derrick"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
}
