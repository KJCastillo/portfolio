import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <nav className="navbar footer">
          <a
          target="_blank"
          rel="noopener noreferrer"
            className="navbar-brand ml-auto"
            href="https://github.com/KJCastillo/portfolio"
          >
            <img className="github-footer mr-1" alt="github" src="https://img.icons8.com/nolan/64/github.png"/>
              <p className="footer-tag">Made by Kevin Castillo</p>
          </a>
        </nav>
      </div>
    );
  }
}

export default Footer;
