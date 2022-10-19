import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
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
            <Link className="nav-item nav-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-item nav-link" to="/#skills">
              Skills
            </Link>
            <Link className="nav-item nav-link" to="/#about">
              About
            </Link>
            {/* <Link className="nav-item nav-link" to="/#contact">
              Contact
            </Link> */}
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
