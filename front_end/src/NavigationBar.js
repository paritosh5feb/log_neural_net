import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <>
      <div className="Navigator">
        <nav>
          <h2>ANN for Sonic Log Prediction</h2>
          <ul className="nvlink">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/About">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigator;
