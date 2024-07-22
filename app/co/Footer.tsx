import React from "react";
import { RiInstagramFill, RiFacebookBoxFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.w3.org/2000/svg" target="_blank">
            <RiFacebookBoxFill size={24} />
          </a>
          <a href="https://www.w3.org/2000/svg" target="_blank">
            <RiInstagramFill size={24} />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
