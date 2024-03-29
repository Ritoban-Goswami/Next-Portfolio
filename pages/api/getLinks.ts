// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity";
import { Links } from "@/typings";

const query = groq`*[_type=="links"] | order(_createdAt desc)`;

type Data = {
  links: Links[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const links: Links[] = await client.fetch(query);
  res.status(200).json({ links });
}
