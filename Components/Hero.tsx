import React from "react";
import Image from "next/image";
import heroImage from "../public/personBlob.png";
import curvedLine1 from "../public/svg/curved-line.svg";
import curvedLine2 from "../public/svg/curved-line-2.svg";
import curvedLine3 from "../public/svg/curved-line-3.svg";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="relative flex justify-between items-center min-h-[90vh]">
      <Image
        className="absolute top-[0] left-[-23%] rotate-[30deg]"
        src={curvedLine1}
        alt="curved-line-1"
      />
      <Image
        className="absolute bottom-[9%] left-[-14%]"
        src={curvedLine3}
        alt="curved-line-3"
      />
      <div className="relative z-10 ">
        <h2 className="text-neutral-600 text-7xl font-semibold">
          Hello, this is
        </h2>
        <h1 className="text-9xl font-bold">John Doe,</h1>
        <h2 className="text-neutral-600 text-7xl font-semibold">I'm a</h2>
        <h3 className="text-6xl font-semibold">
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
