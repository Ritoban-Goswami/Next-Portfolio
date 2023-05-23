import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import projectImgBob from "../public/project assets/1. Bob.png";

type Props = {};

const ProjectSlide = (props: Props) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      variants={item}
      whileHover={{
        y: -8,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      {/* <div className="w-5/12"> */}
      <Image
        className="rounded-lg"
        src={projectImgBob}
        alt="Bob dylan Project Image"
      ></Image>
      {/* </div> */}
      {/* <div className="w-5/12">
        <Link href="https://ritoban-goswami.github.io/Bob-Dylan-Landing-Page/">
          <h4 className="text-4xl font-semibold mb-8">
            The Freewheelin' Bob Dylan
          </h4>
        </Link>
        <p className="text-2xl text-neutral-400 mb-8">
          This is a simple Landing Page dedicated to my favorite folk artist,
          Bob Dylan. This page features an info section, a gallery where one can
          scroll through images, a Spotify section to listen to his creations,
          and a documentary video embedded in the page itself. I've used HTML,
          CSS, JavaScript, and Bootstrap for this project.
        </p>
        <Link
          className="text-neutral-600 text-xl uppercase bg-neutral-100 p-3 rounded-lg font-bold tracking-widest"
          href="https://github.com/Ritoban-Goswami/Bob-Dylan-Landing-Page.git"
        >
          Source Code
        </Link>
      </div> */}
    </motion.div>
  );
};

export default ProjectSlide;
