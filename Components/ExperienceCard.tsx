import React from "react";
import { motion } from "framer-motion";
import { BsCircleFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

type Props = { isLastCard: boolean };

function ExperienceCard({ isLastCard }: Props) {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div variants={item} className="rounded-md flex gap-x-3">
      <div className="relative">
        <BsCircleFill className="text-xs dark:text-neutral-400" />
        <div className="absolute top-0 left-1/2 -translate-x-2/4 w-[0.085rem] h-full bg-stone-950 dark:bg-neutral-400 " />
      </div>
      <div className={!isLastCard ? "pb-11" : ""}>
        <Link target="_blank" href="https://appycodes.dev/">
          <h3 className="text-base lg:text-lg font-semibold mb-4 group hover:cursor-pointer inline-flex items-center gap-x-3">
            Associate Developer At Appycodes
            <FiArrowUpRight className="group-hover:text-primary-red transition-colors" />
          </h3>
        </Link>
        <h4 className="text-sm lg:text-base font-semibold dark:text-neutral-300 mb-4">
          September, 2022 - Present
        </h4>
        <p className="text-xs lg:text-sm font-medium dark:font-normal dark:text-neutral-400">
          This is a simple Landing Page dedicated to my favorite folk artist,
          Bob Dylan. I've used HTML, CSS, JavaScript, and Bootstrap for this
          project.
        </p>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;
