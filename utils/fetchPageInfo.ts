import { PageInfo } from "@/typings";

export const fetchPageInfo = async () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_SANITY_DATASET == "production"
      ? process.env.NEXT_PUBLIC_SANITY_PRODUCTION_BASE_URL
      : process.env.NEXT_PUBLIC_SANITY_DEVELOPMENT_BASE_URL;

  const res = await fetch(`${baseUrl}/api/getPageInfo`);

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;
  return pageInfo;
};
