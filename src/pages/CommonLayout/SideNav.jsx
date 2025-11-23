import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();

  const navItems = [
    {
      label: "Sam",
      icon: "/assests/Sidebar_icons/sam_ai.svg",
      path: "/SAM",
    },
    {
      label: "Home",
      icon: "/assests/Sidebar_icons/home.svg",
      path: "/Home",
    },
    {
      label: "Pix",
      icon: "/assests/Sidebar_icons/pix.svg",
      path: "/Pix",
    },
    {
      label: "Connect",
      icon: "/assests/Sidebar_icons/connect.svg",
      path: "/Connect",
    },
    {
      label: "Analytics",
      icon: "/assests/Sidebar_icons/analytics.svg",
      path: "/Analytics",
    },
    {
      label: "Subscribers",
      icon: "/assests/Sidebar_icons/subscribers.svg",
      path: "/Subscribers",
    },
    {
      label: "Security Groups",
      icon: "/assests/Sidebar_icons/security_groups.svg",
      path: "/SecurityGroups",
    },
  ];

  return (
    <div className="group relative h-screen flex flex-col justify-between p-4 border-r border-r-gray-300 w-[5%] hover:w-1/6 transition-all duration-300 overflow-hidden">
      {/* Upper Left - Main Navigation */}
      <div className="flex flex-col gap-4">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isActive ? "" : "text-gray-700 hover:bg-gray-100"
              }`}
              style={
                isActive
                  ? {
                      backgroundColor: "#DEDFFF",
                      color: "#605BFF",
                    }
                  : {}
              }
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-5 h-5 shrink-0"
                style={
                  isActive
                    ? {
                        filter:
                          "brightness(0) saturate(100%) invert(40%) sepia(95%) saturate(2878%) hue-rotate(230deg) brightness(100%) contrast(101%)",
                      }
                    : {}
                }
              />
              <span className="text-sm font-medium whitespace-nowrap max-w-0 group-hover:max-w-full overflow-hidden transition-all duration-300">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Lower Left - Settings */}
      <div className="flex flex-col">
        <Link
          to="/Settings"
          className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
            location.pathname === "/Settings"
              ? ""
              : "text-gray-700 hover:bg-gray-100"
          }`}
          style={
            location.pathname === "/Settings"
              ? {
                  backgroundColor: "#DEDFFF",
                  color: "#605BFF",
                }
              : {}
          }
        >
          <span className="text-sm font-medium whitespace-nowrap max-w-0 group-hover:max-w-full overflow-hidden transition-all duration-300">
            Settings
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
