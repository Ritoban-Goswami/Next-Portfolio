// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity";
import { PageInfo } from "@/typings";

const query = groq`*[_type=="pageInfo"][0]{
  name,
  role,
  heroImage,
  about,
  experiences[]->{
    _id,
    jobTitle,
    description,
    dateStarted,
    companyLink
  },
    projects[]->{
    _id,
      projectImage,
      projectSlug,
      projectTitle,
      projectShortDescription,
      projectDescription,
      projectInProgress,
    },
    socialLinks[]->{
    _id,
      linkTitle,
      linkUrl
    },
  skills[]->{
      skillName,
      _id
    }
}`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await client.fetch(query);
  res.status(200).json({ pageInfo });
}
