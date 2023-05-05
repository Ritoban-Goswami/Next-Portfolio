import * as React from "react";
import { motion } from "framer-motion";
const CurvedLine1 = (props) => (
  <motion.svg
    width={615}
    height={352}
    viewBox="0 0 615 352"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{
      opacity: 0,
      scale: 0.8,
      rotate: 0,
      x: -50,
    }}
    animate={{
      scale: 1,
      opacity: 1,
      rotate: 30,
      x: 0,
    }}
    transition={{
      duration: 0.5,
      ease: "easeInOut",
      type: "spring",
      stiffness: 150,
    }}
    {...props}
  >
    <g filter="url(#filter0_i_6_3)">
      <path
        d="M34 34.5C138.62 61.1429 493.5 59 558 162C622.5 265 540 351.5 464.5 304.5C389 257.5 354 205.5 354 205.5"
        stroke="url(#paint0_linear_6_3)"
        strokeWidth={67}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_6_3"
        x={0.491974}
        y={0.991974}
        width={614.411}
        height={356.039}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.178692} dy={9.82807} />
        <feGaussianBlur stdDeviation={2.94842} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.678431 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_6_3" />
      </filter>
      <linearGradient
        id="paint0_linear_6_3"
        x1={-132}
        y1={-6.00002}
        x2={725.046}
        y2={148.237}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2A0000" />
        <stop offset={1} stopColor="#CBCBCB" stopOpacity={0} />
      </linearGradient>
    </defs>
  </motion.svg>
);
export default CurvedLine1;
