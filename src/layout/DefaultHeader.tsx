import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

export default function DefaultHeader() {
  const ref = useRef(document.createElement("div"));
  const [active, setActive] = useState(false);
  const history = useHistory();

  const toggleBurger = () => {
    if (active) {
      ref.current.className = "navbar-menu";
      setActive(false);
    } else {
      ref.current.className = "navbar-menu is-active";
      setActive(true);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <p className="navbar-item is-size-3">LOGO</p>
          <span className="navbar-burger burger" onClick={toggleBurger}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div ref={ref} className="navbar-menu">
          <div className="navbar-end">
            <a
              className="navbar-item"
              onClick={(e) => {
                e.preventDefault();
                history.push("register");
              }}
            >
              Register
            </a>
            <a
              className="navbar-item"
              onClick={(e) => {
                e.preventDefault();
                history.push("login");
              }}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
