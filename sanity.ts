import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-06-04", // TODO: make it dynamic today date
  useCdn: true,
});

const imageBuilder = createImageUrlBuilder(client);

export const imageUrlFor = (source: any) => imageBuilder.image(source);
