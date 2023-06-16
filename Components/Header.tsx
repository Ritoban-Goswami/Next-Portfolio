import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "../public/header-logo.png";
import DarkModeIcon from "../public/svg/dark-mode";
import LightModeIcon from "../public/svg/light-mode";
import { motion, useCycle } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useTheme } from "next-themes";

type Props = {};

function Header({}: Props) {
  const [isNavMenuOpen, toggleIsNavMenuOpen] = useCycle(false, true);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <nav className="container flex justify-between px-3 xl:px-11 mt-4 md:mt-6 lg:mt-4 mx-auto">
        <Link className="inline-block" href="/">
          <Image
            src={HeaderLogo}
            alt="Header Logo"
            className="max-w-[3rem] md:max-w-[4rem] lg:max-w-[4rem]"
            priority={true}
          ></Image>
        </Link>
        <div className="hidden text-xs xl:text-sm items-center justify-evenly 2xl:px-2 font-semibold rounded-3xl backdrop-blur-xl md:flex w-[45%] xl:w-[35%]">
          <Link
            href="/#about"
            className="pl-2 first:pl-0 transition-all hover:text-primary-red"
          >
            About
          </Link>
          <Link
            className="pl-2 first:pl-0 transition-all hover:text-primary-red"
            href="/#experience-skills"
          >
            Experience
          </Link>
          <Link
            className="pl-2 first:pl-0 transition-all hover:text-primary-red"
            href="/#projects"
          >
            Projects
          </Link>
          <Link
            className="pl-2 first:pl-0 transition-all hover:text-primary-red"
            href="/#contact"
          >
            Get In Touch
          </Link>
          {/* <span
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer pl-4 first:pl-0 group"
          >
            {theme === "light" ? (
              <DarkModeIcon className="text-2xl transition-all group-hover:text-blue-300" />
            ) : (
              <LightModeIcon className="text-2xl transition-all group-hover:text-amber-400" />
            )}
          </span> */}
        </div>
        <motion.div
          className="relative md:hidden flex items-center cursor-pointer"
          onClick={() => toggleIsNavMenuOpen()}
        >
          {isNavMenuOpen ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <GiHamburgerMenu className="text-2xl" />
          )}
          {isNavMenuOpen && (
            <motion.div
              className="absolute top-12 right-0 text-sm flex flex-col items-end min-w-[10rem] p-3 font-semibold rounded-lg backdrop-blur-xl"
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
              {/* <Link className="pb-2 last:pb-0 group" href="/">
                <motion.span variants={item}>Light Mode</motion.span>
              </Link> */}
            </motion.div>
          )}
        </motion.div>
      </nav>
    </motion.header>
  );
}

export default Header;
