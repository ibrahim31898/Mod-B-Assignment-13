import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            justifyContent: "space-evenly"
          }}
        >
          <li>
            <NavLink to="/">Login</NavLink>
          </li>
          <li>
            <NavLink to="Signup">Signup</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
