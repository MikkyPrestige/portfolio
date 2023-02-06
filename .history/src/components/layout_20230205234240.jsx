import React from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

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

export default Layout;
