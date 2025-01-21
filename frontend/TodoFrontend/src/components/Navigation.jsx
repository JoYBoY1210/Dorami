import React from "react";
import { IoToday } from "react-icons/io5";
import Calender from "./Calender";

const Navigation = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  return (
    <div className="text-gray-700 w-64 h-screen border-black border-l-2 bg-white">
      <ul className="text-lg font-semibold pl-4 pt-5">
        <li className="p-2 hover:text-black flex items-center">
          <p className="border-2 text-gray-800 border-black rounded-full w-7 h-7 flex justify-center items-center">
            {today.getDate()}
          </p>
          <p className="pl-2 text-xl">Today</p>
        </li>
        <li className="p-2 hover:text-black flex items-center">
          <p className="border-2 text-gray-800 border-black rounded-full w-7 h-7 flex justify-center items-center">
            {tomorrow.getDate()}
          </p>
          <p className="pl-2 text-xl">Tomorrow</p>
        </li>
        <li className="p-2 hover:text-black flex items-center">
          <IoToday size={28} />
          <p className="pl-2 text-xl whitespace-nowrap">Next 7 Days</p>
        </li>
      </ul>
      <div className="pt-16 px-4">
        <Calender />
      </div>
    </div>
  );
};

export default Navigation;
