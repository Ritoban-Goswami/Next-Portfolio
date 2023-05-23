import React from "react";
import ProjectSlide from "./ProjectSlide";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";

type Props = {};

function ProjectsGrid({}: Props) {
  const slides = [];

  for (let i = 0; i < 4; i++) {
    slides.push(<ProjectSlide key={i} />);
  }

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-12 mx-auto w-10/12">
      {/* <Carousel
        axis="horizontal"
        showStatus={false}
        showThumbs={false}
        className="relative"
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-70 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <IoChevronBackCircle className="w-14 h-14" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-70 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <IoChevronForwardCircle className="w-14 h-14" />
            </div>
          );
        }}
      > */}
      {slides}
      {/* </Carousel> */}
    </div>
  );
}

export default ProjectsGrid;
