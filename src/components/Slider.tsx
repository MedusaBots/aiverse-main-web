import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Inception from "../images/Logos/Inception.png";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Startup from "../images/Logos/Startup.png";
import Maintoken from "../images/Logos/Maintokenlogo.webp";
import Sketchfab from "../images/Logos/sketchfab.svg";
import polygon from "../images/Logos/polygon.svg";
import microsoft from "../images/Logos/Microsoft.png";
import launch from "../images/Logos/launch.png";
import polygonstudios from "../images/Logos/polygonstudios.png";
import "../css/slider.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
function Slider() {
  const { width, height } = useWindowDimensions();
  const [slideperview, setslideperview] = useState(0);
  useEffect(() => {
    setslideperview(width > 1300 ? 4 : width > 768 ? 3 : width > 500 ? 2 : 1);
  }, [width]);
  const logos = [
    {
      logo: polygon,
      link: "https://polygon.technology/",
      text: "Aiverse partnership with Polygon",
    },
    {
      logo: Inception,
      link: "https://www.nvidia.com/en-us/startups/#",
      text: "Elite Member of Nvidia Inception",
    },
    {
      logo: Startup,
      link: "https://www.startupindia.gov.in/",
      text: "Won India's Metaverse Challenge",
    },
    {
      logo: Sketchfab,
      link: "https://sketchfab.com/",
      text: "Platform Partner",
    },
    {
      logo: Maintoken,
      link: "https://defiantplatform.com/",
      text: "Strategic Partnership With defiant",
    },
    {
      logo: polygonstudios,
      link: "https://polygonstudios.com/",
    },
    {
      logo: microsoft,
      link: "https://startups.microsoft.com/",
      text: "Member of Microsoft Startups Program",
    },
    {
      logo: launch,
      link: "https://www.thelaunchhive.com/",
      text: "Community Partner",
    },
  ];
  return (
    <div className="mb-32">
      <h1 className="text-center font-headingbold font-bold text-6xl text-white mb-4">
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
        {logos.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper_slide">
              <a href={item.link} target="_blank">
                <img src={item.logo} alt="" />
                {/* <div className="font-text text-[14px] text-white p-2">
                  {item.text}
                </div> */}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
