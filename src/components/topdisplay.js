// components/topDisplay.js

"use client";
import React from "react";
import Image from "next/image";

const TopDisplay = () => {
  return (
    <img
      src="/icons/topdisplay.png"
      alt="time, battery and wifi connection"
      className="w-full h-auto"
    />
  );
};
export default TopDisplay;
