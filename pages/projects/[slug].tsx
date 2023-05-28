import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import projectImgBob from "../../public/project assets/1. Bob.png";
import Link from "next/link";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

type Props = {};

export default function Page({}: Props) {
  const router = useRouter();

  return (
    <>
      {/* <Header /> */}
      <section className="container mx-auto mb-36 px-20">
        <div className="flex flex-col">
          <h1
            className="text-7xl font-semibold my-32"
            style={{ textShadow: "#2B2B2B 0.4rem 0px 0px" }}
          >
            The Freewheelin' Bob Dylan
          </h1>
          <Image
            className="rounded-lg"
            src={projectImgBob}
            alt="freewheelin-bob-dylan"
          />
          <div className="flex justify-between mt-24">
            <p className="w-8/12 text-xl text-neutral-400">
              This is a simple Landing Page dedicated to my favorite folk
              artist, Bob Dylan. This page features an info section, a gallery
              where one can scroll through images, a Spotify section to listen
              to his creations, and a documentary video embedded in the page
              itself. I've used HTML, CSS, JavaScript, and Bootstrap for this
              project.
            </p>
            <div className="w-4/12 flex flex-col items-center">
              <div>
                <h4 className="text-neutral-600 text-2xl font-bold mb-4">
                  I've Used
                </h4>
                <motion.div className="flex flex-col items-start">
                  <motion.span
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-neutral-800 text-base uppercase my-3 bg-secondary-grey py-1 px-3 rounded-lg font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
                  >
                    HTML
                  </motion.span>
                  <motion.span
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-neutral-800 text-base uppercase my-3 bg-secondary-grey py-1 px-3 rounded-lg font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
                  >
                    CSS
                  </motion.span>
                  <motion.span
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-neutral-800 text-base uppercase my-3 bg-secondary-grey py-1 px-3 rounded-lg font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
                  >
                    JavaScript
                  </motion.span>
                  <motion.span
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-neutral-800 text-base uppercase my-3 bg-secondary-grey py-1 px-3 rounded-lg font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
                  >
                    Bootstrap
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="my-16 flex">
            <Link
              className="mr-5 flex justify-center items-center bg-transparent hover:bg-primary-red text-primary-red font-semibold hover:text-neutral-100 transition-colors py-2 px-4 border-2 border-primary-red hover:border-transparent rounded-lg"
              href={"https://ritoban-goswami.github.io/Bob-Dylan-Landing-Page/"}
            >
              View Project
            </Link>
            <Link
              className="flex justify-center items-center bg-transparent hover:bg-primary-red text-primary-red font-semibold hover:text-neutral-100 transition-colors py-2 px-4 border-2 border-primary-red hover:border-transparent rounded-lg"
              href={
                "https://github.com/Ritoban-Goswami/Bob-Dylan-Landing-Page.git"
              }
            >
              Source Code
            </Link>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
