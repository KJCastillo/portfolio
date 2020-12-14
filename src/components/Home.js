import React, { Component } from "react";
import "../App.css";
import profile from "../img/profile.png";

class Home extends Component {
  render() {
    return (
      <div className="home">
          <div className="profileDiv">
            <img className="profilePic" src={profile} alt=""/>
          </div>
          <div className="introDiv">
            <h1 className="intro">Hi! I&apos;m Kevin Castillo, pleasure to meet you!</h1>
            <h4 className="intro">
              I&apos;m a Full Stack Developer with a passion for coding!
            </h4>
          </div>
      </div>
    );
  }
}

export default Home;
