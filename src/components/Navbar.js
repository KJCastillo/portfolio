import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pdf from "../pdf/Resume.pdf";
import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Nav">
        <div>
          <nav className="navbar navbar-expand-lg">
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
            <a className="nav-item nav-link ml-auto" target = "_blank" rel="noopener noreferrer" href={Pdf}>
            <img className="resume-icon" alt="resume" src="https://img.icons8.com/nolan/64/open-resume.png"/>
            </a>
            <a className="nav-item nav-link" target = "_blank" rel="noopener noreferrer" style={{paddingLeft: "0"}} href="https://www.linkedin.com/in/kevinjcastillo/">
            <img className="linkedin-icon" alt="linkedin" src="https://img.icons8.com/nolan/64/linkedin.png"/>
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
