import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
