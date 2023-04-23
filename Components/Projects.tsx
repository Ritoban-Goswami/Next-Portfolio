import React from "react";
import Project from "@/Components/Project";

type Props = {};

function Projects({}: Props) {
  return (
    <div>
      <h3 className="text-6xl font-semibold mb-12">
        These Are Some Of My Recent Projects
      </h3>
      <Project />
    </div>
  );
}

export default Projects;
