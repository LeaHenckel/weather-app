// components/WeatherOverview.js
"use client";

import React from "react";
import Widgets from "./widgets";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import BurgerMenu from "./burgerMenu";

const WeatherOverview = ({ toggleBurgerMenu }) => {
  const handleIconClick = () => {
    // Closes the BurgerMenu by calling the toggleBurgerMenu function
    toggleBurgerMenu();
  };

  return (
    <section className="bg-linearBlue h-screen w-full overflow-y-auto">
      <header className="fixed top-0 w-screen bg-linearBlue p-4 flex justify-between">
        {/* Left container */}
        <article className="flex items-center">
          <h1 className="text-white text-2xl font-bold">
            <FontAwesomeIcon icon={faChevronLeft} onClick={handleIconClick} />{" "}
            Weather
          </h1>
        </article>

        {/* Right container */}
        <article className="flex items-center">
          <img
            src="/icons/notifications.png"
            alt="notification icon"
            className="w-8 h-8"
          />
        </article>
      </header>

      {/* Searchbox */}
      <section className="mt-4">
        <label htmlFor="search" className="text-white block mb-2">
          Search for a city or airport
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search for a city or airport"
          className="w-full p-2 border border-solidBlue rounded focus:outline-none focus:border-red-500"
        />
      </section>

      {/* Vertical flexbox with 6 articles */}
      <section className="flex flex-col items-center mt-16">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <article
            key={index}
            className="w-64 h-64 bg-cover bg-center bg-no-repeat mb-8"
            style={{
              backgroundImage: 'url("/img/weatherbox.png")',
              backgroundSize: "70%",
              /* backgroundSize: "cover", */
            }}
          ></article>
        ))}
      </section>
    </section>
  );
};

export default WeatherOverview;
