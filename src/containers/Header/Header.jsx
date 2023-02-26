import React from "react";
import "./Header.css";

import portfolioPhoto from "../../assets/portfolioPhoto.jpeg";

const Header = () => {
  return (
    <>
      <div className="portfolio__header section__padding" id="home">
        <div className="portfolio__header-text">
          <h2>
            Hi 👋,
            <br /> My name is{" "}
            <span className="gradient__text">Shivansh Rawat</span>. I build
            things for web using Reactjs.
          </h2>
        </div>
        <div className="portfolio__header-image">
          <img src={portfolioPhoto} alt="photo of shivansh rawat" />
        </div>
      </div>
    </>
  );
};

export default Header;
