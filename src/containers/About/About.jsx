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
            A React.js Developer with 2 years of experience in building scalable
            and high-performance web applications. I have independently
            developed the frontend for{" "}
            <a
              href="https://dev.blobchain.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link"
            >
              Blobchain
            </a>
            , collaborating with backend teams to structure APIs and optimize
            performance. Passionate about crafting efficient, well-documented
            code, I focus on functional components, leveraging libraries like
            Material UI, Formik, and Yup. I continuously explore new techniques,
            such as debouncing and Broadcast Channel API, to enhance user
            experience. I am always eager to learn, experiment, and grow in the
            evolving world of web development. Outside of coding, I enjoy
            fitness and basketball 🏀.
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
