import React from "react";

type CircleIconParams = {
  className?: string;
  color?: string;
};

const CircleIcon = ({ className, color }: CircleIconParams) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      className={className}
    >
      <defs>
        <filter
          id="nnneon-filter"
          width="400%"
          height="400%"
          x="-100%"
          y="-100%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feGaussianBlur
            x="0%"
            y="0%"
            in="SourceGraphic"
            result="blur"
            stdDeviation="17 8"
          ></feGaussianBlur>
        </filter>
        <filter
          id="nnneon-filter2"
          width="400%"
          height="400%"
          x="-100%"
          y="-100%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feGaussianBlur
            x="0%"
            y="0%"
            in="SourceGraphic"
            result="blur"
            stdDeviation="10 16"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g fill="none" stroke={color} strokeWidth="16">
        <circle cx="400" cy="400" r="350" filter="url(#nnneon-filter)"></circle>
        <circle
          cx="400"
          cy="400"
          r="350"
          filter="url(#nnneon-filter2)"
          opacity="0.34"
        ></circle>
        <circle
          cx="400"
          cy="400"
          r="350"
          filter="url(#nnneon-filter2)"
          opacity="0.34"
        ></circle>
        <circle cx="400" cy="400" r="350"></circle>
      </g>
    </svg>
  );
};

export default CircleIcon;
