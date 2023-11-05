import React from "react";
import Navv from "./Navbar";
import Topnav from "./TopNav";
import Kernel from "./Kernel";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="h-screen w-full bg-white relative flex overflow-hidden">
        <Navv />

        <div className="w-full h-full flex flex-col justify-between">
          <Topnav />
          <Kernel />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
