import React from "react";
// Import images

import bellIcon from "../assets/photos/bell.png";
import userIcon from "../assets/photos/cx.png";
import colIcon from "../assets/photos/coolicon.png";


const Header = () => {
  return (
    <header className="flex  bg-white justify-between items-center  shadow-md px-6 py-3 w-full">
      {/* Left Section: Title */}
      <h1 className="text-lg font-normal text-gray-800">Users Management</h1>

      {/* Right Section: Language Selector, Notifications, User Profile */}
      <div className="flex items-center space-x-6">
        {/* Language Selector */}
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          English
          <img src={colIcon} alt="col Icon" className="w-2 h-1 mt-1 ml-2" />
        </button>

        {/* Notifications */}
        <div className="relative">
          <img src={bellIcon} alt="Notifications" className="w-5 h-6" />
        </div>

        {/* User Profile */}
        <button className="flex items-center space-x-2">
          <img src={userIcon} alt="User Icon" className="w-10 h-6 rounded-full" />
        </button>
      </div>
    </header>
  );
};

export default Header;
