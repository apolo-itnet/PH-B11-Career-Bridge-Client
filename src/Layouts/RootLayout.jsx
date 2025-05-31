import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import "aos/dist/aos.css";
import Aos from "aos";

const RootLayout = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    })
  }, []);

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
