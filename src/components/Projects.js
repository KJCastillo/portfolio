import React, { Component } from "react";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="projectTitle">
          <h1>Projects</h1>
        </div>
        <div className="row">
        <Carousel className="projectOne column">
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg"
              style={{ width: "500px", height: "500px" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg"
              style={{ width: "500px", height: "500px" }}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
              style={{ width: "500px", height: "500px" }}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Carousel className="projectTwo column">
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg"
              style={{ width: "500px", height: "500px" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg"
              style={{ width: "500px", height: "500px" }}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
              style={{ width: "500px", height: "500px" }}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>        
        <Carousel className="projectThree column">
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg"
              style={{ width: "500px", height: "500px" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg"
              style={{ width: "500px", height: "500px" }}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
              style={{ width: "500px", height: "500px" }}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      </div>
    );
  }
}

export default Projects;
