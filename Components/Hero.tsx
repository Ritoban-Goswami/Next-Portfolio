import React from "react";
import Image from "next/image";
import heroImage from "../public/personBlob.png";
import curvedLine1 from "../public/svg/curved-line.svg";
import curvedLine2 from "../public/svg/curved-line-2.svg";
import curvedLine3 from "../public/svg/curved-line-3.svg";
import { Courgette } from "next/font/google";

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-courgette",
});

type Props = {};

function Hero({}: Props) {
  return (
    <div className="relative flex justify-between items-center min-h-[90vh]">
      <Image
        className="absolute z-[5] top-[0] left-[-23%] rotate-[30deg]"
        src={curvedLine1}
        alt="curved-line-1"
      />
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
      <Image
        className="absolute bottom-[5%] left-[68%] rotate-[363deg]"
        src={curvedLine2}
        alt="curved-line-2"
      />
    </div>
  );
}

export default Hero;
