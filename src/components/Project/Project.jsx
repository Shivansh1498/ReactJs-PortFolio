import React from "react";
import "./Project.css";

import { Link } from "react-router-dom";

const Project = ({
  title,
  image,
  comming_soon,
  preview_path,
  project_description,
  techstack_used,
}) => {
  return (
    <>
      <div className="portfolio__project-card">
        <div className="portfolio__project-card-image">
          <img src={image ? image : comming_soon} alt="" />
        </div>
        <div className="portfolio__project-card-content">
          <h3 className="portfolio__project-card-content-title">{title}</h3>
          <p className="portfolio__project-card-content-detail">
            {project_description}
          </p>
          <p className="portfolio__project-card-content__techstack">
            <span>Tech stack</span> : {techstack_used}
          </p>
          <div className="portfolio__project-card-code-links display__flex">
            <div className="portfolio__project-card-code-link-live display__flex">
              <img src="../images/cardImage/cardLinkIcon.svg" alt="" />
              <Link to={preview_path}>Live Preview</Link>
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
