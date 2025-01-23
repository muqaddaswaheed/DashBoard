import React, { useState } from "react";
// Import images
import board1 from "../assets/photos/logomain.png";
import dashboardIcon from "../assets/photos/timer.png";
import appsIcon from "../assets/photos/window.png";
import orgIcon from "../assets/photos/9dot.png";
import usersIcon from "../assets/photos/profile.png";
import accessIcon from "../assets/photos/lock.png";
import themeIcon from "../assets/photos/bars2.png";
import sidebarIcon from "../assets/photos/sidebar.svg"; // Import your sidebar toggle icon

const Sidebar = () => {
  // State to track the active menu item
  const [activeItem, setActiveItem] = useState("");

  // State to toggle sidebar collapse
  const [collapsed, setCollapsed] = useState(false); // Sidebar is initially not collapsed

  // Sidebar menu items data
  const menuItems = [
    { name: "Dashboard", icon: dashboardIcon },
    { name: "Apps", icon: appsIcon },
    { name: "Organization Management", icon: orgIcon },
    { name: "Users Management", icon: usersIcon },
    { name: "Access Management", icon: accessIcon },
    { name: "Theme Settings", icon: themeIcon },
  ];

  // Handle menu item click
  const handleClick = (itemName) => {
    setActiveItem(itemName); // Set the active menu item
    console.log(`${itemName} clicked!`); // Log the item clicked
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <aside
        className={`bg-white h-screen transition-all duration-300 transform border-r border-gray-300 
          ${collapsed ? "w-16" : "w-64"}`} // Adjust width based on collapsed state
      >
        {/* Logo and Sidebar Title */}
        <div className="flex items-center px-4 py-4 space-x-4 justify-between">
          {/* Sidebar Toggle Icon (click to collapse/expand) */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-600 focus:outline-none" // Position the button at the top-left
          >
            <img
              src={sidebarIcon}
              alt="Sidebar Toggle"
              className="w-6 h-6" // Match the size of the menu icons
            />
          </button>

          {/* Logo (only visible if not collapsed) */}
          <img
  src={board1}
  alt="CareX Logo"
  className={`h-8  pr-20 transition-all duration-300 ${collapsed ? "hidden" : "block"} `} // mx-auto centers the logo horizontally
/>

        </div>

        {/* Navigation Menu */}
        <nav className="py-4">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(item.name)} // Handle click event
                className={`flex items-center text-sm space-x-4 py-3 px-4 cursor-pointer rounded-md
                  ${activeItem === item.name
                    ? "bg-gray-200 text-black font-bold"
                    : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {/* Icon */}
                <img
                  src={item.icon}
                  alt={`${item.name} Icon`}
                  className="w-5 h-5"
                />
                {/* Text (only visible if not collapsed) */}
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
