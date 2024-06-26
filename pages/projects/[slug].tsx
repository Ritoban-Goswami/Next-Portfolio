import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SkillElement from "@/Components/SkillElement";
import { Project } from "@/typings";
import { GetStaticProps } from "next";
import { client } from "@/sanity";
import { groq } from "next-sanity";
import { imageUrlFor } from "@/sanity";
import { ParsedUrlQuery } from "querystring";
import { PortableText, PortableTextComponents } from "@portabletext/react";
// import { useRouter } from "next/router";
// import { BiArrowBack } from "react-icons/bi";

type Props = {
  projectTitle: string;
  projectDescription: [];
  projectImage: string;
  linkToBuild: string;
  linkToSource: string;
  usedTechnologies: [];
  projectInProgress: boolean;
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
    h3: ({ children }) => (
      <h3 className="heading text-xl sm:text-2xl lg:text-3xl xl:text-[2rem] 2xl:text-5xl w-4/5 md:w-full font-semibold mb-3 xl:mb-6 mt-4 md:mt-8">
        {children}
      </h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-1 px-4 md:mt-5 list-disc">{children}</ul>
    ),
  },
};

export default function Page({
  projectTitle,
  projectDescription,
  projectImage,
  linkToBuild,
  linkToSource,
  usedTechnologies,
  projectInProgress,
}: Props) {
  return (
    <>
      <section className="mb-4">
        <div className="flex flex-col">
          <h1
            className="heading text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] 2xl:text-6xl w-4/5 md:w-full font-semibold mb-12 xl:mb-20 mt-20 md:mt-40"
            // style={{ textShadow: "#2B2B2B 0.4rem 0px 0px" }}
          >
            {/* <button type="button" onClick={() => router.back()}>
              <BiArrowBack />
            </button> */}
            {projectTitle} {projectInProgress && "(Work In Progress)"}
          </h1>
          <Image
            className="rounded-md 2xl:max-w-[70rem] outline outline-1 outline-[#141414]"
            src={projectImage}
            alt="freewheelin-bob-dylan"
            width={3000}
            height={3000}
            priority={true}
          />
          <div className="flex justify-between flex-col-reverse gap-y-8 md:flex-row mt-8 md:mt-16">
            <div className="md:w-8/12 text-sm sm:text-base text-neutral-400">
              {/* {projectDescription} */}
              <PortableText
                value={projectDescription}
                components={ptComponents}
              />
            </div>
            <div className="md:w-4/12 md:flex flex-col items-center">
              <div>
                <h4 className="text-neutral-600 text-2xl font-bold mb-4">
                  I've Used
                </h4>
                <motion.div className="flex flex-wrap gap-3 items-start md:flex-col">
                  {usedTechnologies?.map((skill: any) => (
                    <SkillElement key={skill._id} skillName={skill.skillName} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          <div className="my-16 flex justify-center md:justify-start">
            {!projectInProgress && (
              <Link
                className="text-sm mr-5 flex justify-center items-center bg-transparent hover:bg-primary-red text-primary-red font-semibold hover:text-neutral-100 transition-colors py-2 px-4 border-2 border-primary-red hover:border-transparent rounded-lg"
                href={`${linkToBuild}`}
                target="_blank"
              >
                View Project
              </Link>
            )}
            <Link
              className="text-sm flex justify-center items-center bg-transparent hover:bg-primary-red text-primary-red font-semibold hover:text-neutral-100 transition-colors py-2 px-4 border-2 border-primary-red hover:border-transparent rounded-lg"
              href={`${linkToSource}`}
              target="_blank"
            >
              Source Code
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const query = groq`*[_type == "projects" && projectSlug.current == $slug][0]{
  projectTitle,
  projectDescription,
  projectImage,
  linkToBuild,
  linkToSource,
  usedTechnologies[]->{
    skillName,
    _id
  },
  projectInProgress,
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "projects" && defined(projectSlug.current)][].projectSlug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = "" } = context.params as ParsedUrlQuery;
  const project: Project = await client.fetch(query, { slug });
  const projectImgUrl = imageUrlFor(project.projectImage).url();

  return {
    props: {
      ...project,
      projectImage: projectImgUrl,
    },
    revalidate: 60,
  };
};
