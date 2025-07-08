import React from "react";
import "../main.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-black text-white h-14 p-10 flex items-center justify-between fixed w-full">
        <h1 className="text-3xl font-bold">Ngen</h1>
        <div className="flex gap-6">
          <Link to="Home" >Home</Link>
          <Link to="About">About</Link>
          <Link to="help"> Help</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
