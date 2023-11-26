import React from "react";
import "./Projects.css";

import { Project } from "../../components";
import projects from "../../personal_data/projects";

const Projects = () => {
  return (
    <>
      <div className="portfolio__projects section__padding" id="projects">
        <h3 className="portfolio__projects-title">Projects</h3>
        <p className="portfolio__projects-subTitle">Things I’ve built so far</p>
        <div className="portfolio__projects-list-section">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              comming_soon={project.comming_soon}
              preview_path={project.preview_path}
              view_project={project.view_project}
              project_description={project.project_description}
              techstack_used={project.techstack_used}
              github_url={project.github_url}
              image_name={project.image_name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
