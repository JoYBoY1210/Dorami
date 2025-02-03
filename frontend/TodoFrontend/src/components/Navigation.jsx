import React from "react";
import { IoToday } from "react-icons/io5";
import Calender from "./Calender";
import { useUser } from "../context/UserContext";  
import { NavLink,Link } from "react-router-dom";

const Navigation = () => {
  const { user } = useUser();  
  return (
    <div className="navigation w-full sm:w-64 h-screen border-black border-l-2 bg-white flex flex-col">
      <div className="OopsLater text-center sm:text-left">
        <p className="text-2xl sm:text-3xl font-semibold sm:pl-9 pt-6 font-mono">OopsLater</p>
      </div>
      <div className="links flex-grow">
        <ul className="pt-6 sm:pt-9 pl-2 sm:pl-5">
          <li className="text-lg sm:text-2xl font-medium pb-3 sm:pb-4">
            {/* <a
              href="#"
              className="block py-2 px-4 sm:px-5 rounded-lg hover:bg-gray-100 hover:shadow-md"
            >
              Dashboard
            </a> */}
            <Link to="/dashboard" className="block py-2 px-4 sm:px-5 rounded-lg hover:bg-gray-100 hover:shadow-md ">
              Dashboard
            </Link>
          </li>
          <li className="text-lg sm:text-2xl font-medium pb-3 sm:pb-4">
            <a
              href="#"
              className="block py-2 px-4 sm:px-5 rounded-lg hover:bg-gray-100 hover:shadow-md"
            >
              Tasks
            </a>
          </li>
        </ul>
      </div>
      <div className="pt-6 sm:pt-8 px-2 sm:px-4">
        <Calender />
      </div>
      <div className="profile flex pt-4 sm:pt-6 px-4 sm:px-6 items-center space-x-3 cursor-pointer hover:bg-gray-100 rounded-xl shadow-md py-2">
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300"
          alt="Profile"
        />
        <p className="text-base sm:text-lg font-medium text-gray-700">
          {user ? user.username : "Guest"}  
        </p>
      </div>
    </div>
  );
};

export default Navigation;
