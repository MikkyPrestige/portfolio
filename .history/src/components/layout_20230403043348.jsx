import React from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "./avatar";
import MoreThan from "../assets/images/icon-more-than.svg";
import LessThan from "../assets/images/icon-less-than.svg";

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
    color: "var(--color--green)",
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
          <div className="layout--header__title__content">
            <span className="layout--header__title__content__span">
              <Avatar
                image={LessThan}
                alt="Less Than Icon"
                style={{ width: "100%", height: "100%" }}
              />
            </span>
            <span className="layout--header__title__content__span--2">
              ELUE
            </span>
            <span className="layout--header__title__content__span--3">
              MICHAEL
            </span>
            <span className="layout--header__title__content__span margin-left-minus">
              /
            </span>
            <span className="layout--header__title__content__span margin-left-minus">
              <Avatar
                image={MoreThan}
                alt="More Than Icon"
                style={{ width: "100%", height: "100%" }}
              />
            </span>
          </div>
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
                  <span>#</span>Home
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/about"
                  onClick={closeMenu}
                  className="layout--menu__content__list__item"
                >
                  <span>#</span>About me
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/projects"
                  onClick={closeMenu}
                  className="layout--menu__content__list__item"
                >
                  <span>#</span>Projects
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="layout--menu__content__list__item"
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
  return (
    <div className="layout--large">
      <header className="layout--large__header">
        <div className="layout--large__header__title">
          <h1 className="layout--large__header__title__content">
            <span className="layout--large__header__title__content__span">{"<"}</span>
            <span className="layout--large__header__title__content__span--elue">
              ELUE
            </span>
            <span className="layout--large__header__title__content__span--michael">
            MICHAEL
            </span>
            <span className="layout--large__header__title__content__span--elue">
              {"/"}
              </span>
            <span className="layout--large__header__title__content__span">{">"}</span>
          </h1>
        </div>
        <div className="layout--large__header__menu">
          <ul className="layout--large__header__menu__list">
            <li className="layout--large__header__menu__list__item">
              <CustomNavLink to="/">Home</CustomNavLink>
            </li>
            <li className="layout--large__header__menu__list__item">
              <CustomNavLink to="/about">About me</CustomNavLink>
            </li>
            <li className="layout--large__header__menu__list__item">
              <CustomNavLink to="/projects">Projects</CustomNavLink>
            </li>
            <li className="layout--large__header__menu__list__item">
              <CustomNavLink to="/contact">Contact</CustomNavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export { Layout, LayoutSmall, LayoutLarge };
