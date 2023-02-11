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
    color: "red",
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
    <div className="layout layout-small">
      <header className="layout--header">
        <div className="layout--title">
          <h1 className="layout--title__content">
            {"<"}ELUEMICHAEL {"/>"}
          </h1>
        </div>
        <div className="layout--menu">
          <button className="layout--menu__button" onClick={toggleMenu}>
            {showMenu ? <MdClose /> : <FiMenu />}
          </button>
          <div
            className={`layout--menu__content ${showMenu ? "show" : ""}`}
          >
            <ul className="layout--menu__content__list">
              <li className="layout--menu__content__list__item">
                <CustomNavLink to="/" onClick={closeMenu}>
                  Home
                </CustomNavLink>
              </li>
              <li className="layout-small--menu__content__list__item">
                <CustomNavLink to="/about" onClick={closeMenu}>
                  About
                </CustomNavLink>
              </li>
              <li className="layout-small--menu__content__list__item">
                <CustomNavLink to="/projects" onClick={closeMenu}>
                  Projects
                </CustomNavLink>
              </li>
              <li className="layout-small--menu__content__list__item">
                <CustomNavLink to="/contact" onClick={closeMenu}>
                  Contact
                </CustomNavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

const LayoutLarge = () => {
  return (
    <div className="layout layout-large">
      <header className="layout-large--header">
        <div className="layout-large--title">
          <h1 className="layout-large--title__content">
            {"<"}ELUEMICHAEL {"/>"}
          </h1>
        </div>
        <div className="layout-large--menu">
          <ul className="layout-large--menu__list">
            <li className="layout-large--menu__list__item">
              <CustomNavLink to="/">Home</CustomNavLink>
            </li>
            <li className="layout-large--menu__list__item">
              <CustomNavLink to="/about">About</CustomNavLink>
            </li>
            <li className="layout-large--menu__list__item">
              <CustomNavLink to="/projects">Projects</CustomNavLink>
            </li>
            <li className="layout-large--menu__list__item">
              <CustomNavLink to="/contact">Contact</CustomNavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export { Layout, LayoutSmall, LayoutLarge };
