import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper #90caf9 blue lighten-0">
          <p className="brand-logo float-left">PortFolio || Tarun Kumar</p>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Projects</NavLink>
            </li>
            <li>
              <a href="Tarun_11712726.pdf" download>
                Download Resume
              </a>
            </li>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
