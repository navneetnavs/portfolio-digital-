import React from "react";

type CubeIconParams = {
  className?: string;
  color?: string;
};

const CubeIcon = ({ className, color }: CubeIconParams) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
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
            stdDeviation="10 17"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g fill="none" stroke={color || "#fff"} strokeWidth="16">
        <rect
          width="300"
          height="300"
          x="50"
          y="50"
          filter="url(#nnneon-filter)"
          rx="0"
          ry="0"
        ></rect>
        <rect
          width="300"
          height="300"
          x="62"
          y="50"
          filter="url(#nnneon-filter2)"
          opacity="0.25"
          rx="0"
          ry="0"
        ></rect>
        <rect
          width="300"
          height="300"
          x="38"
          y="50"
          filter="url(#nnneon-filter2)"
          opacity="0.25"
          rx="0"
          ry="0"
        ></rect>
        <rect width="300" height="300" x="50" y="50" rx="0" ry="0"></rect>
      </g>
    </svg>
  );
};

export default CubeIcon;
