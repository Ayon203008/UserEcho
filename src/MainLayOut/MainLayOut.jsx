import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayOut = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className=" flex-grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
