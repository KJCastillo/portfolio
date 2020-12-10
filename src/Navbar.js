import React, { Component } from "react";
import logo from "./logo.svg";
import ycth from "./img/ycth.png";
import "./App.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Nav">
        <div>
          <nav className="navbar navbar-expand-lg">
            <a class="nav-item nav-link" href="#">
              Home
            </a>
            <a class="nav-item nav-link" href="#">
              Skills
            </a>
            <a class="nav-item nav-link" href="#">
              About
            </a>
            <a class="nav-item nav-link" href="#">
              Projects
            </a>
            <a class="nav-item nav-link" href="#">
              Contact
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
