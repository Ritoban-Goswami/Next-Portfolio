import * as React from "react";
import { motion } from "framer-motion";

const CurvedLine2 = (props) => (
  <motion.svg
    width={762}
    height={467}
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
    <g filter="url(#filter0_i_7_6)">
      <path
        d="M34 34C138.62 60.6429 100.5 225 287 198C473.5 171 365 352.5 549 352.5C733 352.5 728 432.5 728 432.5"
        stroke="url(#paint0_linear_7_6)"
        strokeWidth={67}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_7_6"
        x={0.491943}
        y={0.491974}
        width={761.2}
        height={471.406}
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
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7_6" />
      </filter>
      <linearGradient
        id="paint0_linear_7_6"
        x1={-45.5}
        y1={-17}
        x2={882.261}
        y2={112.353}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2A0000" />
        <stop offset={1} stopColor="#CBCBCB" stopOpacity={0} />
      </linearGradient>
    </defs>
  </motion.svg>
);
export default CurvedLine2;
