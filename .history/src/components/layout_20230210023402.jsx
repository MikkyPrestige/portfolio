import React from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <LayoutSmall />
      <LayoutLarge />
    </div>
  );
};

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    color: "#cc4600",
    textDecoration: "underline",
  };

  return (
    <NavLink
      to={to}
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: "none" }
      }
      {...props}
    />
  );
};

const LayoutSmall = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="layout layout--small">
      <header className="layout--header">
        <div className="layout--header__title">
          <h1 className="layout--header__title__content">
            <span className="layout--header__title__content__span">{"<"}</span>
            <span className="layout--header__title__name">ELUE</span>
            MICHAEL{" "}
            <span className="layout--header__title__content__span">{"/>"}</span>
          </h1>
        </div>
        <nav className="layout--menu">
          <button className="layout--menu__button" onClick={toggleMenu}>
            {showMenu ? <MdClose /> : <FiMenu />}
          </button>
          <div className={`layout--menu__content ${showMenu ? "show" : ""}`}>
            <ul className="layout--menu__content__list">
              <li>
                <CustomNavLink
                  to="/"
                  onClick={closeMenu}
                  className="layout--menu__content__list__item"
                >
                  Home
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/about"
                  onClick={closeMenu}
                  className="layout--menu__content__list__item"
                >
                  About me
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/skills"
                  onClick={closeMenu}
                  className="layout--menu__content__list__item"
                >
                  Skills
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/projects"
                  onClick={closeMenu}
                  className="layout--menu__content__list__item"
                >
                  Projects
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="layout--menu__content__list__item"
                >
                  Contact
                </CustomNavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

const LayoutLarge = () => {
  return (
    <div className="layout layout--large">
      <header className="layout--header">
        <div className="layout--title">
          <h1 className="layout--title__content">
            <span className="layout--title__content__span">{"<"}</span>
            <span className="layout--header__title__span--2">ELUE</span>
            MICHAEL<span className="layout--title__content__span">{"/>"}</span>
          </h1>
        </div>
        <div className="layout--menu">
          <ul className="layout--menu__list">
            <li className="layout--menu__list__item">
              <CustomNavLink to="/">Home</CustomNavLink>
            </li>
            <li className="layout--menu__list__item">
              <CustomNavLink to="/about">About me</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/skills">Skills</CustomNavLink>
            </li>
            <li className="layout--menu__list__item">
              <CustomNavLink to="/projects">Projects</CustomNavLink>
            </li>
            <li className="layout--menu__list__item">
              <CustomNavLink to="/contact">Contact</CustomNavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export { Layout, LayoutSmall, LayoutLarge };
