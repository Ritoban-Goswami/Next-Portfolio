import * as React from "react";
import { motion } from "framer-motion";
const CurvedLine1 = (props) => (
  <motion.svg
    viewBox="0 0 615 352"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{
      opacity: 0,
      scale: 1.8,
      rotate: -27,
      x: -100,
    }}
    animate={{
      scale: 1,
      opacity: 1,
      rotate: 30,
      x: 0,
    }}
    transition={{
      duration: 1,
      delay: 0.05,
      ease: "easeInOut",
      type: "spring",
      stiffness: 150,
    }}
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M34 34.5C138.62 61.143 493.5 59 558 162s-18 189.5-93.5 142.5-110.5-99-110.5-99"
        stroke="url(#b)"
        strokeWidth={67}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={-132}
        y1={-6}
        x2={725.046}
        y2={148.237}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2A0000" />
        <stop offset={1} stopColor="#424242" stopOpacity={0} />
      </linearGradient>
      <filter
        id="a"
        x={0.492}
        y={0.992}
        width={614.411}
        height={356.039}
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
        <feBlend in2="shape" result="effect1_innerShadow_6_3" />
      </filter>
    </defs>
  </motion.svg>
);
export default CurvedLine1;
