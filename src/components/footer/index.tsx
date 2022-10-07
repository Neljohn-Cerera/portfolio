import { FacebookIcon, GithubIcon, LinkinIcon } from "@assets/icons";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

interface Props {
  isProjectsPage?: boolean;
}

const Footer = ({ isProjectsPage }: Props) => {
  return (
    <footer className="footer">
      <div className="container">
        {/* footer  navigation */}
        {isProjectsPage ? (
          <nav className="footer-navigation">
            <ul role={"list"}>
              <li className="footer-navigation__item">
                <AnchorLink href="#personalProjects">Projects</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#frontendMentors">
                  Frontend Mentors
                </AnchorLink>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="footer-navigation">
            <ul role={"list"}>
              <li className="footer-navigation__item">
                <AnchorLink href="#">Home</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#whatido">What i do</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#skills">Skills</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#projects">Projects</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#certificates">Certificates</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#aboutme">About Me</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#contactme">Contact Me</AnchorLink>
              </li>
            </ul>
          </nav>
        )}

        {/* footer bottom */}
        <div className="footer-bottom">
          {/* footer bottom socials */}
          <div className="footer-socials">
            <p className="footer-social__title">Follow me</p>
            <div className="footer-social__line"></div>
            <div className="footer-social__icons">
              <FacebookIcon classname="icon-social" />
              <GithubIcon classname="icon-social" />
              <LinkinIcon classname="icon-social" />
            </div>
          </div>
          {/* footer bottom copyright */}
          <div className="footer-copyright">
            <p>Alrights Reserved 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
