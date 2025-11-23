import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideNav from "./SideNav";
import Header from "./Header";
import MobileViewScreen from "./MobileViewScreen";

const CommonLayout = () => {
  const location = useLocation();
  
  // Show MobileViewScreen only on Home, SAM, and Pix screens
  const showMobileViewScreen = ["/Home", "/SAM", "/Pix"].includes(location.pathname);

  return (
    <div className="flex h-screen overflow-hidden group">
      <SideNav />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header on top */}
        <Header />
        {/* Content area with Outlet in center and MobileViewScreen on right */}
        <div className="flex-1 flex min-w-0 overflow-hidden">
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
          {showMobileViewScreen && <MobileViewScreen />}
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
