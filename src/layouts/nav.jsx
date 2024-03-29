import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { TbSmartHome } from "react-icons/tb";
import { BiCodeAlt } from "react-icons/bi";
import { FcWorkflow, FcCollaboration } from "react-icons/fc";
import Avatar from "../components/avatar";
import Logo from "../assets/images/logo.png";

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
    background:
      "linear-gradient(220deg, rgba(34,139,230,1) 0%, rgba(167,209,245,1) 66%, rgba(78,162,235,1) 100%)",
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
    <section className="layout layout--small">
      <header className="layout--header">
        <Link to="/" className="layout--header__logo">
          <Avatar
            image={Logo}
            alt="Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
        <nav className="layout--nav">
          <button
            className="layout--nav__button"
            type="button"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {showMenu ? (
              <MdClose
                style={{ width: "3rem", height: "3rem", color: "#228be6" }}
              />
            ) : (
              <FiMenu
                style={{ width: "3rem", height: "3rem", color: "#228be6" }}
              />
            )}
          </button>
          <div className={`layout--nav__content ${showMenu ? "show" : ""}`}>
            <ul className="layout--nav__content__list">
              <li>
                <CustomNavLink
                  to="/"
                  onClick={closeMenu}
                  className="layout--nav__content__list__item"
                >
                  <TbSmartHome
                    style={{ width: "3rem", height: "3rem", color: "#228be6" }}
                  />
                  Home
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/background"
                  onClick={closeMenu}
                  className="layout--nav__content__list__item"
                >
                  <BiCodeAlt
                    style={{ width: "3rem", height: "3rem", color: "#228be6" }}
                  />
                  Background
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/projects"
                  onClick={closeMenu}
                  className="layout--nav__content__list__item"
                >
                  <FcWorkflow style={{ width: "3rem", height: "3rem" }} />
                  Projects
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="layout--nav__content__list__item"
                >
                  <FcCollaboration style={{ width: "3rem", height: "3rem" }} />
                  Contact
                </CustomNavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </section>
  );
};

const LayoutLarge = () => {
  const [magicLinePosition, setMagicLinePosition] = useState({
    left: "1.5rem",
    width: 0,
  });
  const handleMagicLine = (e) => {
    const menuItem = e.target;
    const { offsetLeft: left, offsetWidth: width } = menuItem;
    setMagicLinePosition({ left, width });
  };

  return (
    <section className="layout--large">
      <header className="layout--large__header">
        <Link to="/" className="layout--large__header__logo">
          <Avatar
            image={Logo}
            alt="Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
        <div className="layout--large__menu">
          <nav className="layout--large__menu__list">
            <CustomNavLink
              to="/"
              className="layout--large__menu__list__item"
              onMouseEnter={handleMagicLine}
            >
              Home
            </CustomNavLink>
            <CustomNavLink
              to="/background"
              className="layout--large__menu__list__item"
              onMouseEnter={handleMagicLine}
            >
              Background
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
          </nav>
          <div
            className="layout--large__menu__magic-line"
            style={{
              left: magicLinePosition.left,
              width: magicLinePosition.width,
            }}
          ></div>
        </div>
      </header>
    </section>
  );
};

export default Layout;
