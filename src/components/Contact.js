import React, { Component } from "react";
import "../App.css";
import emailjs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "emailjs-template",
        ".contact_form_class",
        "user_dM7tFzM7g30yVg1XTAiM5"
      )
      .then()
      .catch();
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    e.target.reset();
  };

  render() {
    return (
      <div className="Contact" id="contact">
        <div className="text-center contactTitle">
          <h1>Contact</h1>
        </div>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="contact_form_class"
        >
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <div className="form-group">
                <label className="form-label" htmlFor="exampleInputEmail1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.name}
                  aria-describedby="Name"
                  placeholder="Full Name"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="exampleInputEmail1">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="exampleInputSubject1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  value={this.state.subject}
                  aria-describedby="subjectHelp"
                  placeholder="Subject"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label
                  className="form-label"
                  htmlFor="exampleFormControlTextarea1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  value={this.state.message}
                  rows="3"
                  onChange={this.handleChange.bind(this)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
