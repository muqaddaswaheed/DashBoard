import React, { useState } from "react";
import board1 from "../assets/photos/board1.png";
import dashboardIcon from "../assets/photos/timer.png";
import appsIcon from "../assets/photos/window.png";
import orgIcon from "../assets/photos/9dot.png";
import usersIcon from "../assets/photos/profile.png";
import accessIcon from "../assets/photos/lock.png";
import themeIcon from "../assets/photos/bars2.png";

const Sidebar = ({ collapsed }) => {
  const [activeItem, setActiveItem] = useState(""); // Track the active menu item

  const menuItems = [
    { name: "Dashboard", icon: dashboardIcon },
    { name: "Apps", icon: appsIcon },
    { name: "Organization Management", icon: orgIcon },
    { name: "Users Management", icon: usersIcon },
    { name: "Access Management", icon: accessIcon },
    { name: "Theme Settings", icon: themeIcon },
  ];

  const handleClick = (itemName) => {
    setActiveItem(itemName); // Highlight active menu item
    console.log(`${itemName} clicked!`); // Log menu item click
  };

  return (
    <div className="relative">
      {/* Sidebar Container */}
      <aside
        className={`bg-white h-screen transition-all duration-300 transform border-r shadow-2xl ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center px-4 py-4">
            <img
              src={board1}
              alt="CareX Logo"
              className="h-8 transition-all duration-300"
            />
          
        </div>

        {/* Navigation Menu */}
        <nav className="py-4">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(item.name)}
                className={`flex items-center text-sm space-x-4 py-3 px-4 cursor-pointer rounded-md ${
                  activeItem === item.name
                    ? "bg-gray-200 text-black font-bold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {/* Menu Item Icon */}
                <img
                  src={item.icon}
                  alt={`${item.name} Icon`}
                  className="w-5 h-5"
                />
                {/* Menu Item Text */}
                {!collapsed && <span>{item.name}</span>}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
