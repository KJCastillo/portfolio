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
        <div className="col-sm pt-4">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
            data-interval="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={libertyMallSearch}
                  width="100%"
                  height="500"
                  className=""
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={loginModal}
                  width="100%"
                  height="500"
                  className=""
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={libertyMallRegister}
                  width="100%"
                  height="500"
                  className=""
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cart}
                  width="100%"
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
        <div className="col-sm text-right pt-4 ">
          <img src={lmLogo} alt="liberty mall logo" width="300" />
          <div className="card-body">
            <p className="card-text">
              An online shop that uses Amazon's API to gather product
              information to sell to the public. Frontend created on a React.js
              framework using HTML, CSS, and JavScript. Backend created on a
              Flask framework using Python and SQLAlchemy
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
      </div>

      <div className="row pt-4">
        <div className="col-sm pt-4 ">
        <div data-aos="fade-right">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://miamitech.works/"
          >
            <img src={mwLogo} alt="miami tech works logo" />
          </a>
          </div>
          <div className="card-body">
            <p className="card-text">
              A portal created by the coalition of Miami's business, education
              and government leaders combining resources to help local citizens.
              Volunteered to design Jobs Section for desktop and mobile view
              using Gatsby.js
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
        </div>
        <div className="col-sm pt-4">
          <div
            id="carouselExampleControls2"
            className="carousel slide"
            data-ride="carousel"
            data-interval="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={MiamiTechHome}
                  width="100%"
                  height="500"
                  className=""
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={MiamiTech}
                  width="100%"
                  height="500"
                  className=""
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={MiamiTechJobs}
                  width="100%"
                  height="500"
                  className=""
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls2"
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
              href="#carouselExampleControls2"
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

      <div className="row pt-4">
        <div className="col-sm pt-4">
          <div
            id="carouselExampleControls3"
            className="carousel slide"
            data-ride="carousel"
            data-interval="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={moviesAPI}
                  width="100%"
                  height="500"
                  className=""
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={movies2API}
                  width="100%"
                  height="500"
                  className=""
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={searchAPI}
                  width="100%"
                  height="500"
                  className=""
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls3"
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
              href="#carouselExampleControls3"
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
        <div className="col-sm text-right pt-4 ">
          <div data-aos="fade-left">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://movies-api.kjcastillo.vercel.app/"
            >
              <img
                className="moviesLogo"
                width="166"
                height="166"
                src={moviesLogo}
                alt="movies API logo"
              />
            </a>
          </div>
          <div className="card-body">
            <p className="card-text">
              A website that uses an API to populate movie information.
              Additional movie information will redirect site to the IMDB
              database. Project created using HTML, CSS, JavaScript and jQuery.
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
        </div>
      </div>
    </div>
  );
};

export default Projects;