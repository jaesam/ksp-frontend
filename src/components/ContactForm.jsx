import React from "react";
import axios from "axios";
import { Formik } from "formik";

function ContactForm() {
  function handleSubmit(values) {
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: values
    }).then(response => {
      if (response.data.status === "success") {
        alert("Message Sent.");
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        msg: ""
      }}
      onSubmit={handleSubmit}
    >
      {props => (
        <form id="contact-form" onSubmit={props.handleSubmit} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              value={props.values.name}
              name="name"
              onChange={props.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={props.values.email}
              name="email"
              onChange={props.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              value={props.values.msg}
              name="msg"
              onChange={props.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}

export default ContactForm;
