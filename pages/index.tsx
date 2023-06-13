import Hero from "@/Components/Hero";
import About from "@/Components/About";
import ExperienceSkills from "@/Components/ExperienceSkills";
import Projects from "@/Components/Projects";
import ContactForm from "@/Components/ContactForm";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skills, Links } from "@/typings";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchLinks } from "@/utils/fetchLinks";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skills[];
  links: Links[];
};

export default function Home({
  pageInfo,
  experiences,
  projects,
  skills,
  links,
}: Props) {
  return (
    <>
      <section
        id="hero"
        className="mt-20 mb-16 md:mt-24 lg:mt-5 lg:mb-0 lg:h-screen flex items-center justify-center snap-center"
        // className="container mx-auto px-20 h-screen snap-center"
      >
        {/* <Header /> */}
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
        <ExperienceSkills experiences={experiences} skills={skills} />
      </section>
      <section
        id="projects"
        className="my-16 md:my-28 lg:m-0 lg:h-screen flex items-center justify-center snap-center"
        // className="container mx-auto px-20 h-screen flex items-center snap-center"
      >
        <Projects projects={projects} />
      </section>
      <section
        id="contact"
        className="my-16 md:my-28 lg:m-0 lg:h-[90vh] flex items-center justify-center snap-center"
        // className="container mx-auto px-20 h-screen flex items-center flex-col snap-center"
      >
        <ContactForm />
        {/* <Footer /> */}
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skills[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const links: Links[] = await fetchLinks();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      links,
    },
  };
};
