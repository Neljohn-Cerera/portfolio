import React from "react";
import { data } from "./data";

const CFrontendMentors = () => {
  return (
    <div id="frontendMentors" className="frontentMentors">
      <h2>Frontend Mentors Projects</h2>
      {data?.map((project) => (
        <div
          key={project.id}
          className={`frontentMentor__${project.classname}`}
        >
          <h3>{project.projectName}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CFrontendMentors;
