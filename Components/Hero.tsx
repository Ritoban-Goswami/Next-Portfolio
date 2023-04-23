import React from "react";
import Image from "next/image";
import heroImage from "../public/selfblob.png";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-neutral-600 text-7xl font-semibold">
          Hello, this is
        </h2>
        <h1 className="text-9xl font-bold">Ritoban Goswami,</h1>
        <h2 className="text-neutral-600 text-7xl font-semibold">I'm a</h2>
        <h3 className="text-6xl font-semibold">
          Front End Web Developer, Designer.
        </h3>
      </div>
      <div className="">
        <Image src={heroImage} alt="Hero Image"></Image>
      </div>
    </div>
  );
}

export default Hero;
