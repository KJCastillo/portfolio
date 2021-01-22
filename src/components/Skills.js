import React, { Component } from "react";
import "../App.css";
import frontendLogo from "../img/frontendLogo.png";
import backendLogo from "../img/backendLogo.png";
import otherLogo from "../img/otherLogo.png";

class Skills extends Component {
  render() {
    return (
      <div className="Skills container-fluid bg-white" id="skills">
        <div className="text-center">
          <h1>Skills</h1>
        </div>
        <div className="card-deck justify-content-center pt-4">
        <div className="frontendSkills">
          <div className="card border-0 flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={frontendLogo}
                  alt="Avatar"
                  style={{ width: "300px", height: "430px" }}
                />
              </div>
              <div className="flip-card-back">
                <ul>
                  <li>
                    <img
                      className="icons"
                      src="https://img.icons8.com/color/48/000000/html-5.png"
                      alt="icons"
                    />
                    HTML 5
                  </li>
                  <li>
                    <img
                      className="icons"
                      src="https://img.icons8.com/color/48/000000/css3.png"
                      alt="icons"
                    />
                    CSS
                  </li>
                  <li>
                    <img
                      className="icons"
                      src="https://img.icons8.com/color/48/000000/javascript.png"
                      alt="icons"
                    />
                    JavaScript
                  </li>
                  <li>
                    <img
                      className="icons"
                      src="https://img.icons8.com/color/48/000000/bootstrap.png"
                      alt="icons"
                    />
                    Bootstrap
                  </li>
                  <li>
                    <img
                      className="icons"
                      src="https://img.icons8.com/ios-filled/50/000000/jquery.png"
                      alt="icons"
                    />
                    jQuery
                  </li>
                  <li>
                    <img
                      className="icons"
                      src="https://img.icons8.com/color/48/000000/react-native.png"
                      alt="icons"
                    />
                    React.js
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="backendSkills">
          <div className="card border-0 flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={backendLogo}
                  alt="Avatar"
                  style={{ width: "300px", height: "430px" }}
                />
              </div>
              <div className="flip-card-back">
                <ul>
                  <li className="backList">
                    <img
                      className="icons"
                      src="https://img.icons8.com/plumpy/48/000000/test-tube.png"
                      alt="icons"
                    />
                    Flask
                  </li>
                  <li>
                    <img
                      className="icons"
                      src="https://img.icons8.com/color/48/000000/python.png"
                      alt="icons"
                    />
                    Python
                  </li>
                  <li>
                    <img
                      className="icons"
                      src="https://img.icons8.com/color/48/000000/sql.png"
                      alt="icons"
                    />
                    SQL
                  </li>
                  <li>
                    <img
                      className="icons"
                      src="https://img.icons8.com/color/48/000000/api.png"
                      alt="icons"
                    />
                    REST API
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="otherSkills">
          <div className="card border-0 flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={otherLogo}
                  alt="Avatar"
                  style={{ width: "300px", height: "430px" }}
                />
              </div>
              <div className="flip-card-back">
                <ul>
                  <li className="otherList">
                    <img
                      className="icons"
                      src="https://img.icons8.com/color/48/000000/git.png"
                      alt="icons"
                    />
                    Git
                  </li>
                  <li>
                    <img
                      className="icons"
                      src="https://img.icons8.com/fluent/48/000000/github.png"
                      alt="icons"
                    />
                    Github
                  </li>
                  <li>
                    <img
                      className="icons"
                      src="https://img.icons8.com/color/48/000000/heroku.png"
                      alt="icons"
                    />
                    Heroku
                  </li>
                  <li>
                    <img
                      className="icons"
                      src="https://img.icons8.com/fluent/48/000000/adobe-photoshop.png"
                      alt="icons"
                    />
                    Adobe Photoshop
                  </li>
                  <li>
                    <img
                      className="icons"
                      src="https://img.icons8.com/color/48/000000/adobe-illustrator.png"
                      alt="icons"
                    />
                    Adobe Illustrator
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Skills;
