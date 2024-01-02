// components/forecast.js - a functional component named Forecast, which takes props as an argument
"use client";

import React from "react";
import OvalCircles from "./hourly";

export default function Forecast(props) {
  return (
    <>
      <section className="flex justify-between items-center bg-linearBlueAndPink p-4 border border-gray-300 rounded-lg overflow-x-auto">
        <p className="text-darkSecondary">Hourly Forecast</p>
        <p className="text-darkSecondary">Weekly Forecast</p>

        <section className="mt-20">
          <OvalCircles />
        </section>
      </section>
    </>
  );
}
