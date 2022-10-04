import { DownloadIcon, MenuIcon, MyLogo } from "@assets/icons";
import classnames from "classnames";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean | undefined>(undefined);

  const handleClickOpenMenu = () => {
    !openMenu ? setOpenMenu(true) : openMenu ? setOpenMenu(false) : undefined;
  };
  return (
    <header className="header">
      {/* header logo */}
      <MyLogo classname="header-logo" fill="#ffffff" />

      {/* header button menu */}
      <button className="btn btn-menu" onClick={handleClickOpenMenu}>
        <MenuIcon classname="btn-menu__icon" />
      </button>

      {/* header navigation */}
      <nav className="header-navigation">
        {/* header navigation list */}
        <ul
          role={"list"}
          className={classnames("header-navigation__list", {
            "header-navigation__list--animate": openMenu == true,
            "header-navigation__list--animate-close": openMenu == false,
          })}
        >
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
          <li className="header-navigation__item-download">
            <a href="#contactme">Download CV</a>
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
