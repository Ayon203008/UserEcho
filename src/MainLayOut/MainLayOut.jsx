import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayOut = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
        {/* chnaged the backgorund color into dark theme  */}

    <div className="w-11/12 mx-auto flex flex-col min-h-screen ">
      <div className=" flex-grow">
        <Outlet></Outlet>
      </div>
    </div>
      <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayOut;
