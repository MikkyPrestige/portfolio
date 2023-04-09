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
    // color: "var(--color--green)",
background: "linear-gradient(220deg, rgba(147,249,185,1) 18%, rgba(8,68,227,1) 47%, rgba(48,220,197,0.782125350140056) 77%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textDecoration: "none",
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
            <span className="layout--header__title__content__span--elue">
              ELUE
            </span>
            <span className="layout--header__title__content__span--michael">
              MICHAEL
            </span>
            <span className="layout--header__title__content__span--line">
              {"/"}
            </span>
            <span className="layout--header__title__content__span">{">"}</span>
          </h1>
        </div>
        <nav className="layout--nav">
          <button className="layout--nav__button" onClick={toggleMenu}>
            {showMenu ? <MdClose /> : <FiMenu />}
          </button>
          <div className={`layout--nav__content ${showMenu ? "show" : ""}`}>
            <ul className="layout--nav__content__list">
              <li>
                <CustomNavLink
                  to="/"
                  onClick={closeMenu}
                  className="layout--nav__content__list__item"
                >
                  <span>#</span>Home
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/about"
                  onClick={closeMenu}
                  className="layout--nav__content__list__item"
                >
                  <span>#</span>About me
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/projects"
                  onClick={closeMenu}
                  className="layout--nav__content__list__item"
                >
                  <span>#</span>Projects
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="layout--nav__content__list__item"
                >
                  <span>#</span>Contact
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
  const [magicLinePosition, setMagicLinePosition] = useState({ left: "1.5rem", width: 0 });
  const handleMagicLine = (e) => {
    const menuItem = e.target;
    const { offsetLeft: left, offsetWidth: width } = menuItem;
    setMagicLinePosition({ left, width });
  };

  return (
    <div className="layout--large">
      <header className="layout--header">
        <div className="layout--header__title">
          <h1 className="layout--header__title__content">
            <span className="layout--header__title__content__span">{"<"}</span>
            <span className="layout--header__title__content__span--elue">
              ELUE
            </span>
            <span className="layout--header__title__content__span--michael">
              MICHAEL
            </span>
            <span className="layout--header__title__content__span--line">
              {"/"}
            </span>
            <span className="layout--header__title__content__span">{">"}</span>
          </h1>
        </div>
        <div className="layout--large__menu">
          <ul className="layout--large__menu__list">
            <CustomNavLink to="/" className="layout--large__menu__list__item" onMouseEnter={handleMagicLine}>
              Home
            </CustomNavLink>
            <CustomNavLink
              to="/about"
              className="layout--large__menu__list__item"
              onMouseEnter={handleMagicLine}
            >
              About
            </CustomNavLink>
            <CustomNavLink
              to="/projects"
              className="layout--large__menu__list__item"
              onMouseEnter={handleMagicLine}
            >
              Projects
            </CustomNavLink>
            <CustomNavLink
              to="/contact"
              className="layout--large__menu__list__item"
              onMouseEnter={handleMagicLine}
            >
              Contact
            </CustomNavLink>
          </ul>
          <div
            className="layout--large__menu__magic-line"
            style={{ left: magicLinePosition.left, width: magicLinePosition.width }}
          ></div>
        </div>
      </header>
    </div>
  );
};

export { Layout, LayoutSmall, LayoutLarge };
