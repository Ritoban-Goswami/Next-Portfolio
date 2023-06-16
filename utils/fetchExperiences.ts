import { Experience } from "@/typings";

export const fetchExperiences = async () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_SANITY_DATASET == "production"
      ? process.env.NEXT_PUBLIC_SANITY_PRODUCTION_BASE_URL
      : process.env.NEXT_PUBLIC_SANITY_DEVELOPMENT_BASE_URL;

  const res = await fetch(`${baseUrl}/api/getExperiences`);
  try {
    const data = await res.json();
    const experiences: Experience[] = data.experiences;
    return experiences;
  } catch (err) {
    console.log(`ERROR:${err}`);
    return [];
  }
};
