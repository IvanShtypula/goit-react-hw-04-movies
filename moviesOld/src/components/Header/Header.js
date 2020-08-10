import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <NavLink exact to="/" className="link" activeClassName="link-active">
            Home
          </NavLink>
          <NavLink to="/movies" className="link" activeClassName="link-active">
            Movies
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
