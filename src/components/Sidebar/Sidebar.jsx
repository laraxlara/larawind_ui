import React from "react";
import Image from "next/image";

import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
import logo from "../../../public/logo-nobg.png";

const Sidebar = () => {
  return (
    <div className="min-h-screen flex flex-row bg-gray-100 shadow-2xl relative">
      <div className="flex flex-col w-56 md:w-80 bg-white rounded-r-3xl overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <Image src={logo} alt="Logo" width={200} height={300} />
        </div>
        <Navbar />
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
