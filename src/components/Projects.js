import React, { useEffect } from "react";
import "../App.css";
import "../css/Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import moviesAPI from "../img/moviesAPI.png";
import movies2API from "../img/movies2API.png";
import searchAPI from "../img/searchAPI.png";
import toDoList3 from "../img/toDoList3.png";
import fossilfuel from "../img/fossilfuel.png";
import RecipeAPI3 from "../img/RecipeAPI3.png";
import myMoney from "../img/myMoney.png";

export const Projects = () => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
    Aos.init({ disable: "tablet" });
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="Projects container-fluid">
      <div className="text-center pb-4 component-title">
        <h1>Projects</h1>
      </div>
      {/* myMoney project */}
      <div className="flex-container pt-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <div className="row">
              <div className="col">
                <h2 className="title">myMoney</h2>
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
                    Financial tracker website to easily manage income spending.
                    Created on React.js with Firebase Authentication. Able to
                    create and delete finances by using useState and useEvent
                    hooks. Custom React hooks created to interact with Firebase.
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
                        <a href="https://my-money-pi.vercel.app/login" target="_blank">
                        <button className="demo-btn">live demo</button>
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
                <h2 className="title">Fossil Fuel Coffee Company</h2>
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
                    desktop and mobile devices. Website connected to Square for
                    commerce necessities using JavaScript to properly be able to
                    order, edit, and delete coffee purchases.
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
                        <button className="demo-btn">live demo</button>
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
                <h2 className="title">Recipe API</h2>
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
                    Developed on React.js, Recipe API website is able to search
                    for recipes by ingredients by using useState to track state
                    in component and useEffect to update recipe after initial
                    render. HTML and CSS Bootstrap used to style website.
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
                        <button className="demo-btn">live demo</button>
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
                <h2 className="title">React To Do List</h2>
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
                        <button className="demo-btn">live demo</button>
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
    // <div className="Projects container-fluid">
    //   <div className="text-center projectTitle">
    //     <h1>Projects</h1>
    //     <p>
    //       click logo to view project deployed - click github icon to view code
    //     </p>
    //   </div>
    //   {/* start of to do list react */}
    //   <div className="row pt-2 mb-4">
    //     <div className="col-sm pt-4">
    //       <div>
    //         {/* data-aos="fade-right" */}
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           href="https://to-do-list-kjcastillo.vercel.app/"
    //         >
    //           <img src={listLogo} className="rounded" alt="to do list logo" />
    //         </a>
    //       </div>
    //       <div className="card-body">
    //         <p className="card-text">
    //           To do list website made to help productivity in completing tasks
    //           with ease. User is able to create a new task, mark task as
    //           complete and delete task when complete. Created on React.js.
    //         </p>
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="navbar-brand ml-auto"
    //           href="https://github.com/KJCastillo/toDoListReact"
    //         >
    //           <img
    //             className="project-icons"
    //             alt="github"
    //             src="https://img.icons8.com/nolan/64/github.png"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //     <div className="projectCarousel col-sm pt-4">
    //       <div
    //         id="carouselExampleControls4"
    //         //change number to not conflict with other carousels
    //         className="carousel slide"
    //         data-ride="carousel"
    //         data-interval="false"
    //       >
    //         <div className="carousel-inner">
    //           <div className="carousel-item active">
    //             <img
    //               src={toDoList}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //           <div className="carousel-item">
    //             <img
    //               src={toDoList2}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //           <div className="carousel-item">
    //             <img
    //               src={toDoList3}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //         </div>
    //         <a
    //           className="carousel-control-prev"
    //           href="#carouselExampleControls4"
    //           //change number to not conflict with other carousels
    //           role="button"
    //           data-slide="prev"
    //         >
    //           <span
    //             className="carousel-control-prev-icon"
    //             aria-hidden="true"
    //           ></span>
    //           <span className="sr-only">Previous</span>
    //         </a>
    //         <a
    //           className="carousel-control-next"
    //           href="#carouselExampleControls4"
    //           //change number to not conflict with other carousels
    //           role="button"
    //           data-slide="next"
    //         >
    //           <span
    //             className="carousel-control-next-icon"
    //             aria-hidden="true"
    //           ></span>
    //           <span className="sr-only">Next</span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* start of liberty mall */}
    //   <div className="row mb-4">
    //     <div className="projectCarousel col-sm pt-4">
    //       <div
    //         id="carouselExampleControls"
    //         className="carousel slide"
    //         data-ride="carousel"
    //         data-interval="false"
    //       >
    //         <div className="carousel-inner">
    //           <div className="carousel-item active">
    //             <img
    //               src={libertyMallSearch}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //           <div className="carousel-item">
    //             <img
    //               src={loginModal}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //           <div className="carousel-item">
    //             <img
    //               src={libertyMallRegister}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //           <div className="carousel-item">
    //             <img
    //               src={cart}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //         </div>
    //         <a
    //           className="carousel-control-prev"
    //           href="#carouselExampleControls"
    //           role="button"
    //           data-slide="prev"
    //         >
    //           <span
    //             className="carousel-control-prev-icon"
    //             aria-hidden="true"
    //           ></span>
    //           <span className="sr-only">Previous</span>
    //         </a>
    //         <a
    //           className="carousel-control-next"
    //           href="#carouselExampleControls"
    //           role="button"
    //           data-slide="next"
    //         >
    //           <span
    //             className="carousel-control-next-icon"
    //             aria-hidden="true"
    //           ></span>
    //           <span className="sr-only">Next</span>
    //         </a>
    //       </div>
    //     </div>
    //     <div className="col-sm text-right pt-4 ">
    //       <div data-aos="fade-left">
    //         <img src={lmLogo} alt="liberty mall logo" width="300" />
    //       </div>
    //       <div className="card-body">
    //         <p className="card-text">
    //           An online shop that uses Amazon's API to gather product
    //           information to sell to the public. Frontend created on a React.js
    //           framework using HTML, CSS, and JavScript. Backend created on a
    //           Flask framework using Python and SQLAlchemy.
    //         </p>
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="navbar-brand ml-auto"
    //           href="https://github.com/KJCastillo/AA-KC-MD-Final-Project-Online-Store"
    //         >
    //           <img
    //             className="project-icons"
    //             alt="github"
    //             src="https://img.icons8.com/nolan/64/github.png"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* end of liberty mall */}
    //   {/* start of miami works */}
    //   <div className="row pt-4 mb-4">
    //     <div className="col-sm pt-4">
    //       <div data-aos="fade-right">
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           href="https://miamitech.works/"
    //         >
    //           <img src={mwLogo} alt="miami tech works logo" />
    //         </a>
    //       </div>
    //       <div className="card-body">
    //         <p className="card-text">
    //           A portal created by the coalition of Miami's business, education
    //           and government leaders combining resources to help local citizens.
    //           Volunteered to design Jobs Section for desktop and mobile view
    //           using Gatsby.js.
    //         </p>
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="navbar-brand ml-auto"
    //           href="https://github.com/miamiworks/web"
    //         >
    //           <img
    //             className="project-icons"
    //             alt="github"
    //             src="https://img.icons8.com/nolan/64/github.png"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //     <div className="projectCarousel col-sm pt-4">
    //       <div
    //         id="carouselExampleControls2"
    //         className="carousel slide"
    //         data-ride="carousel"
    //         data-interval="false"
    //       >
    //         <div className="carousel-inner">
    //           <div className="carousel-item active">
    //             <img
    //               src={MiamiTechHome}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //           <div className="carousel-item">
    //             <img
    //               src={MiamiTech}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //           <div className="carousel-item">
    //             <img
    //               src={MiamiTechJobs}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //         </div>
    //         <a
    //           className="carousel-control-prev"
    //           href="#carouselExampleControls2"
    //           role="button"
    //           data-slide="prev"
    //         >
    //           <span
    //             className="carousel-control-prev-icon"
    //             aria-hidden="true"
    //           ></span>
    //           <span className="sr-only">Previous</span>
    //         </a>
    //         <a
    //           className="carousel-control-next"
    //           href="#carouselExampleControls2"
    //           role="button"
    //           data-slide="next"
    //         >
    //           <span
    //             className="carousel-control-next-icon"
    //             aria-hidden="true"
    //           ></span>
    //           <span className="sr-only">Next</span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* end of miami works */}
    //   {/* start of moviesAPI */}
    //   <div className="row pt-4 mb-4">
    //     <div className="projectCarousel col-sm pt-4">
    //       <div
    //         id="carouselExampleControls3"
    //         className="carousel slide"
    //         data-ride="carousel"
    //         data-interval="false"
    //       >
    //         <div className="carousel-inner">
    //           <div className="carousel-item active">
    //             <img
    //               src={moviesAPI}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //           <div className="carousel-item">
    //             <img
    //               src={movies2API}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //           <div className="carousel-item">
    //             <img
    //               src={searchAPI}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //         </div>
    //         <a
    //           className="carousel-control-prev"
    //           href="#carouselExampleControls3"
    //           role="button"
    //           data-slide="prev"
    //         >
    //           <span
    //             className="carousel-control-prev-icon"
    //             aria-hidden="true"
    //           ></span>
    //           <span className="sr-only">Previous</span>
    //         </a>
    //         <a
    //           className="carousel-control-next"
    //           href="#carouselExampleControls3"
    //           role="button"
    //           data-slide="next"
    //         >
    //           <span
    //             className="carousel-control-next-icon"
    //             aria-hidden="true"
    //           ></span>
    //           <span className="sr-only">Next</span>
    //         </a>
    //       </div>
    //     </div>
    //     <div className="col-sm text-right pt-4 ">
    //       <div data-aos="fade-left">
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           href="https://movies-api.kjcastillo.vercel.app/"
    //         >
    //           <img
    //             className="moviesLogo"
    //             width="166"
    //             height="166"
    //             src={moviesLogo}
    //             alt="movies API logo"
    //           />
    //         </a>
    //       </div>
    //       <div className="card-body">
    //         <p className="card-text">
    //           A website that uses an API to populate movie information.
    //           Additional movie information will redirect site to the IMDB
    //           database. Project created using HTML, CSS, JavaScript and jQuery.
    //         </p>
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="navbar-brand ml-auto"
    //           href="https://github.com/KJCastillo/moviesAPI"
    //         >
    //           <img
    //             className="project-icons"
    //             alt="github"
    //             src="https://img.icons8.com/nolan/64/github.png"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* end of moviesAPI */}
    //   {/* start of recipeAPI */}
    //   <div className="row pt-4 mb-4">
    //     <div className="col-sm pt-4">
    //       <div data-aos="fade-right">
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           href="https://recipe-api-seven.vercel.app/"
    //         >
    //           <img src={rlogo} className="rlogo" alt="recipeAPI logo" />
    //         </a>
    //       </div>
    //       <div className="card-body">
    //         <p className="card-text">
    //           Recipe API website to search for recipes by ingredients. Able to
    //           search for food and beverages. Created on React.js.
    //         </p>
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="navbar-brand ml-auto"
    //           href="https://github.com/KJCastillo/recipeAPI"
    //         >
    //           <img
    //             className="project-icons"
    //             alt="github"
    //             src="https://img.icons8.com/nolan/64/github.png"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //     <div className="projectCarousel col-sm pt-4">
    //       <div
    //         id="carouselExampleControls5"
    //         className="carousel slide"
    //         data-ride="carousel"
    //         data-interval="false"
    //       >
    //         <div className="carousel-inner">
    //           <div className="carousel-item active">
    //             <img
    //               src={RecipeAPI}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //           <div className="carousel-item">
    //             <img
    //               src={RecipeAPI2}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //           <div className="carousel-item">
    //             <img
    //               src={RecipeAPI3}
    //               width="100%"
    //               height="500"
    //               className=""
    //               alt="..."
    //             />
    //           </div>
    //         </div>
    //         <a
    //           className="carousel-control-prev"
    //           href="#carouselExampleControls5"
    //           role="button"
    //           data-slide="prev"
    //         >
    //           <span
    //             className="carousel-control-prev-icon"
    //             aria-hidden="true"
    //           ></span>
    //           <span className="sr-only">Previous</span>
    //         </a>
    //         <a
    //           className="carousel-control-next"
    //           href="#carouselExampleControls5"
    //           role="button"
    //           data-slide="next"
    //         >
    //           <span
    //             className="carousel-control-next-icon"
    //             aria-hidden="true"
    //           ></span>
    //           <span className="sr-only">Next</span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* end of recipeAPI */}
    // </div>
  );
};

export default Projects;
