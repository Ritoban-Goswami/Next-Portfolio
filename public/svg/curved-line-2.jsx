import * as React from "react";
import { motion } from "framer-motion";

const CurvedLine2 = (props) => (
  <motion.svg
    viewBox="0 0 762 467"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{
      opacity: 0,
      scale: 1.8,
      rotate: 41,
      x: 200,
    }}
    animate={{
      scale: 1,
      opacity: 1,
      rotate: 3,
      x: 0,
    }}
    transition={{
      duration: 1,
      delay: 0.1,
      ease: "easeInOut",
      type: "spring",
      stiffness: 150,
    }}
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
        <stop stopColor="#2A0000" />
        <stop offset={1} stopColor="#424242" stopOpacity={0} />
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
        <feBlend in2="shape" result="effect1_innerShadow_7_6" />
      </filter>
    </defs>
  </motion.svg>
);
export default CurvedLine2;
