import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

type Props = {};

function Footer({}: Props) {
  const d = new Date();
  let currentYear = d.getFullYear();
  return (
    <footer className="py-4">
      <div className="flex justify-center items-center py-2 text-2xl">
        <Link
          className="mr-2"
          href="https://www.linkedin.com/in/ritoban-goswami-46b9b8233"
        >
          <FaLinkedin />
        </Link>
        <Link className="mx-2" href="https://github.com/Ritoban-Goswami">
          <FaGithub />
        </Link>
        <Link className="ml-2" href="ritobangoswami15@gmail.com">
          <HiMail />
        </Link>
      </div>
      <p className="text-center text-sm text-neutral-400 font-medium py-2">
        Copyright © {currentYear}{" "}
        <Link href="https://ritoban-goswami.github.io/Ritoban-Goswami/">
          Ritoban Goswami
        </Link>
        , All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
