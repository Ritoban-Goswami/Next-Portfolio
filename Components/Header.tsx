import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "../public/header-logo.png";
import DarkModeIcon from "../public/svg/dark-mode";
import LightModeIcon from "../public/svg/light-mode";
import { motion, useCycle } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

type Props = {};

function Header({}: Props) {
  const [isNavMenuOpen, toggleIsNavMenuOpen] = useCycle(false, true);

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delay: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <nav className="flex justify-between mt-8 w-4/5 mx-auto">
        <Link className="inline-block" href="/">
          <Image
            src={HeaderLogo}
            alt="Header Logo"
            className="max-w-[3rem] lg:max-w-[5rem]"
          ></Image>
        </Link>
        <div className="hidden text-lg xl:flex items-center justify-evenly px-2 w-2/5 font-semibold rounded-3xl backdrop-blur-xl">
          <Link
            href="#about"
            className="pl-4 first:pl-0 transition-all hover:text-primary-red"
          >
            About
          </Link>
          <Link
            className="pl-4 first:pl-0 transition-all hover:text-primary-red"
            href="#experience-skills"
          >
            Experience
          </Link>
          <Link
            className="pl-4 first:pl-0 transition-all hover:text-primary-red"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="pl-4 first:pl-0 transition-all hover:text-primary-red"
            href="#contact"
          >
            Get In Touch
          </Link>
          <Link className="pl-4 first:pl-0 group" href="/">
            {/* <DarkModeIcon className="text-2xl transition-all group-hover:text-blue-300" /> */}
            <LightModeIcon className="text-2xl transition-all group-hover:text-amber-400" />
          </Link>
        </div>
        <motion.div
          className="relative xl:hidden flex items-center cursor-pointer"
          onClick={() => toggleIsNavMenuOpen()}
        >
          {isNavMenuOpen ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <GiHamburgerMenu className="text-2xl" />
          )}
          {isNavMenuOpen && (
            <motion.div
              className="absolute top-12 right-0 text-base flex flex-col items-end min-w-[10rem] p-3 font-semibold rounded-lg backdrop-blur-xl"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Link
                href="#about"
                className="pb-2 last:pb-0 transition-all hover:text-primary-red"
              >
                <motion.span variants={item}>About</motion.span>
              </Link>
              <Link
                className="pb-2 last:pb-0 transition-all hover:text-primary-red"
                href="#experience-skills"
              >
                <motion.span variants={item}>Experience</motion.span>
              </Link>
              <Link
                className="pb-2 last:pb-0 transition-all hover:text-primary-red"
                href="#projects"
              >
                <motion.span variants={item}>Projects</motion.span>
              </Link>
              <Link
                className="pb-2 last:pb-0 transition-all hover:text-primary-red"
                href="#contact"
              >
                <motion.span variants={item}>Get In Touch</motion.span>
              </Link>
              <Link className="pb-2 last:pb-0 group" href="/">
                <motion.span variants={item}>Light Mode</motion.span>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </nav>
    </motion.header>
  );
}

export default Header;
