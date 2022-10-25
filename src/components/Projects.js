import React, { useEffect } from "react";
import "../App.css";
import "../css/Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import toDoList3 from "../img/toDoList3.png";
import fossilfuel from "../img/fossilfuel.png";
import RecipeAPI3 from "../img/RecipeAPI3.png";
import myMoney from "../img/myMoney.png";

export const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="Projects container-fluid" id="projects">
      <div className="text-center pb-4 component-title">
        <h1>Projects</h1>
      </div>

      <div data-aos="fade-up">
        {/* myMoney project */}
        <div className="flex-container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <div className="row">
                <div className="col">
                  <h3 className="title">myMoney</h3>
                  <div className="skills-section">
                    <ul className="skills-list wrap pb-3">
                      <li className="skill">HTML</li>
                      <li className="skill">CSS</li>
                      <li className="skill">Bootstrap</li>
                      <li className="skill">JavaScript</li>
                      <li className="skill">React</li>
                      <li className="skill">NPM</li>
                      <li className="skill">Node.js</li>
                      <li className="skill">Firebase</li>
                      <li className="skill">Vercel</li>
                    </ul>
                  </div>
                  <div className="project-bio">
                    <p>
                      Financial tracker website to easily manage income
                      spending. Created on React.js with Firebase
                      Authentication. Able to create and delete finances by
                      using useState and useEvent hooks. Custom React hooks
                      created to interact with Firebase.
                    </p>
                    <div className="container pt-3">
                      <div className="row">
                        <div className="github-logo col-xs-6">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar-brand ml-auto"
                            href="https://github.com/KJCastillo/myMoney"
                          >
                            <img
                              className="project-icons"
                              alt="github"
                              src="https://img.icons8.com/nolan/64/github.png"
                            />
                          </a>
                        </div>
                        <div className="pt-4 col-xs-6">
                          <a
                            href="https://my-money-pi.vercel.app/login"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn-dark rounded-pill">
                              live demo
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img
                    src={myMoney}
                    className="rounded"
                    alt="myMoney"
                    width="500px"
                    height="250px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* fossil fuel project */}
        <div className="flex-container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <div className="row">
                <div className="col">
                  <h3 className="title">Fossil Fuel Coffee Company</h3>
                  <div className="skills-section">
                    <ul className="skills-list wrap pb-3">
                      <li className="skill">HTML</li>
                      <li className="skill">CSS</li>
                      <li className="skill">Bootstrap</li>
                      <li className="skill">JavaScript</li>
                      <li className="skill">API</li>
                      <li className="skill">Square</li>
                    </ul>
                  </div>
                  <div className="project-bio">
                    <p>
                      Coffee company website created for a new business in
                      Wyoming. Website styled using CSS to make responsive in
                      desktop and mobile devices. Website connected to Square
                      for commerce necessities using JavaScript to properly be
                      able to order, edit, and delete coffee purchases.
                    </p>
                    <div className="container pt-3">
                      <div className="row">
                        <div className="github-logo col-xs-6">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar-brand ml-auto"
                            href="https://github.com/KJCastillo/"
                          >
                            <img
                              className="project-icons"
                              alt="github"
                              src="https://img.icons8.com/nolan/64/github.png"
                            />
                          </a>
                        </div>
                        <div className="pt-4 col-xs-6">
                          <a
                            href="https://www.fossilfuelwy.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn-dark rounded-pill">
                              live demo
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img
                    src={fossilfuel}
                    className="rounded"
                    alt="myMoney"
                    width="500px"
                    height="250px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* recipe api project */}
        <div className="flex-container">
          <div className="row justify-content-center pt-5 pb-5">
            <div className="col-sm-10">
              <div className="row">
                <div className="col">
                  <h3 className="title">Recipe API</h3>
                  <div className="skills-section">
                    <ul className="skills-list wrap pb-3">
                      <li className="skill">HTML</li>
                      <li className="skill">CSS</li>
                      <li className="skill">Bootstrap</li>
                      <li className="skill">JavaScript</li>
                      <li className="skill">React</li>
                      <li className="skill">API</li>
                      <li className="skill">NPM</li>
                      <li className="skill">Node.js</li>
                      <li className="skill">Vercel</li>
                    </ul>
                  </div>
                  <div className="project-bio">
                    <p>
                      Developed on React.js, Recipe API website is able to
                      search for recipes by ingredients by using useState to
                      track state in component and useEffect to update recipe
                      after initial render. HTML and CSS Bootstrap used to style
                      website.
                    </p>
                    <div className="container pt-3">
                      <div className="row">
                        <div className="github-logo col-xs-6">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar-brand ml-auto"
                            href="https://github.com/KJCastillo/recipeapi"
                          >
                            <img
                              className="project-icons"
                              alt="github"
                              src="https://img.icons8.com/nolan/64/github.png"
                            />
                          </a>
                        </div>
                        <div className="pt-4 col-xs-6">
                          <a
                            href="https://recipe-api-seven.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn-dark rounded-pill">
                              live demo
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img
                    src={RecipeAPI3}
                    className="rounded"
                    alt="myMoney"
                    width="500px"
                    height="250px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* to do list react project */}
        <div className="flex-container">
          <div className="row justify-content-center pt-5 pb-5">
            <div className="col-sm-10">
              <div className="row">
                <div className="col">
                  <h3 className="title">React To Do List</h3>
                  <div className="skills-section">
                    <ul className="skills-list wrap pb-3">
                      <li className="skill">HTML</li>
                      <li className="skill">CSS</li>
                      <li className="skill">JavaScript</li>
                      <li className="skill">React</li>
                      <li className="skill">NPM</li>
                      <li className="skill">Node.js</li>
                      <li className="skill">Vercel</li>
                    </ul>
                  </div>
                  <div className="project-bio">
                    <p>
                      To do list website made to help productivity in completing
                      tasks. Created on React.js. Able to create, mark complete
                      and delete tasks by using useState and passing props to
                      corresponding components. Login and register feature to be
                      created with firebase.
                    </p>
                    <div className="container pt-3">
                      <div className="row">
                        <div className="github-logo col-xs-6">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar-brand ml-auto"
                            href="https://github.com/KJCastillo/toDoListReact"
                          >
                            <img
                              className="project-icons"
                              alt="github"
                              src="https://img.icons8.com/nolan/64/github.png"
                            />
                          </a>
                        </div>
                        <div className="pt-4 col-xs-6">
                          <a
                            href="https://to-do-list-kjcastillo.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn-dark rounded-pill">
                              live demo
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img
                    src={toDoList3}
                    className="rounded"
                    alt="myMoney"
                    width="500px"
                    height="250px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
