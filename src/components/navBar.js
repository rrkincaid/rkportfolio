import React from "react";
import "../styles/navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-100 mt-auto bg-dark p-3">
      <ul>
        <li>
          {" "}
          <Link to="/"> HOME </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/contact">CONTACT</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/about"> ABOUT </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/projects"> PROJECTS </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
