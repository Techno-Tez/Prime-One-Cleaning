import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/heroSec.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function HeroSection() {
  return (
    <>
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        height={150}
      >
        <SwiperSlide><img src="./images/img1.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/img2.webp" alt="" /></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
