import React from "react";
import "./About.css";

import { AboutMeCard } from "../../components";
import workExperience from "../../personal_data/workExperience";
import education from "../../personal_data/education";

const About = () => {
  return (
    <>
      <div className="portfolio__about section__padding" id="about">
        <div className="portfolio__about-me-section">
          <h3 className="text__shadow">About Me</h3>
          <p>
            One or more years of experience in frontend web development, where I
            have been primarily responsible for creating a dark theme library
            for the product I have worked on. Whenever I code, I try to keep the
            number of lines to a minimum and document it properly. I am
            particularly interested in working with React JS with a focus on
            functional components. Every day, I strive to learn something new.
            Despite not understanding the concepts sometimes, I am always
            curious about web development. Along with web development, I am also
            into fitness and enjoy playing basketball 🏀.
          </p>
        </div>
        <div className="portfolio__about-work-experience">
          <h3 className="text__shadow">Work Experience</h3>
          {workExperience.map((item, index) => (
            <AboutMeCard
              key={index}
              title={item.title}
              jobType={item.jobType}
              instituteName={item.instituteName}
              location={item.location}
              timeline={item.timeline}
            />
          ))}
        </div>
        <div className="portfolio__about-education">
          <h3 className="text__shadow">Education</h3>
          {education.map((item, index) => (
            <AboutMeCard
              key={index}
              title={item.title}
              jobType={item.jobType}
              instituteName={item.instituteName}
              location={item.location}
              timeline={item.timeline}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
