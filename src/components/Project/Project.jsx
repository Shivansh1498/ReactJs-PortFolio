import React from "react";
import "./Project.css";

import { Link } from "react-router-dom";

const Project = ({
  title,
  image,
  image_name,
  comming_soon,
  preview_path,
  view_project,
  project_description,
  techstack_used,
  github_url,
}) => {
  return (
    <>
      <div className="portfolio__project-card">
        <div className="portfolio__project-card-image">
          <img src={image ? image : comming_soon} alt={image_name} />
        </div>
        <div className="portfolio__project-card-content">
          <h3 className="portfolio__project-card-content-title">{title}</h3>
          <div className="portfolio__project-card-content-detail">
            <p className="truncate-text">{project_description}</p>
          </div>
          <p className="portfolio__project-card-content__techstack">
            <span>Tech stack</span> : {techstack_used}
          </p>
          <div className="portfolio__project-card-code-links display__flex">
            <div className="portfolio__project-card-code-link-live display__flex">
              <img src="../images/cardImage/cardLinkIcon.svg" alt="" />
              {preview_path !== null ? (
                <Link to={preview_path}>Live Preview</Link>
              ) : (
                <a
                  href={view_project}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </div>
            <div className="portfolio__project-card-code-link-code display__flex">
              <img src="../images/cardImage/cardGithubCodeIcon.svg" alt="" />
              <a href={github_url} target="_blank" rel="noopener noreferrer">
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
