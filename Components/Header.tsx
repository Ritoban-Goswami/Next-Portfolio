import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "../public/header-logo.png";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex justify-between items-center py-4 -mx-8 min-h-[10vh]">
      <Link href="/">
        <Image src={HeaderLogo} alt="Header Logo" className="w-6/12"></Image>
      </Link>
      <nav className="text-lg flex items-center font-medium">
        <Link href="#about">About</Link>
        <Link className="pl-14" href="#projects">
          Projects
        </Link>
        <Link className="pl-14" href="#contact">
          Get In Touch
        </Link>
        <Link className="pl-14" href="/">
          <BsMoonStarsFill />
          {/* <BsSunFill /> */}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
