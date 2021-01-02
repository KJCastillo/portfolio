import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
//import About from "./components/About";
import Footer from "./components/Footer";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Navbar />, div);
// });

export const Layout = () => {
  //const basename = process.env.BASENAME || "";

  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
