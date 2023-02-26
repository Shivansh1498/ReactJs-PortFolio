import React from "react";
import "./TechStack.css";

import techStack from "../../personal_data/techStack";

const TechStack = () => {
  return (
    <>
      <div className="portfolio__techstack section__padding" id="techStack">
        <h3>My Tech Stack</h3>
        <p>Technologies I’ve been working with recently</p>
        <div className="portfolio__techstack-content-section">
          {techStack.map((image, index) => (
            <div key={index}>
              <img
                src={image.path}
                alt={image.title}
                id={`techStackImage${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
