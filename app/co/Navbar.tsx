import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 sticky">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Day6 Studio</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Workshops</a>
          </li>
          <li>
            <a>Products</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
