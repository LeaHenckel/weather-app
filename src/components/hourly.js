// components/hourly.js - this files makes a row of eight oval-shaped div elements
"use client";

import React from "react";

export default function OvalCircles(props) {
  return (
    // The outer div has flex display, justifying the content between items with space between.
    <div className="flex justify-between space-x-4">
      {/* Using the map function to generate an array of div elements. */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <div
          key={index}
          className="w-12 h-32 bg-solidBlue border border-gray-300 rounded-full"
        ></div>
      ))}
    </div>
  );
}

// I'm not sure which tags are the correct semantic way, so I've chosen to use div
