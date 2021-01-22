import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pdf from "../pdf/Resume.pdf";
import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Nav">
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <a className="nav-item nav-link" href="#skills">
              Skills
            </a>
            <Link className="nav-item nav-link" to="/projects">
              Projects
            </Link>
            <a className="nav-item nav-link" href="#about">
              About
            </a>
            <a className="nav-item nav-link" href="#contact">
              Contact
            </a>
            <a
              className="nav-item nav-link ml-auto"
              target="_blank"
              rel="noopener noreferrer"
              href={Pdf}
            >
              <img
                className="resume-icon"
                height="32"
                alt="resume"
                src="https://img.icons8.com/nolan/64/open-resume.png"
              />
            </a>
            <a
              className="nav-item nav-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingLeft: "0" }}
              href="https://www.linkedin.com/in/kevinjcastillo/"
            >
              <img
                className="linkedin-icon"
                height="32"
                alt="linkedin"
                src="https://img.icons8.com/nolan/64/linkedin.png"
              />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
