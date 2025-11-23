import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Map routes to page titles
  const getPageTitle = () => {
    const routeMap = {
      "/Home": "Home",
      "/SAM": "Sam",
      "/Pix": "Pix",
      "/Connect": "Connect",
      "/Analytics": "Analytics",
      "/Subscribers": "Subscribers",
      "/SecurityGroups": "Security",
      "/Settings": "Settings",
    };
    return routeMap[location.pathname] || "Home";
  };

  return (
    <div className="border-t border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Page Title on the left */}
        <h1 className="text-xl font-bold text-black">{getPageTitle()}</h1>

        {/* Share button on the right */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 text-black hover:bg-gray-200 transition-colors">
          <span className="text-sm font-medium">Share</span>
          <img
            src="/assests/Header_icons/share.svg"
            alt="Share"
            className="w-4 h-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
