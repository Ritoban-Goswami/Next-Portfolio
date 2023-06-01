import * as React from "react";
import { motion } from "framer-motion";
const CurvedLine1Light = (props) => (
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
        d="M34 34c104.62 26.643 459.5 24.5 524 127.5S540 351 464.5 304 354 205 354 205"
        stroke="url(#b)"
        strokeWidth={67}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={-132}
        y1={-6.5}
        x2={725.046}
        y2={147.737}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C50000" />
        <stop offset={0.895} stopColor="#393939" />
      </linearGradient>
      <filter
        id="a"
        x={0.492}
        y={0.492}
        width={614.41}
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
        <feBlend in2="shape" result="effect1_innerShadow_112_26" />
      </filter>
    </defs>
  </motion.svg>
);
export default CurvedLine1Light;
