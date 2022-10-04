import { DownloadIcon, MenuIcon, MyLogo } from "@assets/icons";
import classnames from "classnames";
import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean | undefined>(undefined);

  const handleClickOpenMenu = () => {
    !openMenu ? setOpenMenu(true) : openMenu ? setOpenMenu(false) : undefined;
  };
  return (
    <header id="home" className="header">
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
            <AnchorLink href="#home">Home</AnchorLink>
          </li>
          <li className="header-navigation__item">
            <AnchorLink href="#projects">Projects</AnchorLink>
          </li>
          <li className="header-navigation__item">
            <AnchorLink href="#certificates">Certificates</AnchorLink>
          </li>
          <li className="header-navigation__item">
            <AnchorLink href="#aboutme">About Me</AnchorLink>
          </li>
          <li className="header-navigation__item">
            <AnchorLink href="#contactme">Contact Me</AnchorLink>
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
