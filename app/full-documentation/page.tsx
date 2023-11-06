import React from "react";
import Navv from "../Navbar";
import Topnav from "../TopNav";
import Documentation from "./Documentation";
import Footer from "../Footer";

const Home: React.FC = () => {
  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden">
      <Navv />

      <div className="w-full h-full flex flex-col justify-between overflow-y-scroll">
        <Topnav />
        <Documentation />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
