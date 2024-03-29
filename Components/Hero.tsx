import React from "react";
import Image from "next/image";
import heroImage from "../public/personBlob.png";
import CurvedLine1 from "../public/svg/curved-line-1";
import CurvedLine1Light from "../public/svg/curved-line-1-light";
import CurvedLine2 from "../public/svg/curved-line-2";
import CurvedLine2Light from "../public/svg/curved-line-2-light";
import CurvedLine3 from "../public/svg/curved-line-3.svg";
import { Courgette } from "next/font/google";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { imageUrlFor } from "@/sanity";

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
});

type Props = { pageInfo: PageInfo };

function Hero({ pageInfo }: Props) {
  const heroImg = imageUrlFor(pageInfo?.heroImage).url();

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
      className="w-full relative flex sm:flex-row justify-between items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
    >
      <CurvedLine1Light className="absolute z-[5] left-[-23%] bottom-32 w-3/6 md:bottom-40 lg:bottom-[27rem] xl:bottom-[25rem] lg:w-[55%] xl:w-[47%]" />

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
        className="relative z-10"
      >
        <motion.h2
          variants={item}
          className="text-nuetral-900 dark:text-neutral-600 font-bold text-base sm:text-3xl lg:text-4xl xl:text-[2.5rem] 2xl:text-6xl mb-1 lg:mb-4"
        >
          Hello, this is
        </motion.h2>
        <motion.h1
          variants={item}
          className="font-extrabold mb-1 tracking-wide text-3xl sm:text-5xl lg:text-6xl xl:text-[5rem] 2xl:text-[7rem] lg:mb-4"
          style={{
            textShadow: "#AD0000 calc(clamp(0.4vw, 0.7vmin, 0.7vw)) 0px 0px",
          }}
        >
          {pageInfo?.name},
        </motion.h1>
        <motion.h2
          variants={item}
          className="text-neutral-900 dark:text-neutral-600 text-base sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-1 lg:mb-4"
        >
          I'm a
        </motion.h2>
        <motion.h3
          variants={item}
          className={`text-base sm:text-2xl lg:text-4xl xl:text-[2.65rem] 2xl:text-5xl ${courgette.className} tracking-wider animate-flicker`}
        >
          {pageInfo?.role}
        </motion.h3>
      </motion.div>
      <div className="w-5/12">
        <Image
          className="relative z-10 ml-auto max-w-[7.5rem] sm:max-w-[70%] lg:max-w-full xl:max-w-[20rem] 2xl:max-w-md"
          src={heroImg}
          alt="Hero Image"
          width={500}
          height={500}
          priority={true}
        />
      </div>
      {/* <CurvedLine2 className="absolute top-[9rem] left-[70%]" /> */}
    </motion.div>
  );
}

export default Hero;
