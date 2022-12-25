import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//slider Image for banner
import img1 from '../../../../Assets/Banner Images/1.jpg'
import img2 from '../../../../Assets/Banner Images/2.jpg'
import img3 from '../../../../Assets/Banner Images/3.jpg'
import img4 from '../../../../Assets/Banner Images/4.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} className='rounded-lg' alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} className='rounded-lg' alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} className='rounded-lg' alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} className='rounded-lg' alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;