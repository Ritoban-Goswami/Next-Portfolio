import * as React from "react";
import { SVGProps } from "react";
const CurvedLine2Light = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 762 467"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M34 34c104.62 26.643 66.5 191 253 164s78 154.5 262 154.5 179 80 179 80"
        stroke="url(#b)"
        strokeWidth={67}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={-45.5}
        y1={-17}
        x2={882.261}
        y2={112.353}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD1919" />
        <stop offset={0.823} stopColor="#C7C7C7" />
      </linearGradient>
      <filter
        id="a"
        x={0.492}
        y={0.492}
        width={761.2}
        height={471.406}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.179} dy={9.828} />
        <feGaussianBlur stdDeviation={2.948} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0.678431 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_108_2" />
      </filter>
    </defs>
  </svg>
);
export default CurvedLine2Light;
