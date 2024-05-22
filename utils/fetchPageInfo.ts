import { PageInfo, Project } from "@/typings";
import { imageUrlFor } from "@/sanity";
// ignoring this type error until fixed
//@ts-ignore
import { getDominantColor } from "quantize-colors";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getPageInfo`
  );

  const data = await res.json();

  const projectImagePromises = data.pageInfo.projects.map(
    async (project: Project) => {
      const projectImageUrl = imageUrlFor(project.projectImage).url();
      try {
        let color = await getDominantColor(projectImageUrl);
        // Add transparency (4d is 30% transparency in hex)
        color += "4d";
        return {
          ...project,
          projectImage: {
            url: projectImageUrl,
            domColor: color,
          },
        };
      } catch (error) {
        console.error("Error fetching dominant color:", error);
        return {
          ...project,
          projectImage: {
            url: projectImageUrl,
            domColor: "",
          },
        };
      }
    }
  );

  // Wait for all promises to resolve
  const projectImageUrls = await Promise.all(projectImagePromises);

  // Log the processed image URLs with dominant colors
  const pageInfo: PageInfo = data.pageInfo;
  pageInfo.projects = projectImageUrls;
  console.log(pageInfo);
  return pageInfo;
};
