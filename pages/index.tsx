import Hero from "@/Components/Hero";
import About from "@/Components/About";
import ExperienceSkills from "@/Components/ExperienceSkills";
import Projects from "@/Components/Projects";
import ContactForm from "@/Components/ContactForm";
import { GetServerSideProps, GetStaticProps } from "next";
import { PageInfo } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";

type Props = {
  pageInfo: PageInfo;
};

export default function Home({ pageInfo }: Props) {
  return (
    <>
      <section
        id="hero"
        className="mt-20 mb-16 md:mt-24 lg:mt-5 lg:mb-0 lg:h-screen flex items-center justify-center snap-center"
        // className="container mx-auto px-20 h-screen snap-center"
      >
        <Hero pageInfo={pageInfo} />
      </section>
      <section
        id="about"
        className="my-16 md:my-28 lg:m-0 lg:h-screen flex items-center justify-center snap-center"
        // className="container mx-auto px-20 h-screen flex items-center snap-center"
      >
        <About about={pageInfo} />
      </section>
      <section
        id="experience-skills"
        className="my-16 md:my-28 lg:m-0 lg:h-screen flex items-center justify-center snap-center"
        // className="container mx-auto px-20 h-screen flex items-center snap-center"
      >
        <ExperienceSkills
          experiences={pageInfo.experiences}
          skills={pageInfo.skills}
        />
      </section>
      <section
        id="projects"
        className="my-16 md:my-28 lg:m-0 lg:h-screen flex items-center justify-center snap-center"
        // className="container mx-auto px-20 h-screen flex items-center snap-center"
      >
        <Projects projects={pageInfo.projects} />
      </section>
      <section
        id="contact"
        className="my-16 md:my-28 lg:m-0 lg:h-[90vh] flex items-center justify-center snap-center"
        // className="container mx-auto px-20 h-screen flex items-center flex-col snap-center"
      >
        <ContactForm />
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: {
      pageInfo,
    },
  };
};
