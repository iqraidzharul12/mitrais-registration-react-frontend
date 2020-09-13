import React, { useRef, useState } from "react";

export default function DefaultHeader() {
  const ref = useRef(document.createElement("div"));
  const [active, setActive] = useState(false);

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
          <a className="navbar-item">
            <img
              src="https://bulma.io/images/bulma-type-white.png"
              alt="Logo"
            />
          </a>
          <span className="navbar-burger burger" onClick={toggleBurger}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div ref={ref} className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active">Register</a>
            <a className="navbar-item">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
