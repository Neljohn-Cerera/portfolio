import Link from "next/link";
import React from "react";
import { data } from "./data";

const CPersonalProjects = () => {
  return (
    <div id="personalProjects" className="personalProjects">
      <h2>Personal Projects</h2>
      {data?.map((project) => (
        <div key={project.id} className={`project__${project.classname}`}>
          <h3>{project.projectName}</h3>
          <Link href={project.websiteLink} passHref>
            <a target="_blank" rel="noreferrer">
              {project.websiteName}
            </a>
          </Link>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CPersonalProjects;
