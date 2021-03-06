import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-line"> </div>
      <div className="footer">
        <div className="footer-left">
          <p> ©2019 Linda Mckeith Lam All rights reserved.</p>
        </div>
        <div className="footer-right">
          <span>
            <a
              href="https://lindamckeithlam.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more projects
            </a>
          </span>
          <span>
            <a
              href="mailto:lam.lindamckeith@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact me!
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
