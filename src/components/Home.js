import React, { Component } from "react";
import "../App.css";
import profile from "../img/profile.png";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      <div>
      <div className="home">
          <div className="profileDiv">
            <img className="profilePic" src={profile} alt=""/>
          </div>
          <div className="introDiv">
            <h1 className="intro">Hi! I&apos;m Kevin Castillo, pleasure to meet you!</h1>
            <h2 className="intro">
              I&apos;m a Full Stack Developer with a passion for coding &amp; design!
            </h2>
            <button type="button" className="btn btn-light mt-3" onClick={() => this.props.history.push("/projects")}>Check out my projects!</button>
          </div>
      </div>
      <Skills />
      <About />
      <Contact />
      </div>
    );
  }
}

export default Home;
