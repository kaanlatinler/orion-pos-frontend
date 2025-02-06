import React from "react";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoMdReorder } from "react-icons/io";
import { MdTableRestaurant } from "react-icons/md";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-2 h-16 flex justify-around bg-black ">
      <button className="text-neutral-100 bg-neutral-900 w-[200px] rounded-[20px] flex items-center justify-center">
        <FaHome className="inline mr-2" size={30} />
        <p>Home</p>
      </button>
      <button className="text-neutral-100 bg-neutral-900 w-[200px] rounded-[20px] flex items-center justify-center">
        <IoMdReorder className="inline mr-2" size={30} />
        <p>Orders</p>
      </button>
      <button className="text-neutral-100 bg-neutral-900 w-[200px] rounded-[20px] flex items-center justify-center">
        <MdTableRestaurant className="inline mr-2" size={30} />
        <p>Tables</p>
      </button>
      <button className="text-neutral-100 bg-neutral-900 w-[200px] rounded-[20px] flex items-center justify-center">
        <CiCircleMore className="inline mr-2" size={30} />
        <p>More</p>
      </button>

      <button className="absolute bottom-6 bg-amber-400 text-white rounded-full p-3 items-center">
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};

export default BottomNav;
