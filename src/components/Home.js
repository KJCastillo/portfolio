import React, { Component } from "react";
import "../App.css";
import "../css/Home.css";
import Pdf from "../pdf/Resume.pdf";
import Skills from "./Skills";
import Projects from "./Projects";

class Home extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid p-0 context">
        <div className="home d-flex container-fluid">
          <div className="row text-left pl-5 justify-content-center align-self-center">
            <div className="col-sm ">
              <h1 className="intro">
                Hi! I&apos;m Kevin Castillo | Web Developer
              </h1>
              <h2 className="intro pt-2">
                Explorer 🗺 Creator 👨🏻‍💻 Lifelong Learner 🎓 Jiu Jitsu Enthusiast 🥋
              </h2>
              <div className="pt-3">
                <a
                  className="pr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={Pdf}
                >
                  <img
                    className="resume-icon"
                    height="40"
                    alt="resume"
                    src="https://img.icons8.com/nolan/64/open-resume.png"
                  />
                </a>
                <a
                  className="pr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/kevinjcastillo/"
                >
                  <img
                    className="linkedin-icon"
                    height="40"
                    alt="linkedin"
                    src="https://img.icons8.com/nolan/64/linkedin.png"
                  />
                </a>
                <a
                  className="pr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.github.com/kjcastillo/"
                >
                  <img
                    className="github-icon"
                    height="40"
                    alt="linkedin"
                    src="https://img.icons8.com/nolan/64/github.png"
                  />
                </a>
                <a
                  className="pr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:kevincastillo318@gmail.com?subject=Hello! Let's connect!"
                >
                  <img
                    className="email-icon"
                    height="40"
                    alt="linkedin"
                    src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-mail-politic-icongeek26-outline-gradient-icongeek26.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default Home;
