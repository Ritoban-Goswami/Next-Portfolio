import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { imageUrlFor } from "@/sanity";

type Props = {
  projectTitle: string;
  projectDesc: [];
  projectShortDesc: string;
  projectImg: {};
  projectSlug: string;
};

const ProjectElement = ({
  projectTitle,
  projectDesc,
  projectShortDesc,
  projectImg,
  projectSlug,
}: Props) => {
  const projectImgUrl = imageUrlFor(projectImg).url();
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Link href={`/projects/${encodeURIComponent(projectSlug)}`}>
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
          src={projectImgUrl}
          alt="Bob dylan Project Image"
          width={1000}
          height={1000}
        />
        <div className="my-6 md:my-0 md:absolute md:inset-0 rounded-md flex flex-col justify-end p-1 md:p-4 bg-gradient-to-t from-black to-[#040404b9] lg:opacity-0 md:hover:opacity-100 md:backdrop-blur-sm transition-opacity">
          <h4 className="text-xl text-neutral-100 font-bold mb-4">
            {projectTitle}
          </h4>
          <p className="text-sm font-semibold text-neutral-400 line-clamp-5 md:line-clamp-3">
            {projectShortDesc}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectElement;
