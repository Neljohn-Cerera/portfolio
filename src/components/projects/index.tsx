import { Title } from "@components/shared";
import React from "react";
import CProjectsNavigation from "./aside";
import CFrontendMentors from "./frontend-mentors";
import CPersonalProjects from "./personal-projects";

const CProjects = () => {
  return (
    <div className="projectsWrapper">
      <div className="container">
        <CProjectsNavigation />
        <Title.Section classname="personalProjects-title">
          Personal Projects
        </Title.Section>
        <CPersonalProjects />
        <Title.Section classname="frontentMentors-title">
          Frontend Mentors Projects
        </Title.Section>
        <CFrontendMentors />
      </div>
    </div>
  );
};

export default CProjects;
