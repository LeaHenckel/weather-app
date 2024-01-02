// components/Widgets.js // are being shown when multiple locations weather are visible
"use client";

import React from "react";

const Widgets = (props) => {
  return (
    <article>
      <svg
        width="342"
        height="175"
        viewBox="0 0 342 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
          fill="url(#paint0_linear_1517_558)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1517_558"
            x1="0"
            y1="128"
            x2="354.142"
            y2="128"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5936B4" />
            <stop offset="1" stopColor="#362A84" />
          </linearGradient>
        </defs>
      </svg>
    </article>
  );
};

export default Widgets;
