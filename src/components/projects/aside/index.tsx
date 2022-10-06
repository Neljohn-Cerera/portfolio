import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

const CProjectsNavigation = () => {
  return (
    <aside className="aside">
      <nav className="projectsNavigation">
        <ul role={"list"} className="projectsNavigation__list">
          <li className="projectsNavigation__listItem">
            <AnchorLink href="#personalProjects">Projects</AnchorLink>
          </li>
          <li className="projectsNavigation__listItem">
            <AnchorLink href="#frontendMentors"> Frontend Mentors</AnchorLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default CProjectsNavigation;
