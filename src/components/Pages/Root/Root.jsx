import React from "react";
import { Navbar } from "../../Header/Navbar";
import { Outlet } from "react-router";
import { Footer } from "../../Footer/Footer";

export const Root = () => {
  return (
    <div >
      <div className="lg:px-[10%] md:px[8%] px-[5%]">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
