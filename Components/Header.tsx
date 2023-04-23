import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/header-logo.png";
type Props = {};

function Header({}: Props) {
  return (
    <header className="fixed top-0 left-0 flex justify-between items-center py-2 px-28 w-full">
      <Link href="/">
        <Image src={logo} alt="Header Logo" className="w-7/12" />
      </Link>
      <nav>
        <Link className="" href="#about">
          About
        </Link>
        <Link className="pl-2" href="#projects">
          Projects
        </Link>
        <Link className="pl-2" href="#contact">
          Get In Touch
        </Link>
        <Link className="pl-2" href="/">
          Theme
        </Link>
      </nav>
    </header>
  );
}

export default Header;
