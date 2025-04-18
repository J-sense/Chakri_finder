import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
// import Footer from "../shared/Footer";

const Mainlayout = () => {
  return (
    <div>
      <Navbar />
      <main className="mb-10 max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Mainlayout;
