import React, { useEffect } from "react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import bjj from "../img/bjj.png";
import iceland from "../img/iceland.png";

export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="About container-fluid" id="about">
      <div className="aboutTitle text-center">
        <h1>About</h1>
      </div>

      <div data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-sm-10 pt-4">
            <div className="card-group">
              <div className="card cardAbout border-0 ">
                <div className="card-body">
                  <h3 className="card-title">A little more about me!</h3>
                  <p className="card-text">
                    I&apos;m a Full Stack Developer with a passion for building
                    excellent software that improves the lives of those around
                    me. I enjoy turning complex problems into simple, beautiful
                    and intuitive designs. When I&apos;m not coding, you&apos;ll
                    find me on the mats scrambling out of submissions at
                    Brazilian Jiu Jitsu practice or planning my next adventure!
                  </p>
                  <img
                    className="card-img-top icelandImg"
                    width="400px"
                    height="460px"
                    src={iceland}
                    alt=""
                  />
                </div>
              </div>

              <div className="card cardAbout border-0">
                <img
                  className="card-img-top bjjImg"
                  width="100%"
                  height="410px"
                  src={bjj}
                  alt=""
                />
                <div className="card-body">
                  <h3 className="card-title">
                    Part time coder - Part time designer
                  </h3>
                  <p className="card-text">
                    After graduating with my bachelor’s degree in Psychology and
                    working in the field for years, I wanted something different
                    out of life. I needed a creative outlet and came across
                    coding. I decided to enroll in a coding bootcamp and was
                    immediately hooked after typing “Hello World!” onto the
                    console.
                  </p>
                  <p className="card-text">
                    Now I strive to make functional and responsive websites with
                    designs that help them come to life. I have a serious
                    passion for creating intuitive, dynamic user experiences
                    with a UI that will leave a lasting impression!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
