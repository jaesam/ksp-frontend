import React, { useState } from "react";

function NavItem(props) {
  const [open, setOpen] = useState(false);

  /* eslint-disable */
  return (
    <li className={`nav-item ${props.className}`}>
      <a href="#!" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export default NavItem;
