import React, { useEffect } from "react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
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
import moviesLogo from "../img/moviesLogo.png";

export const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="Projects container-fluid">
      <div className="text-center projectTitle">
        <h1>Projects</h1>
      </div>

      <div className="row">
        <div className="col-sm-8">
            <img src={lmLogo} alt="liberty mall logo" width="410"/>
            <div className="card-body">
              <p className="card-text">
                An online shop that uses Amazon's API to gather product
                information to sell to the public. Frontend created on a
                React.js framework using HTML, CSS, and JavScript. Backend
                created on a Flask framework using Python and SQLAlchemy
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-brand ml-auto"
                href="https://github.com/KJCastillo/AA-KC-MD-Final-Project-Online-Store"
              >
                <img
                  className="project-icons"
                  alt="github"
                  src="https://img.icons8.com/nolan/64/github.png"
                />
              </a>
          </div>
        </div>
        <div className="col-sm">
          <div
            id="carouselExampleControls"
            className="carousel slide justify-content-center"
            data-ride="carousel"
            data-interval="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={libertyMallSearch}
                  width="600"
                  height="500"
                  className=""
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={loginModal}
                  width="600"
                  height="500"
                  className=""
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={libertyMallRegister}
                  width="600"
                  height="500"
                  className=""
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cart}
                  width="600"
                  height="500"
                  className=""
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <div className="firstProject">
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
          <h1 className="lmLogo">
            <img src={lmLogo} alt="liberty mall logo" />
          </h1>
          <p>
            An online shop that uses Amazon's API to gather product information
            to sell to the public. Frontend created on a React.js framework
            using HTML, CSS, and JavScript. Backend created on a Flask framework
            using Python and SQLAlchemy
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-brand ml-auto"
            href="https://github.com/KJCastillo/AA-KC-MD-Final-Project-Online-Store"
          >
            <img
              className="project-icons"
              alt="github"
              src="https://img.icons8.com/nolan/64/github.png"
            />
          </a>
        </div>
      </div>

      <div className="secondProject">
        <div className="projectTwoInfo">
          <h1 className="mwLogo">
            <div data-aos="fade-right">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://miamitech.works/"
              >
                <img src={mwLogo} alt="miami tech works logo" />
              </a>
            </div>
          </h1>
          <p>
            A portal created by the coalition of Miami's business, education and
            government leaders combining resources to help local citizens.
            Volunteered to design Jobs Section for desktop and mobile view using
            Gatsby.js
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-brand ml-auto"
            href="https://github.com/miamiworks/web"
          >
            <img
              className="project-icons"
              alt="github"
              src="https://img.icons8.com/nolan/64/github.png"
            />
          </a>
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
          <h1 className="movieLogo">
            <div data-aos="fade-left">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://movies-api.kjcastillo.vercel.app/"
              >
              <img
                className="moviesLogo"
                src={moviesLogo}
                alt="movies API logo"
              />
              </a>
            </div>
          </h1>
          <p>
            A website that uses an API to populate movie information. Additional
            movie information will redirect site to the IMDB database. Project
            created using HTML, CSS, JavaScript and jQuery.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-brand ml-auto"
            href="https://github.com/KJCastillo/moviesAPI"
          >
            <img
              className="project-icons"
              alt="github"
              src="https://img.icons8.com/nolan/64/github.png"
            />
          </a>
        </div>
      </div> */
}
