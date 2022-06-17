import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards,Zoom } from "swiper";

export default function NewSlider(props) {
  return (
    <>
      <Swiper
        effect={"cards"}
        // grabCursor={true}
        zoom={true}
        modules={[EffectCards,Zoom]}
        className="mySwiper"
      >
{props.images.map((image,index)=>(

        <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
                <img src={image} alt="" />
            </div>
        </SwiperSlide>
))}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
