import { Project } from "@/typings";

export const fetchProjects = async () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_SANITY_DATASET == "production"
      ? process.env.NEXT_PUBLIC_SANITY_PRODUCTION_BASE_URL
      : process.env.NEXT_PUBLIC_SANITY_DEVELOPMENT_BASE_URL;

  const res = await fetch(`${baseUrl}/api/getProjects`);

  const data = await res.json();
  const projects: Project[] = data.projects;
  return projects;
};
