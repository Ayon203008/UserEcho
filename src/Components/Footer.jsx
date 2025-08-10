import React from "react";
import { NavLink } from "react-router";
import { GrCloudComputer } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <NavLink to="/" className="flex items-center gap-3 text-indigo-400 hover:text-indigo-500 transition">
          <GrCloudComputer size={80} />
          <h1 className="text-4xl text-blue-200 font-bold font-serif">UserEcho</h1>
        </NavLink>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">All Services</a>
          <a className="link link-hover">Contact</a>
         
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
