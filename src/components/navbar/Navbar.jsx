import React, { useState, useEffect } from "react";
import classnames from "classnames";

function Navbar(props) {
  const [activeNav, setActiveNav] = useState(false);

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
        "navbar--hidden": !activeNav
      })}
    >
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
}

export default Navbar;
