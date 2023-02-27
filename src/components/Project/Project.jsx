import React from "react";
import "./Project.css";

const Project = ({ title, image, comming_soon }) => {
  return (
    <>
      <div className="portfolio__project-card">
        <div className="portfolio__project-card-image">
          <img src={image ? image : comming_soon} alt="" />
        </div>
        <div className="portfolio__project-card-content">
          <h3 className="portfolio__project-card-content-title">{title}</h3>
          <p className="portfolio__project-card-content-detail">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit amet
            repellendus pariatur quam voluptas dicta veniam iste doloribus,
            voluptatum Lorem, ipsum dolor.
          </p>
          <p className="portfolio__project-card-content__techstack">
            <span>Tech stack</span> : HTML, CSS, JavaScript, React
          </p>
          <div className="portfolio__project-card-code-links display__flex">
            <div className="portfolio__project-card-code-link-live display__flex">
              <img src="../images/cardImage/cardLinkIcon.svg" alt="" />
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>
            </div>
            <div className="portfolio__project-card-code-link-code display__flex">
              <img src="../images/cardImage/cardGithubCodeIcon.svg" alt="" />
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
