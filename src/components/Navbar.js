import React, { Component } from "react";
import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Nav">
        <div>
          <nav className="navbar navbar-expand-lg">
            <a className="nav-item nav-link" href="#">
              Home
            </a>
            <a className="nav-item nav-link" href="#">
              Skills
            </a>
            <a className="nav-item nav-link" href="#">
              Projects
            </a>
            <a className="nav-item nav-link" href="#">
              About
            </a>
            <a className="nav-item nav-link" href="#">
              Contact
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
