import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "../public/header-logo.png";
import DarkModeIcon from "../public/svg/dark-mode";
import LightModeIcon from "../public/svg/light-mode";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <motion.header
      className="flex justify-between items-center py-4 -mx-8 min-h-[10vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <Link href="/">
        <Image src={HeaderLogo} alt="Header Logo" className="w-6/12"></Image>
      </Link>
      <nav className="text-lg flex items-center font-medium">
        <Link href="#about">About</Link>
        <Link className="pl-14" href="#experience-skills">
          Experience
        </Link>
        <Link className="pl-14" href="#projects">
          Projects
        </Link>
        <Link className="pl-14" href="#contact">
          Get In Touch
        </Link>
        <Link className="pl-14" href="/">
          {/* <DarkModeIcon className="text-2xl" /> */}
          <LightModeIcon className="text-2xl" />
        </Link>
      </nav>
    </motion.header>
  );
}

export default Header;
