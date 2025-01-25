import React from "react";
import { IoToday } from "react-icons/io5";
import Calender from "./Calender";

const Navigation = () => {
  return (
    <div className="navigation w-64 h-screen border-black border-l-2 bg-white">
      
      <div className="OopsLater">
        <p className="text-3xl font-semibold pl-9 pt-6 font-mono">OopsLater</p>
      </div>

      
      <div className="links">
        <ul className="pt-9 pl-5">
          <li className="text-2xl font-medium pb-4">
            <a
              href="#"
              className="block py-2 px-5 rounded-lg hover:bg-gray-100 hover:shadow-md"
            >
              Dashboard
            </a>
          </li>
          <li className="text-2xl font-medium pb-4">
            <a
              href="#"
              className="block py-2 px-5 rounded-lg hover:bg-gray-100 hover:shadow-md"
            >
              Tasks
            </a>
          </li>
        </ul>
      </div>

     
      <div className="pt-8 px-4">
        <Calender />
      </div>

      
      <div className="profile flex pt-6 px-6 items-center space-x-3 cursor-pointer hover:bg-gray-100 rounded-xl shadow-md py-2">
        <img
          src="https://www.w3schools.com/w3images/avatar2.png" 
          className="w-12 h-12 rounded-full border-2 border-gray-300"
          alt="Profile"
        />
        <p className="text-lg font-medium text-gray-700">John Doe</p>
      </div>
    </div>
  );
};

export default Navigation;
