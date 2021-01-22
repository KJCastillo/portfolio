import React, { Component } from "react";
import "../App.css";
import profile from "../img/profile.png";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <div className="home jumbotron-fluid">
          <div className="jumbotron-row row text-center">
            <div className="col-sm-4">
              <img
                className="profilePic ml-5 mt-1 rounded-circle"
                height="300"
                src={profile}
                alt=""
              />
            </div>
            <div className="col-sm">
              <h1 className="intro pt-5">
                Hi! I&apos;m Kevin Castillo, pleasure to meet you!
              </h1>
              <h2 className="intro pt-2">
                I&apos;m a Full Stack Developer with a passion for coding &amp;
                design!
              </h2>
              <button
                type="button"
                className="btn btn-light btn-sm mt-3"
                onClick={() => this.props.history.push("/projects")}
              >
                Check out my projects!
              </button>
            </div>
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
