import { Skills } from "@/typings";

export const fetchSkills = async () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_SANITY_DATASET == "production"
      ? process.env.NEXT_PUBLIC_SANITY_PRODUCTION_BASE_URL
      : process.env.NEXT_PUBLIC_SANITY_DEVELOPMENT_BASE_URL;

  const res = await fetch(`${baseUrl}/api/getSkills`);

  const data = await res.json();
  const skills: Skills[] = data.skills;
  return skills;
};
