import React, { Component } from "react";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import MiamiTechHome from "../img/MiamiTechHome.png";
import MiamiTech from "../img/MiamiTech.png";
import MiamiTechJobs from "../img/MiamiTechJobs.png";
import libertyMallSearch from "../img/libertyMallSearch.png";
import libertyMallRegister from "../img/libertyMallRegister.png";
import cart from "../img/cart.png";
import loginModal from "../img/loginModal.png";
import lmLogo from "../img/lmLogo.png";
import mwLogo from "../img/mwLogo.png";
import moviesAPI from "../img/moviesAPI.png";
import movies2API from "../img/movies2API.png";
import searchAPI from "../img/searchAPI.png";
import movieLogo from "../img/movieLogo.png";

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="projectTitle">
          <h1>Projects</h1>
        </div>

        <div className="firstProject">
          <Carousel className="projectOne" interval={null}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={libertyMallSearch}
                style={{ width: "500px", height: "500px" }}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={loginModal}
                style={{ width: "500px", height: "500px" }}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={libertyMallRegister}
                style={{ width: "500px", height: "500px" }}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cart}
                style={{ width: "500px", height: "500px" }}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="projectOneInfo">
            <h1 className="lmLogo"><img src={lmLogo}/></h1>
            <p>
              An online shope that uses Amazon's API to gather product
              information to sell to the public. Frontend created on a React.js
              framework using HTML, CSS, and JavScript. Backend created on a
              Flask framework using Python and SQLAlchemy
            </p>
          </div>
        </div>

        <div className="secondProject">
          <div className="projectTwoInfo">
            <h1 className="mwLogo"><img src={mwLogo}/></h1>
            <p>
              A portal created by the coalition of Miami's business, education
              and government leaders combining resources to help local citizens.
              Volunteered to design Jobs Section for desktop and mobile view
              using Gatsby.js
            </p>
          </div>
          <Carousel className="projectTwo" interval={null}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={MiamiTechHome}
                style={{ width: "500px", height: "500px" }}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={MiamiTech}
                style={{ width: "500px", height: "500px" }}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={MiamiTechJobs}
                style={{ width: "500px", height: "500px" }}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>


        <div className="thirdProject">
          <Carousel className="projectThree" interval={null}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={moviesAPI}
                style={{ width: "500px", height: "500px" }}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={movies2API}
                style={{ width: "500px", height: "500px" }}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={searchAPI}
                style={{ width: "500px", height: "500px" }}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="projectThreeInfo">
            <h1 className="movieLogo"><img src={movieLogo}/></h1>
            <p>
              An online shope that uses Amazon's API to gather product
              information to sell to the public. Frontend created on a React.js
              framework using HTML, CSS, and JavScript. Backend created on a
              Flask framework using Python and SQLAlchemy
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
