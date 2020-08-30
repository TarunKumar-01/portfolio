import React from "react";
import "./End";
import { ProgressBar } from "react-bootstrap";

import End from "./End";

//~~ ABOUT ME : describes my RESUME ~~

const aboutMe = () => {
  return (
    <div className="container center ">
      <div className="card mt-5 mb-5" style={{ height: "100%" }}>
        <div className="row">
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + "/Tarun.jpeg"}
              className="card-img-top mt-5"
              alt="..."
              style={{ height: 250, width: 200 }}
            />

            <div className="card-body" style={{ height: "100%" }}>
              <div className="skill lead ml-4">
                <span className="float-left">HTML5</span>
                <span className="float-right">85%</span>
                <ProgressBar now={85} />
                <span className="float-left">CSS3</span>
                <span className="float-right">70%</span>
                <ProgressBar now={70} />
                <span className="float-left">JavaScript</span>
                <span className="float-right">75%</span>
                <ProgressBar now={80} />
                <span className="float-left">ReactJs</span>
                <span className="float-right">65%</span>
                <ProgressBar now={65} />
                <span className="float-left">C++</span>
                <span className="float-right">60%</span>
                <ProgressBar now={60} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="title-box-2 pt-4 pt-md-0 mt-4">
              <h2
                class="title-left animate__animated animate__bounce mt-5"
                style={{ fontWeight: "200%" }}
              >
                About Me
              </h2>
              <hr
                className="mb-5"
                style={{ width: 170, background: "blue", height: 5 }}
              />
            </div>
            <div className="card-body lead">
              <p>
                Strong in design and integration with intuitive problem-solving
                skills. Passionate about implementing and launching new
                projects.Ability to translate business requirements into
                technical solutions. Looking to start the career as an
                entry-level software engineer with a reputed firm driven by
                technology.
              </p>{" "}
              <br />
              <p>
                I am fond of learning new skills and I am having Hands on
                experinece in developing web applications using the latest
                front-end technologies.
              </p>{" "}
              <br />
              <p>
                Front-End developer with experience creating custom websites
                using ReactJs, JavaScript, HTML5, and CSS3.
              </p>
            </div>
          </div>
        </div>
      </div>
      <End />
    </div>
  );
};

export default aboutMe;
