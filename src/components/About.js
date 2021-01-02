import React, { Component } from "react";
import "../App.css";
import bjj from "../img/bjj.png";
import iceland from "../img/iceland.png";
//import scotland from "../img/scotland.png";

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <div className="aboutTitle">
          <h1>About</h1>
        </div>

        <div className="AboutMe">
          <div className="bioOne">
            <h1>A little more about me!</h1>
            <p>
              I&apos;m a Full Stack Developer with a passion for building
              excellent software that improves the lives of those around me. I
              enjoy turning complex problems into simple, beautiful and
              intuitive designs. When I&apos;m not coding, you&apos;ll find me
              on the mats scrambling out of submissions at Brazilian Jiu Jitsu
              practice or planning my next adventure!
            </p>
          </div>
          <div className="bioOneImg">
            <div className="iceland">
              <img
                className="icelandImg"
                style={{ height: "360px" }}
                src={iceland}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="AboutMeTwo">
          <div className="bioTwoImg">
            <div className="bjj">
              <img
                className="bjjImg"
                style={{ width: "600px", height: "400px" }}
                src={bjj}
                alt=""
              />
            </div>
          </div>
          <div className="bioTwo">
            <h1>Part time coder - Part time designer</h1>
            <p>
              After graduating with my bachelor’s degree in Psychology, I began
              working as a social worker focusing on children. While it was
              incredibly rewarding, I felt I needed more and wanted something
              different out of life. I needed a creative outlet and came across
              coding. I decided to enroll in a coding bootcamp and was
              immediately hooked after typing “Hello World!” onto the console.
            </p>
            <p>
              Now I strive to make functional and responsive websites with
              designs that help them come to life. I have a serious passion for
              creating intuitive, dynamic user experiences with a UI that will
              leave a lasting impression!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
