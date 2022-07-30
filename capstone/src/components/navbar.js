import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Hello welcome to my Car collection!!</h1>
      <div className="navbar-links">
        <NavLink
          exact
          className="navbar-link"
          activeClassName="selected"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-book"
        >
          Add A Car!
        </NavLink>
      </div>
    </div>
  );
}
