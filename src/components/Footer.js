import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer #90caf9 blue lighten-0">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h4 className="white-text">Tarun Kumar</h4>
              <p className="grey-text text-lighten-4">Get in touch with us</p>
              <div className="socials">
                <ul style={{ whiteSpace: "nowrap" }}>
                  <li style={{ display: "inline" }}>
                    <a
                      href="https://www.linkedin.com/in/tarun-kumar-3014a5144/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span style={{ color: "grey" }} className="mr-3">
                        {" "}
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="lg"
                          className="fa-2x"
                        />
                      </span>
                    </a>
                  </li>
                  <li style={{ display: "inline", color: "grey" }}>
                    <a
                      href="https://github.com/tarunk99"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span style={{ color: "grey" }}>
                        {" "}
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="lg"
                          className="fa-2x"
                        />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">Designed and Coded by Tarun Kumar.</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
