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
    <motion.div variants={item} className="rounded-md flex gap-x-4">
      <div className="relative">
        <BsCircleFill className="text-lg text-neutral-400" />
        <div className="absolute top-0 left-1/2 -translate-x-2/4 w-0.5 h-full bg-neutral-400 " />
      </div>
      <div className={!isLastCard ? "pb-11" : ""}>
        <Link target="_blank" href="https://appycodes.dev/">
          <h3 className="text-xl font-semibold mb-4 group hover:cursor-pointer inline-flex items-center gap-x-3">
            Associate Developer At Appycodes
            <FiArrowUpRight className="group-hover:text-primary-red transition-colors" />
          </h3>
        </Link>
        <h4 className="text-base font-semibold text-neutral-300 mb-4">
          September, 2022 - Present
        </h4>
        <p className="text-sm font-normal text-neutral-400">
          This is a simple Landing Page dedicated to my favorite folk artist,
          Bob Dylan. I've used HTML, CSS, JavaScript, and Bootstrap for this
          project.
        </p>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;
