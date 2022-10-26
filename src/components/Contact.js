import React, { useEffect } from "react";
import "../App.css";
import "../css/Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Pdf from "../pdf/Resume.pdf";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="Contact container-fluid d-flex justify-content-center ">
      <div
        className="contact-pill pt-4"
        data-aos="fade-up"
      >
        <div className="connect">
          <h3 className="connect-title text-center">Let's connect!</h3>
        </div>
        <div className="pt-3">
          <a
            className="pr-2"
            target="_blank"
            rel="noopener noreferrer"
            href={Pdf}
          >
            <img
              className="resume-icon"
              height="40"
              alt="resume"
              src="https://img.icons8.com/nolan/64/open-resume.png"
            />
          </a>
          <a
            className="pr-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/kevinjcastillo/"
          >
            <img
              className="linkedin-icon"
              height="40"
              alt="linkedin"
              src="https://img.icons8.com/nolan/64/linkedin.png"
            />
          </a>
          <a
            className="pr-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/kjcastillo/"
          >
            <img
              className="github-icon"
              height="40"
              alt="linkedin"
              src="https://img.icons8.com/nolan/64/github.png"
            />
          </a>
          <a
            className="pr-2"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:kevincastillo318@gmail.com?subject=Hello! Let's connect!"
          >
            <img
              className="email-icon"
              height="40"
              alt="linkedin"
              src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-mail-politic-icongeek26-outline-gradient-icongeek26.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
