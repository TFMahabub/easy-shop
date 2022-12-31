import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../ShearedComponents/Navbar/Nav/Nav";

const MainLayouts = () => {
  return (
    <div>
      <Nav />
      <div className="px-3 lg:px-0">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
