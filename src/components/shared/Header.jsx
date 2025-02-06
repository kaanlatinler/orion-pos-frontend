import React from "react";
import { FaSearch, FaCircle, FaBell, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/images/logo2.jpg";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-black">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-16 w-16 rounded-full" />
        <h1 className="text-lg font-semibold text-white">Orion Pos</h1>
      </div>
      <div className="flex items-center gap-4 bg-neutral-900 rounded-full px-5 py-2 w-[500px]">
        <FaSearch className="text-white" />
        <input
          type="text"
          placeholder="Search"
          className="bg-neutral-900 text-white outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-neutral-900 rounded-full p-3 cursor-pointer">
          <FaBell className="text-white text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-white text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-white font-semibold">Kaan Latinler</h1>
            <p className="text-xs text-neutral-500 font-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
