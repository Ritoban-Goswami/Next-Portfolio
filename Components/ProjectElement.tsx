import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import projectImgBob from "../public/project assets/1. Bob.png";

type Props = {};

const ProjectElement = (props: Props) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Link href="/projects/freewheelin-bob-dylan">
      <motion.div
        variants={item}
        whileHover={{
          y: -8,
          transition: { duration: 0.1 },
        }}
        className="md:relative"
      >
        <Image
          className="rounded-md"
          src={projectImgBob}
          alt="Bob dylan Project Image"
        />
        <div className="my-6 md:my-0 md:absolute md:inset-0 rounded-md flex flex-col justify-end p-1 md:p-4 bg-gradient-to-t from-black to-[#040404b9] lg:opacity-0 md:hover:opacity-100 md:backdrop-blur-sm transition-opacity">
          <h4 className="text-xl text-neutral-100 font-bold mb-4">
            The Freewheelin' Bob Dylan
          </h4>
          <p className="text-sm font-semibold text-neutral-400">
            This is a simple Landing Page dedicated to my favorite folk artist,
            Bob Dylan. I've used HTML, CSS, JavaScript, and Bootstrap for this
            project.
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectElement;
