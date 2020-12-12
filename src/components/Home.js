import React, { Component } from "react";
import "../App.css";
import profile from "../img/profile.png";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <img className="profile" src={profile} />
          <h1>text text text</h1>
        </div>
      </div>
    );
  }
}

export default Home;
