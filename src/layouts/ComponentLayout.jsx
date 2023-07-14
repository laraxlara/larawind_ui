import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

const ComponentLayout = ({ children }) => {
  return (
    <div className="w-full h-full flex bg-gray-100">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ComponentLayout;
