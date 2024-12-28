import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function MainHome() {
  return (
    <div>
      <div className="h-[72px] ">
        <div className="h-[72px] fixed z-[10] w-full ">
          <Navbar />
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
