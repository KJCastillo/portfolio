import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

export const Layout = () => {

  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
      <ScrollUpButton style={{zIndex: "100", marginBottom: "30px", border: "5px solid #41B6E6", height: "40px", width: "40px"}}/>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;