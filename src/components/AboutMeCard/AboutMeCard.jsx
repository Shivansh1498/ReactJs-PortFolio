import React from "react";
import "./AboutMeCard.css";

import { officeBuildingIcon, locationIcon, calenderIcon } from "./images";

const AboutMeCard = ({ title, jobType, instituteName, location, timeline }) => {
  return (
    <>
      <div className="portfolio__about-me-card">
        <div className="portfolio__about-me-card__header display__flex">
          <h4>{title}</h4>
          <p className="portfolio__about-me-card-chip">{jobType}</p>
        </div>
        <div className="portfolio__about-me-card__footer display__flex">
          <div className="portfolio__about-me-card__footer__institute-name display__flex">
            <img src={officeBuildingIcon} alt="institute image" />
            <p className="portfolio__about-me-card__Details">{instituteName}</p>
          </div>
          <div className="portfolio__about-me-card__footer__location display__flex">
            <img src={locationIcon} alt="institute location" />
            <p className="portfolio__about-me-card__Details">{location}</p>
          </div>
          <div className="portfolio__about-me-card__footer__duration display__flex">
            <img src={calenderIcon} alt="duration" />
            <p className="portfolio__about-me-card__Details">{timeline}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeCard;
