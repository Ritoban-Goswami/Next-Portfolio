import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AboutSVG from "@/public/svg/aboutSVG";
import { PageInfo } from "@/typings";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@portabletext/react";

type Props = {
  about: PageInfo;
};

const ptComponents: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          className="text-primary-red tracking-widest"
        >
          {children}
        </Link>
      );
    },
  },
  block: {
    normal: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
  },
};

function About({ about }: Props) {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delay: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex justify-between items-center flex-col lg:flex-row"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
    >
      <div className="hidden lg:block lg:w-5/12">
        <AboutSVG className="max-w-[16rem] mx-auto" />
      </div>
      <div className="flex flex-col lg:w-6/12">
        <h3 className="heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10 tracking-wider">
          A little about me,
        </h3>
        <div className="text-sm lg:text-base text-neutral-950 font-medium dark:font-normal dark:text-neutral-400">
          <PortableText value={about.about} components={ptComponents} />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
