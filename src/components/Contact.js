import React, { Component } from "react";
import "../App.css";
import emailjs from "emailjs-com";

class Contact extends Component {
    constructor(props){
    super(props);
    this.state = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
  handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_udkb3i8", "contact_form_class", "user_dM7tFzM7g30yVg1XTAiM5")
      .then()
      .catch();
      this.setState({
          name: "",
          email: "",
          subject: "",
          message: ""
      })  
      e.target.reset()
  }

  render() {
    return (
      <div className="Contact" id="contact">
        <div className="contactTitle">
          <h1>Contact</h1>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)} className="contact_form_class">
          <div class="form-group">
            <label for="exampleInputEmail1">Full Name</label>
            <input
              type="text"
              name="name"
              class="form-control"
              value={this.state.name}
              aria-describedby="Name"
              placeholder="Full Name"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              class="form-control"
              value={this.state.email}
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputSubject1">Subject</label>
            <input
              type="text"
              name="subject"
              class="form-control"
              value={this.state.subject}
              aria-describedby="subjectHelp"
              placeholder="Subject"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
            name="message"
              class="form-control"
              value={this.state.message}
              rows="3"
              onChange={this.handleChange.bind(this)}
            ></textarea>
          </div>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Contact;
