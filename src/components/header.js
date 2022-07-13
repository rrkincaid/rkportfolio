import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

function header() {
  return (
    <header className="text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="text-light" to="/">
          <h1 className="m-0">Rachel Ross Kincaid</h1>
        </Link>

        <p className="m-0"> Colorado-based Web Developer </p>
      </div>
    </header>
  );
}

export default header;
