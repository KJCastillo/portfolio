import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";
import "../css/Skills.css";
import profile from "../img/profile.png";

export const Skills = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/about");
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="Skills container-fluid" id="skills">
      <div className="component-title text-center pb-4">
        <h1>Skills</h1>
      </div>

      <div className="flex-container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <div className="row">
              <div className="img-div col-4">
                <img
                  src={profile}
                  alt="profile-pic"
                  width="350px"
                  height="360px"
                />
              </div>
              <div className="col-8">
                <div className="skills-section">
                  <ul className="skills-list wrap">
                    <li className="skill">HTML</li>
                    <li className="skill">CSS</li>
                    <li className="skill">Bootstrap</li>
                    <li className="skill">JavaScript</li>
                    <li className="skill">jQuery</li>
                    <li className="skill">React</li>
                    <li className="skill">Python</li>
                    <li className="skill">Node.js</li>
                    <li className="skill">NPM</li>
                    <li className="skill">REST API</li>
                    <li className="skill">Object Oriented Programming</li>
                    <li className="skill">Databases</li>
                    <li className="skill">Firebase</li>
                    <li className="skill">Adobe Photoshop</li>
                    <li className="skill">Github</li>
                  </ul>
                </div>
                <div className="small-bio">
                  <h2 className="title pt-5 pb-3">I love building stuff 👷🏻‍♂️</h2>
                  <p>
                    Whether it was Legos or airplane models, I always loved
                    using my brain and hands to create something from scratch.
                    And after coming across coding, I was all in! Being able to
                    problem solve and create responsive and dynamic web sites
                    has become so much more than a career path, but a passion.
                  </p>
                  <button
                    className="btn-dark rounded-pill"
                    onClick={handleClick}
                  >
                    Keep reading my bio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
