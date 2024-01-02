// Frontpage
"use client";

// Imports React hooks and components
import React, { useState, useEffect } from "react";
import HouseImage from "../components/house";
// import TopDisplay from "@/components/topdisplay";
import WeatherOverview from "@/components/weatherOverview";
import Widgets from "@/components/hourly";
import Forecast from "@/components/forecast";
import Controlpanel from "@/components/controlpanel";
import OvalCircles from "@/components/hourly";

const Home = () => {
  // State hook to manage weather data. Being initialized as null
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Use geolocation API to get the current position
    navigator.geolocation.getCurrentPosition(function (position) {
      // Extract latitude and longitude from the obtained position
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const key = "9ebb74cc1358666cfa173959587c58e5"; // API key for OpenWeatherMap

      // Fetch weather data from OpenWeatherMap API using the obtained coordinates above
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      )
        .then((res) => res.json()) // Parse the response as JSON
        .then((data) => setWeatherData(data)); // Set the weather data in the state
    });
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return (
    <section
      className="min-h-screen bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: "url(/img/aurora.png)" }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          {/* Display city name if weatherData is truthy else "Loading..."   */}
          <h2 className="text-3xl md:text-5xl text-darkPrimary pt-10">
            {weatherData ? weatherData.name : "Loading..."}
          </h2>
          {/* Display temperature if weatherData is truthy else "Loading..."   */}
          <h1 className="text-5xl md:text-7xl text-darkPrimary pt-5">
            {weatherData ? `${weatherData.main.temp} °C` : "Loading..."}
          </h1>
          {/* Display weather description if weatherData is truthy else "Loading..."   */}
          <p className="mt-4 text-lg md:text-xl text-darkSecondary">
            {weatherData ? weatherData.weather[0].description : "Loading..."}
          </p>
          {/* Renders the HouseImage component */}
          <HouseImage />
        </div>
      </div>
      {/* Renders the Forecast component */}
      <Forecast />
      {/* Renders the Controlpanel component */}
      <Controlpanel />
    </section>
  );
};

export default Home;

// Tests that the browser has geolacotion
if ("geolocation" in navigator) {
  console.log("geolocation works just fine!");
} else {
  console.log("nope, no geo");
}
