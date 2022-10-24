import React, { Component } from "react";
import "../App.css";
import "../css/Skills.css";
import profile from "../img/profile.png";
//import frontendLogo from "../img/frontendLogo.png";
// import backendLogo from "../img/backendLogo.png";
// import otherLogo from "../img/otherLogo.png";

class Skills extends Component {
  render() {
    return (
      <div className="Skills container-fluid" id="skills">
        <div className="title text-center pb-3">
          <h1>Skills</h1>
        </div>

        <div className="flex-container">
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <div className="row">
                <div className="img-div col-4">
                  <img
                    src={profile}
                    alt="profile-pic"
                    width="350px"
                    height="360px"
                  />
                </div>
                <div className="col-8">
                  <div className="skills-section">
                    <ul className="skills-list wrap">
                      <li className="skill">HTML</li>
                      <li className="skill">CSS</li>
                      <li className="skill">Bootstrap</li>
                      <li className="skill">JavaScript</li>
                      <li className="skill">jQuery</li>
                      <li className="skill">React</li>
                      <li className="skill">Python</li>
                      <li className="skill">Node.js</li>
                      <li className="skill">NPM</li>
                      <li className="skill">REST API</li>
                      <li className="skill">Object Oriented Programming</li>
                      <li className="skill">Databases</li>
                      <li className="skill">Firebase</li>
                      <li className="skill">Adobe Photoshop</li>
                      <li className="skill">Github</li>
                    </ul>
                  </div>
                  <div className="small-bio">
                    <h2 className="title pt-5 pb-3">I love building stuff</h2>
                    <p>
                      Whether it was Legos or airplane models, I always loved
                      using my brain and hands to create something from scratch.
                      And after coming across coding, I was all in! Being able
                      to problem solve and create responsive and dynamic web
                      sites has become so much more than a career path, but a
                      passion.
                    </p>
                    <button className="bio-button">Keep reading my bio</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="card-deck justify-content-center pt-4">
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
        </div> */}
      </div>
    );
  }
}

export default Skills;
