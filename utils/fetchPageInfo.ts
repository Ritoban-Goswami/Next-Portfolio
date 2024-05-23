import { PageInfo, Project } from "@/typings";
import { client, imageUrlFor } from "@/sanity";
// ignoring this type error until fixed
//@ts-ignore
import { getDominantColor } from "quantize-colors";
import { groq } from "next-sanity";

export const fetchPageInfo = async () => {
  const query = groq`*[_type=="pageInfo"][0]{
    name,
    role,
    heroImage,
    about,
    experiences[]->{
      _id,
      jobTitle,
      description,
      dateStarted,
      companyLink
    },
    projects[]->{
      _id,
      projectImage,
      projectSlug,
      projectTitle,
      projectShortDescription,
      projectDescription,
      projectInProgress,
    },
    socialLinks[]->{
      _id,
      linkTitle,
      linkUrl
    },
    skills[]->{
      skillName,
      _id
    }
  }`;

  return await client.fetch(query);
};

const fetchProjectWithDominantColor = async (project: Project) => {
  const projectImageUrl = imageUrlFor(project.projectImage).url();
  let domColor = "";

  try {
    const color = await getDominantColor(projectImageUrl);
    domColor = `${color}4d`; // Adding 30% transparency
  } catch (error) {
    console.error("Error fetching dominant color:", error);
  }

  return {
    ...project,
    projectImage: {
      url: projectImageUrl,
      domColor,
    },
  };
};

export const fetchProjectsWithColors = async (projects: Project[]) => {
  return await Promise.all(projects.map(fetchProjectWithDominantColor));
};
