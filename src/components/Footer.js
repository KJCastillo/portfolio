import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <nav className="navbar footer p-0">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-brand ml-auto"
            href="https://github.com/KJCastillo/portfolio"
          >
            <img
              className="github-footer"
              height="28"
              alt="github"
              src="https://img.icons8.com/nolan/64/github.png"
            />
          </a>
          <p className="footer-tag mb-0 pt-1 pr-2">Made by Kevin Castillo</p>
        </nav>
      </div>
    );
  }
}

export default Footer;
