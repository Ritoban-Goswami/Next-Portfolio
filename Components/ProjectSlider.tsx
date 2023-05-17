import React from "react";
import ProjectSlide from "./ProjectSlide";

type Props = {};

function ProjectSlider({}: Props) {
  const slides = [];

  for (let i = 0; i < 4; i++) {
    slides.push(<ProjectSlide key={i} />);
  }
  return (
    <div className="flex items-center gap-x-5 overflow-x-scroll overflow-y-hidden w-full snap-x snap-mandatory scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[#ad000085]">
      {slides}
    </div>
  );
}

export default ProjectSlider;
