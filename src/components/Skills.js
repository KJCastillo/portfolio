import React, { Component } from "react";
import "../App.css";

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <div>
          <h1 className="skillsTitle">Skills</h1>
        </div>
        <div className="frontendSkills">
          <h1 className="titleSkills">Frontend</h1>
          <ul>
            <li><img className="icons" src="https://img.icons8.com/color/48/000000/html-5.png"/>HTML 5</li>
            <li><img className="icons" src="https://img.icons8.com/color/48/000000/css3.png"/>CSS</li>
            <li><img className="icons" src="https://img.icons8.com/color/48/000000/javascript.png"/>JavaScript</li>
            <li><img className="icons" src="https://img.icons8.com/color/48/000000/bootstrap.png"/>Bootstrap</li>
            <li><img className="icons" src="https://img.icons8.com/ios-filled/50/000000/jquery.png"/>jQuery</li>
            <li><img className="icons" src="https://img.icons8.com/color/48/000000/react-native.png"/>React.js</li>
          </ul>
        </div>
        <div className="backendSkills">
          <h1 className="titleSkills">Backend</h1>
          <ul>
            <li><img className="icons" src="https://img.icons8.com/plumpy/48/000000/test-tube.png"/>Flask</li>
            <li><img className="icons" src="https://img.icons8.com/color/48/000000/python.png"/>Python</li>
            <li><img className="icons" src="https://img.icons8.com/color/48/000000/sql.png"/>SQL</li>
            <li><img className="icons" src="https://img.icons8.com/color/48/000000/api.png"/>REST API</li>
          </ul>
        </div>
        <div className="otherSkills">
          <h1 className="titleSkills">Other</h1>
          <ul>
            <li><img className="icons" src="https://img.icons8.com/color/48/000000/git.png"/>Git</li>
            <li><img className="icons" src="https://img.icons8.com/fluent/48/000000/github.png"/>Github</li>
            <li><img className="icons" src="https://img.icons8.com/color/48/000000/heroku.png"/>Heroku</li>
            <li><img className="icons" src="https://img.icons8.com/fluent/48/000000/adobe-photoshop.png"/>Adobe Photoshop</li>
            <li><img className="icons" src="https://img.icons8.com/color/48/000000/adobe-illustrator.png"/>Adobe Illustrator</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;
