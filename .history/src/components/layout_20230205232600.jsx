import React from "react";
import { ImEmbed2 } from "react-icons/im";

const Layout = () => {
  return (
    <div className="layout">
      <header className="layout--header">
        <div className="layout--title">
          <h1 className="layout--title__content">
            <ImEmbed2 className="layout--title__icon" />
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Layout;
