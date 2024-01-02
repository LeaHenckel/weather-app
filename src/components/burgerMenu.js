// BurgerMenu.js
"use client";

import React from "react";
import WeatherOverview from "./weatherOverview";

const BurgerMenu = ({ toggleBurgerMenu }) => {
  return (
    <div className="fixed top-0 right-0 h-screen w-full bg-linearBlue flex items-center justify-center">
      {/* Content of the BurgerMenu */}
      <WeatherOverview toggleBurgerMenu={toggleBurgerMenu} />
    </div>
  );
};

export default BurgerMenu;
