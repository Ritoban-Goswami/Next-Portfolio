// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity";
import { Skills } from "@/typings";

const query = groq`*[_type=="skills"]`;

type Data = {
  skills: Skills[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skills[] = await client.fetch(query);
  res.status(200).json({ skills });
}
