import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="index.html">
        <img
          className="nav-image"
          src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
          alt="Logo"
        />
      </Link>
      <div className="nav-links">
        <ul>
          <li className="navbar-links-item">
            <Link className="item" to="/view-properties">
              View Properties
            </Link>
          </li>
          <li className="navbar-links-item">
            <Link className="add-properties" to="/add-properties">
              Add a Property
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
