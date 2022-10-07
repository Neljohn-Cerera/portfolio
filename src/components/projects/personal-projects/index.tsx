import { Image, Title } from "@components/shared";
import Link from "next/link";
import React from "react";
import { data } from "./data";

const CPersonalProjects = () => {
  return (
    <div id="personalProjects" className="personalProjects">
      {data?.map((project) => (
        <div key={project.id} className={`project__content`}>
          <Image
            src={project.img}
            alt={project.imgAlt}
            classname="project__img"
          />
          <Title.SectionSubtitle>{project.projectName}</Title.SectionSubtitle>
          <Link href={project.websiteLink} passHref>
            <a className="project__link" target="_blank" rel="noreferrer">
              Website
            </a>
          </Link>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CPersonalProjects;
