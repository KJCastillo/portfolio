import React, { Component } from "react";
import "../App.css";
import bjj from "../img/bjj.png";
import iceland from "../img/iceland.png";
import scotland from "../img/scotland.png";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="aboutTitle">
          <h1>About</h1>
        </div>
        <div>
        <h1>A little more about me!</h1>
				<p>
					I&apos;m a Full Stack Developer with a passion for building
					excellent software that improves the lives of those around
					me. I enjoy turning complex problems into simple, beautiful
					and intuitive designs. When I&apos;m not coding, you&apos;ll
					find me on the mats scrambling out of submissions at
					Brazilian Jiu Jitsu practice or planning my next adventure!
				</p>
        </div>
      </div>
    );
  }
}

export default About;
