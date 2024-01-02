"use client";

// Necessary libraries and components
import React, { useState } from "react";
import Image from "next/image";
import WeatherOverview from "./weatherOverview";
import UpdateLocationButton from "./updateLocation";
import Link from "next/link";
import BurgerMenu from "./burgerMenu";

// Defines the Controlpanel component
const Controlpanel = () => {
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);

  // Function to toggle the burger menu visibility
  const toggleBurgerMenu = () => {
    setBurgerMenuVisible(!isBurgerMenuVisible);
  };

  // Container 1 component with a function to refresh the page when clicked upon
  const Container1 = () => {
    const refreshPage = () => {
      console.log("Refreshing the page...");

      // Refresh the page
      location.reload();
    };

    return (
      <button
        className="absolute top-5 left-0 w-1/3 h-20 p-4 cursor-pointer flex-grow flex-shrink"
        onClick={refreshPage}
      ></button>
    );
  };

  // Returns the main structure
  return (
    <section className="relative">
      <img src="/img/controlpanel.png" alt="" className="w-full h-auto" />

      {/* Container 1 */}
      <button
        className="absolute top-5 left-0 w-1/3 h-20 p-4 cursor-pointer flex-grow flex-shrink"
        onClick={() => {
          console.log("Refreshing the page...");
          location.reload();
        }}
      >
        {/* Content for Container 1 */}
      </button>

      {/* Container 2 */}
      <button
        className="absolute top-5 left-1/3 w-1/3 h-20 p-4 cursor-pointer   flex-grow flex-shrink"
        onClick={() => console.log("Container 2 clicked")}
      >
        {/* Content for Container 2 */}
      </button>

      {/* Container 3 */}
      <button
        className="absolute top-5 right-0 w-1/3 h-20 p-4 cursor-pointer   flex-grow flex-shrink"
        onClick={toggleBurgerMenu}
      >
        {/* Content for Container 3 */}
      </button>

      {/* Burger Menu */}
      {isBurgerMenuVisible && (
        <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />
      )}
    </section>
  );
};

export default Controlpanel;
