import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProjectSlide from "./ProjectSlide";

type Props = {};

function ProjectSlider({}: Props) {
  const slides = [];

  for (let i = 0; i < 4; i++) {
    slides.push(
      // <SwiperSlide key={i}>
      <ProjectSlide key={i} />
      // </SwiperSlide>
    );
  }
  return (
    // <Swiper
    //   // install Swiper modules
    //   modules={[Navigation, Pagination]}
    //   spaceBetween={0}
    //   centeredSlides={true}
    //   grabCursor={true}
    //   slidesPerView={1}
    //   navigation={true}
    //   pagination={{ clickable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log("slide change")}
    // >
    <div className="flex items-center gap-x-5 overflow-x-scroll overflow-y-hidden w-full snap-x snap-mandatory scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[#ad000085]">
      {slides}
    </div>
    // </Swiper>
  );
}

export default ProjectSlider;
