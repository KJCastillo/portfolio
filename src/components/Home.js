import React, { Component } from "react";
import "../App.css";
import profile from "../img/profile.png";

class Home extends Component {
  render() {
    return (
      <div className="home">
          <div><img className="profile" src={profile}/></div>
        
      </div>
    );
  }
}

export default Home;
