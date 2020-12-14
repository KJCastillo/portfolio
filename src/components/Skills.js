import React, { Component } from "react";
import "../App.css";

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <div className="frontendSkills">
          <h1 className="titleSkills">Frontend</h1>
          <ul>
            <li><i className="fab fa-html5"></i>HTML 5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>React.js</li>
            <li>Gatsby.js</li>
          </ul>
        </div>
        <div className="backendSkills">
          <h1 className="titleSkills">Backend</h1>
          <ul>
            <li>Flask</li>
            <li>Python</li>
            <li>SQL</li>
            <li>SQLAlchemy</li>
            <li>REST API</li>
          </ul>
        </div>
        <div className="otherSkills">
          <h1 className="titleSkills">Other</h1>
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Heroku</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;
