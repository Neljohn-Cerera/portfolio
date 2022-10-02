import { DownloadIcon, MenuIcon, MyLogo } from "@assets/icons";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      {/* header logo */}
      <MyLogo classname="header-logo" fill="#ffffff" />

      {/* header button menu */}
      <button className="btn btn-menu">
        <MenuIcon classname="btn-menu__icon" />
      </button>

      {/* header navigation */}
      <nav className="header-navigation">
        {/* header navigation list */}
        <ul role={"list"} className="header-navigation__list">
          <li className="header-navigation__item">
            <a href="Home">Home</a>
          </li>
          <li className="header-navigation__item">
            <a href="#projects">Projects</a>
          </li>
          <li className="header-navigation__item">
            <a href="#certificates">Certificates</a>
          </li>
          <li className="header-navigation__item">
            <a href="#aboutme">About Me</a>
          </li>
          <li className="header-navigation__item">
            <a href="#contactme">Contact Me</a>
          </li>
        </ul>
      </nav>
      {/* header button download cv */}
      <button className="btn btn-download">
        Download CV <DownloadIcon classname="btn-download__icon" />
      </button>
    </header>
  );
};

export default Header;
