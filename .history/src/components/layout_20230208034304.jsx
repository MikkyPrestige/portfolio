import React from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <header className="layout--header">
        <div className="layout--title">
          <h1 className="layout--title__content">{"<"}ELUEMICHAEL {"/>"}</h1>
        </div>
      </header>
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
      style={({ isActive }) => isActive ? activeStyle : { textDecoration: "none" }}
      {...props}
    />
  );
};


const LayoutSmall = () => {

export default Layout;
