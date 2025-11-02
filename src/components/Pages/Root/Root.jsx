import React from "react";
import { Navbar } from "../../Header/Navbar";
import { Outlet } from "react-router";
import { Footer } from "../../Footer/Footer";
import { Helmet } from "react-helmet-async";

export const Root = () => {
  return (
    <div >
      <Helmet>
        <title>Book Vibe | Home</title>
      </Helmet>
      <div className="lg:px-[10%] md:px[8%] px-[5%]">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
