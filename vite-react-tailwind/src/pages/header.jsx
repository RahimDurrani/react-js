import React from "react";
import "../main.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-black text-white md:h-16 md:p-10 p-6  items-center justify-between  w-full md:flex grid grid-cols-3">
        <h1 className="md:text-3xl md:font-bold bg-gradient-to-r from-green-600 to-white bg-clip-text text-transparent ">Next Generation PVT </h1>
        <div className="flex gap-6  md:p-12 p-6">
          <Link className="hover:text-green-600"  to="Home" >Home</Link>
          <Link className="hover:text-green-600" to="About">About</Link>
          <Link className="hover:text-green-600" to="help"> Help</Link>
          <Link className="  text-center rounded  text-green-600 hover:text-white uppercase " to="Loginpg">Login</Link>
        </div>
         
      </div>
    </>
  );
};

export default Header;
