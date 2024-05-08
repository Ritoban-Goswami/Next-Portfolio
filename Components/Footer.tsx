import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Links } from "@/typings";
import { fetchLinks } from "@/utils/fetchLinks";

function Footer() {
  const [links, setLinks] = useState<Links[]>([]);
  const d = new Date();
  let currentYear = d.getFullYear();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchLinks();
        setLinks(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="py-4 lg:h-[10vh]">
      <div className="flex justify-center items-center py-2 text-xl lg:text-2xl">
        {links?.map((link) => (
          <Link
            href={link.linkUrl}
            key={link._id}
            className="ml-5 first:ml-0 transition-all hover:text-primary-red"
          >
            {link.linkTitle === "LinkedIn" && <FaLinkedin />}
            {link.linkTitle === "GitHub" && <FaGithub />}
            {link.linkTitle === "Email" && <HiMail />}
          </Link>
        ))}
      </div>
      <p className="text-center text-xs lg:text-sm text-neutral-400 font-medium px-1 pt-2">
        Copyright © {currentYear}{" "}
        <Link
          className="transition-all hover:text-primary-red"
          href="https://www.linkedin.com/in/ritoban-goswami/"
        >
          Ritoban Goswami
        </Link>
        , All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
