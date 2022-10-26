import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
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
            <Link className="nav-item nav-link" to="/#skills">
              Skills
            </Link>
            <Link className="nav-item nav-link" to="#projects">
              Projects
            </Link>
            <Link className="nav-item nav-link" to="/about">
              About
            </Link>
            {/* <Link className="nav-item nav-link" to="/#contact">
              Contact1
            </Link> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
