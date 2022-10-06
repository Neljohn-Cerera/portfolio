import React from "react";
import CProjectsNavigation from "./aside";
import CFrontendMentors from "./frontend-mentors";
import CPersonalProjects from "./personal-projects";

const CProjects = () => {
  return (
    <div className="projectsWrapper">
      <div className="container">
        <CProjectsNavigation />
        <CPersonalProjects />
        <CFrontendMentors />
      </div>
    </div>
  );
};

export default CProjects;
