import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import classnames from "classnames";

function Navbar(props) {
  const [activeNav, setActiveNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function onScroll() {
    const viewportHeight = window.innerHeight * 0.1;
    const currentYOffset = window.pageYOffset;

    setActiveNav(viewportHeight < currentYOffset);
  }

  return (
    <nav
      className={classnames("navbar", {
        "navbar--hidden": !activeNav && location.pathname === "/"
      })}
    >
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
}

export default Navbar;
