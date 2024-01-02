"use client";

import React from "react";
import Image from "next/image";

const UpdateLocationButton = () => {
  const reloadLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const key = "9ebb74cc1358666cfa173959587c58e5";

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Location updated successfully:", data);
          window.location.reload(); // Reloads the page
        })
        .catch((error) => console.error("Error updating location:", error));
    });
  };
};

export default UpdateLocationButton;
