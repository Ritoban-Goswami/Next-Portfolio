import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import projectImgBob from "../../public/project assets/1. Bob.png";
import Link from "next/link";
import SkillElement from "@/Components/SkillElement";

type Props = {};

export default function Page({}: Props) {
  const router = useRouter();

  return (
    <>
      <section className="mb-4">
        <div className="flex flex-col">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] 2xl:text-6xl w-4/5 md:w-full font-semibold mb-12 xl:mb-20 mt-20 md:mt-40"
            style={{ textShadow: "#2B2B2B 0.4rem 0px 0px" }}
          >
            The Freewheelin' Bob Dylan
          </h1>
          <Image
            className="rounded-md 2xl:max-w-[70rem]"
            src={projectImgBob}
            alt="freewheelin-bob-dylan"
          />
          <div className="flex justify-between flex-col-reverse gap-y-8 md:flex-row mt-8 md:mt-16">
            <p className="md:w-8/12 text-sm sm:text-base text-neutral-400">
              This is a simple Landing Page dedicated to my favorite folk
              artist, Bob Dylan. This page features an info section, a gallery
              where one can scroll through images, a Spotify section to listen
              to his creations, and a documentary video embedded in the page
              itself. I've used HTML, CSS, JavaScript, and Bootstrap for this
              project.
            </p>
            <div className="md:w-4/12 md:flex flex-col items-center">
              <div>
                <h4 className="text-neutral-600 text-2xl font-bold mb-4">
                  I've Used
                </h4>
                <motion.div className="flex flex-wrap gap-3 items-start md:flex-col">
                  <SkillElement />
                  <SkillElement />
                  <SkillElement />
                  <SkillElement />
                  <SkillElement />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="my-16 flex justify-center md:justify-start">
            <Link
              className="text-sm mr-5 flex justify-center items-center bg-transparent hover:bg-primary-red text-primary-red font-semibold hover:text-neutral-100 transition-colors py-2 px-4 border-2 border-primary-red hover:border-transparent rounded-lg"
              href={"https://ritoban-goswami.github.io/Bob-Dylan-Landing-Page/"}
            >
              View Project
            </Link>
            <Link
              className="text-sm flex justify-center items-center bg-transparent hover:bg-primary-red text-primary-red font-semibold hover:text-neutral-100 transition-colors py-2 px-4 border-2 border-primary-red hover:border-transparent rounded-lg"
              href={
                "https://github.com/Ritoban-Goswami/Bob-Dylan-Landing-Page.git"
              }
            >
              Source Code
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
