import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Avatar from "../components/avatar";
import Logo from "../assets/images/logo.webp";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const CustomNavLink = ({ to, label, end, className, onClick }) => (
  <NavLink
    to={to}
    end={end}
    onClick={onClick}
    className={({ isActive }) =>
      `${className || ""} ${isActive ? "is-active" : ""}`.trim()
    }
  >
    {label}
  </NavLink>
);

const Layout = ({ colorMode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);
  const themeClass = colorMode === "dark" ? "theme-dark" : "";

  return (
    <>
      {/* Mobile Nav */}
      <section className={`layout layout--small ${themeClass}`}>
        <header className="layout__header">
          <Link to="/" className="layout__logo" aria-label="Go to homepage">
            <Avatar image={Logo} alt="Brand Logo" style={{ width: "100%", height: "100%", backgroundColor: "rgba(31, 42, 55, 0.25)", objectFit: "cover" }} />
          </Link>

          <button
            className="layout__menu-btn"
            type="button"
            aria-label={showMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMenu}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            {showMenu ? <MdClose /> : <FiMenu />}
          </button>

          <nav id="mobile-menu" className={`layout__drawer ${showMenu ? "show" : ""}`}>
            <ul className="layout__drawer-list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <CustomNavLink
                    to={item.to}
                    label={item.label}
                    end={item.end}
                    onClick={closeMenu}
                    className="layout__drawer-link"
                  />
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </section>

      {/* Desktop Nav */}
      <section className={`layout--large ${themeClass}`}>
        <header className="layout__header layout__header--desktop">
          <Link to="/" className="layout__logo layout__logo--desktop" aria-label="Go to homepage">
            <Avatar image={Logo} alt="Brand Logo" style={{ width: "100%", height: "100%", backgroundColor: "rgba(31, 42, 55, 0.25)", objectFit: "cover" }} />
          </Link>

          <nav className="layout__nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <CustomNavLink
                key={item.to}
                to={item.to}
                label={item.label}
                end={item.end}
                className="layout__nav-link"
              />
            ))}
          </nav>
        </header>
      </section>
    </>
  );
};

export default Layout;