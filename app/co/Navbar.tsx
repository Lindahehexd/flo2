import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 sticky">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">Day6 Studio</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href='/products'>Products</a>
          </li>
          <li>
            <a href='/about'>About Us</a>
          </li>
          <li>
            <a href='/about'>Workshops</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
