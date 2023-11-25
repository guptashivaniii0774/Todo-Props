import React from "react";

const Navbar = ({ name, version, about }) => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light">{name}</span>
        <span className="navbar-brand mb-0 h1 text-light">
          {`${about} ${version}`}
        </span>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  name: "My Props Todo",
  version: "1.0v",
  about: "Todo",
};

export default Navbar;
