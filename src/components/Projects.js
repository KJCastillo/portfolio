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

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="projectTitle">
          <h1>Projects</h1>
        </div>

        <div className='firstProject'>
        <Carousel className="projectOne" interval={null}>
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
          <div className="projectOneInfo">
            <h1>Miami Tech Works</h1>
            <p>A portal created by the coalition of Miami's business, education and government leaders combining resources to help local citizens. Volunteered to design Jobs Section for desktop and mobile view using Gatsby.js</p>
          </div>
          </div>

          <div className="secondProject">
          <div className="projectTwoInfo">
            <h1>Liberty Mall</h1>
            <p>An online shope that uses Amazon's API to gather product information to sell to the public. Frontend created on a React.js framework using HTML, CSS, and JavScript. Backend created on a Flask framework using Python and SQLAlchemy</p>
          </div>
          <Carousel className="projectTwo" interval={null}>
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
          </div>
        
        
        {/* <div className="row">
          START OF MIAMI TECH
          <div className="column">
          <Carousel className="projectOne" interval={null}>
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
          <div className="projectOneInfo">
          <h1>Miami Tech Works</h1>
          <p>A portal created by the coalition of Miami's business, education and government leaders combining resources to help local citizens. Volunteered to design Jobs Section for desktop and mobile view using Gatsby.js</p>
          </div>
          </div> 
          START OF LIBERTY MALL
          <div className="column">
          <Carousel className="projectTwo" interval={null}>
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
          <p>test test test</p>
              </div>
          START OF MOVIESAPI
          <div className="column">
          <Carousel className="projectThree" interval={null}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg"
                style={{ width: "500px", height: "500px" }}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg"
                style={{ width: "500px", height: "500px" }}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
                style={{ width: "500px", height: "500px" }}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <p>test test test</p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Projects;
