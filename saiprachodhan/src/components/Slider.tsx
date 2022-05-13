import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import three from "../images/3.png";
import Background1 from "../images/Background1.png";
import useWindowDimensions from "../hooks/useWindowDimensions";

import "../css/slider.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
function Slider() {
  const { width, height } = useWindowDimensions();
  const [slideperview, setslideperview] = useState(0);
  useEffect(() => {
    setslideperview(width > 1300 ? 8 : width > 768 ? 5 : width > 500 ? 4 : 2);
  }, [width]);
  return (
    <div className="mb-32">
      <h1 className="text-center font-headingbold font-bold text-6xl text-white mb-16">
        Early supporters
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={slideperview}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper_slide">
            <img src={three} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_slide">
            <img src={three} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_slide">
            <img src={three} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_slide">
            <img src={Background1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_slide">
            <img src={three} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_slide">
            <img src={three} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
