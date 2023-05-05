import React from "react";
import Image from "next/image";
import heroImage from "../public/personBlob.png";
import CurvedLine1 from "../public/svg/curved-line.svg";
import CurvedLine2 from "../public/svg/curved-line-2.svg";
import CurvedLine3 from "../public/svg/curved-line-3.svg";
import { Courgette } from "next/font/google";
import { motion } from "framer-motion";

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-courgette",
});

type Props = {};

function Hero({}: Props) {
  return (
    <motion.div
      className="relative flex justify-between items-center min-h-[90vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
    >
      <CurvedLine1 className="absolute z-[5] top-[-5%] left-[-23%] rotate-[30deg]" />
      {/* <div className="absolute w-28 h-28 bg-red-600 top-[17%] left-[-4%] rounded-full opacity-80 blur-2xl animate-blob"></div> */}
      {/* <Image
        className="absolute bottom-[9%] left-[-14%]"
        src={curvedLine3}
        alt="curved-line-3"
      /> */}
      <div className="relative z-10 ">
        <h2 className="text-neutral-600 text-6xl font-semibold mb-4">
          Hello, this is
        </h2>
        <h1 className={`text-8xl font-bold mb-4`}>John Doe,</h1>
        <h2 className="text-neutral-600 text-6xl font-semibold mb-4">I'm a</h2>
        <h3
          className={`text-5xl font-semibold ${courgette.variable} font-courgette`}
        >
          Front End Web Developer, Designer.
        </h3>
      </div>
      <div className="">
        <Image className="relative z-10" src={heroImage} alt="Hero Image" />
      </div>
      <CurvedLine2 className="absolute bottom-[5%] left-[70%] rotate-[363deg]" />
    </motion.div>
  );
}

export default Hero;
