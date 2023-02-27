import React, { useState } from "react";
import "./Navbar.css";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { logo, github, social_linkedin } from "./images";
import { SwitchThemeButton } from "../";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="portfolio__navbar" id="navbar">
        <div className="portfolio__navbar-links">
          <div className="portfolio__navbar-links_logo">
            <img src={logo} alt="dummy image" />
          </div>
          <div className="portfolio__navbar-links_container">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#about">About</a>
            </p>
            <p>
              <a href="#techStack">Tech Stack</a>
            </p>
            <p>
              <a href="#projects">Projects</a>
            </p>
            <p>
              <a href="#contact">Contact</a>
            </p>
          </div>
          <div className="portfolio__navbar-links_social-btn">
            <div>
              <a
                href="https://github.com/Shivansh1498"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} className="github-icon" alt="github" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/shivansh-rawat-78440221a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social_linkedin}
                  className="linkdin-icon"
                  alt="linkdin"
                />
              </a>
            </div>
            <SwitchThemeButton />
          </div>
          <div className="portfolio__navbar-menu">
            {toggleMenu ? (
              <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
            ) : (
              <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
              <div className="portfolio__navbar-menu_container scale-up-center">
                <div className="portfolio__navbar-menu_container-links">
                  <p>
                    <a href="#home">Home</a>
                  </p>
                  <p>
                    <a href="#about">About</a>
                  </p>
                  <p>
                    <a href="#techStack">Tech Stack</a>
                  </p>
                  <p>
                    <a href="#projects">Projects</a>
                  </p>
                  <p>
                    <a href="#contact">Contact</a>
                  </p>
                </div>
                <div className="portfolio__navbar-menu-links_social-btn">
                  <div>
                    <img src={github} className="github-icon" alt="github" />
                  </div>
                  <div>
                    <img
                      src={social_linkedin}
                      className="linkdin-icon"
                      alt="linkdin"
                    />
                  </div>
                  <SwitchThemeButton />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
