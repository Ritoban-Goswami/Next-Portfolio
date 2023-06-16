import { Links } from "@/typings";

export const fetchLinks = async () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_SANITY_DATASET == "production"
      ? process.env.NEXT_PUBLIC_SANITY_PRODUCTION_BASE_URL
      : process.env.NEXT_PUBLIC_SANITY_DEVELOPMENT_BASE_URL;

  const res = await fetch(`${baseUrl}/api/getLinks`);

  const data = await res.json();
  const links: Links[] = data.links;
  return links;
};
