import { Links } from "@/typings";

export const fetchLinks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getLinks`
  );

  const data = await res.json();
  const links: Links[] = data.links;
  return links;
};
