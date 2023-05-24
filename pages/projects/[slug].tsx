import { useRouter } from "next/router";
import React from "react";
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
      <Header />
      <section className="container mx-auto px-20">
        <div className="flex flex-col">
          <h1
            className="text-7xl font-bold my-32 tracking-wider"
            style={{ textShadow: "#2B2B2B 0.4rem 0px 0px" }}
          >
            The Freewheelin' Bob Dylan
          </h1>
          <Image src={projectImgBob} alt="freewheelin-bob-dylan" />
          <div className="flex justify-between mt-24">
            <p className="w-8/12">
              This is a simple Landing Page dedicated to my favorite folk
              artist, Bob Dylan. This page features an info section, a gallery
              where one can scroll through images, a Spotify section to listen
              to his creations, and a documentary video embedded in the page
              itself. I've used HTML, CSS, JavaScript, and Bootstrap for this
              project.
            </p>
            <div className="w-4/12 flex flex-col items-center">
              <div>
                <h4>Tech Stack</h4>
                <ul>
                  <li>abc</li>
                  <li>bcd</li>
                  <li>cde</li>
                  <li>def</li>
                  <li>feg</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-24 flex">
            <Link
              className="w-40 h-10 flex justify-center items-center bg-transparent hover:bg-primary-red text-primary-red font-semibold hover:text-neutral-100 py-2 px-8 border-2 border-primary-red hover:border-transparent rounded-lg"
              href={"https://ritoban-goswami.github.io/Bob-Dylan-Landing-Page/"}
            >
              View Project
            </Link>
            <Link
              className="w-40 h-10 flex justify-center items-center bg-transparent hover:bg-primary-red text-primary-red font-semibold hover:text-neutral-100 py-2 px-8 border-2 border-primary-red hover:border-transparent rounded-lg"
              href={
                "https://github.com/Ritoban-Goswami/Bob-Dylan-Landing-Page.git"
              }
            >
              Source Code
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
