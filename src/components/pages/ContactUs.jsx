import React from "react";
import ContactForm from "../ContactForm";
import { ReactComponent as ContactUsImage } from "../../icons/contact.svg";

function ContactUs() {
  return (
    <section className="contact">
      <div className="contactForm-container">
        <h2>Contact Us</h2>
        <ContactForm />
      </div>
      <ContactUsImage />
    </section>
  );
}

export default ContactUs;
