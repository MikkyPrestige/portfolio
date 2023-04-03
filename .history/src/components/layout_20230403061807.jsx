import React from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// const navigate = useNavigate();

const Back = () => {
  useNavigate("/");
}

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
        <div className="layout--header__title" onClick={Back}>
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
  return (
    <div className="layout--large">
      <header className="layout--header">
        <div className="layout--header__title">
          <h1 className="layout--header__title__content" onClick={Back}>
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
              <CustomNavLink to="/" className="layout--large__menu__list__item">Home</CustomNavLink>
              <CustomNavLink to="/about" className="layout--large__menu__list__item">About</CustomNavLink>
              <CustomNavLink to="/projects" className="layout--large__menu__list__item">Projects</CustomNavLink>
              <CustomNavLink to="/contact" className="layout--large__menu__list__item">Contact</CustomNavLink>
          </ul>
        </div>
      </header>
    </div>
  );
};

export { Layout, LayoutSmall, LayoutLarge };
