import { FacebookIcon, GithubIcon, LinkinIcon } from "@assets/icons";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* footer  navigation */}
        <nav className="footer-navigation">
          <ul role={"list"}>
            <li className="footer-navigation__item">
              <a href="Home">Home</a>
            </li>
            <li className="footer-navigation__item">
              <a href="whatido">What i do</a>
            </li>
            <li className="footer-navigation__item">
              <a href="#projects">Projects</a>
            </li>
            <li className="footer-navigation__item">
              <a href="#certificates">Certificates</a>
            </li>
            <li className="footer-navigation__item">
              <a href="#aboutme">About Me</a>
            </li>
            <li className="footer-navigation__item">
              <a href="#contactme">Contact Me</a>
            </li>
          </ul>
        </nav>
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
