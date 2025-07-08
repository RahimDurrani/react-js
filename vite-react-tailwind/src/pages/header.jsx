import React from "react";
import "../main.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-black text-white h-14 p-10 flex items-center justify-between  w-full">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-white bg-clip-text text-transparent">Next Generation PVT LTD</h1>
        <div className="flex gap-6  p-12">
          <Link to="Home" >Home</Link>
          <Link to="About">About</Link>
          <Link to="help"> Help</Link>
          <Link className=" h-10 w-24 text-center rounded text-2xl font-bold bg-black text-green-600 border" to="Loginpg">Login</Link>
        </div>
         
      </div>
    </>
  );
};

export default Header;
