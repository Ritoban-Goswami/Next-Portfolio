import { Links } from "@/typings";

export const fetchLinks = async () => {
  const res = await fetch(
    "/api/getLinks"
  );

  const data = await res.json();
  const links: Links[] = data.links;
  return links;
};
