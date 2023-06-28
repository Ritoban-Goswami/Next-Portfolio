interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface Slug {
  _type: "slug";
  current: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
  heroImage: Image;
  experiences: Experience[];
  projects: Project[];
  skills: Skills[];
  socialLinks: Links[];
  about: Array;
}

export interface Skills extends SanityBody {
  _type: "skills";
  skillName: string;
}

export interface Experience extends SanityBody {
  _type: "experiences";
  description: string;
  dateStarted: date;
  dateEnded: date;
  jobTitle: string;
  companyLink: string;
}

export interface Project extends SanityBody {
  projectTitle: string;
  projectSlug: Slug;
  linkToSource: string;
  linkToBuild: string;
  projectShortDescription: string;
  projectDescription: Array;
  _type: "projects";
  projectImage: Image;
  usedTechnologies: Skills[];
}

export interface Links extends SanityBody {
  _type: "links";
  linkTitle: string;
  linkUrl: string;
}
