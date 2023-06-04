import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-06-04", // TODO: make it dynamic today date
  useCdn: false,
});

const imageBuilder = imageUrlBuilder(client);

export const imageUrlFor = (source: any) => imageBuilder.image(source);
