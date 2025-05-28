import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import "aos/dist/aos.css";

const RootLayout = () => {


  return (
    <div className="w-full flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow">
        {/* This Outlet will render the child routes */}
        <Outlet />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
