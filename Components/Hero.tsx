import React from "react";
import Image from "next/image";
import heroImage from "../public/personBlob.png";
import CurvedLine1 from "../public/svg/curved-line-1";
import CurvedLine2 from "../public/svg/curved-line-2";
import CurvedLine3 from "../public/svg/curved-line-3.svg";
import { Courgette } from "next/font/google";
import { motion } from "framer-motion";

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
});

type Props = {};

function Hero({}: Props) {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delay: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative flex justify-between items-center min-h-[90vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
    >
      <CurvedLine1 className="absolute z-[5] top-[-5%] left-[-23%]" />
      {/* <div className="absolute w-28 h-28 bg-red-600 top-[17%] left-[-4%] rounded-full opacity-80 blur-2xl animate-blob"></div> */}
      {/* <Image
        className="absolute bottom-[9%] left-[-14%]"
        src={curvedLine3}
        alt="curved-line-3"
      /> */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 "
      >
        <motion.h2
          variants={item}
          className="text-neutral-600 text-6xl font-semibold mb-4"
        >
          Hello, this is
        </motion.h2>
        <motion.h1 variants={item} className="text-8xl font-bold mb-4">
          John Doe,
        </motion.h1>
        <motion.h2
          variants={item}
          className="text-neutral-600 text-6xl font-semibold mb-4"
        >
          I'm a
        </motion.h2>
        <motion.h3
          variants={item}
          className={`text-5xl font-semibold ${courgette.className}`}
        >
          Front End Web Developer, Designer.
        </motion.h3>
      </motion.div>
      <div className="">
        <Image
          className="relative z-10"
          src={heroImage}
          alt="Hero Image"
          priority={true}
        />
      </div>
      <CurvedLine2 className="absolute bottom-[5%] left-[70%]" />
    </motion.div>
  );
}

export default Hero;
