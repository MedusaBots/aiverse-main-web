import React from "react";
import style from "../css/firstslide.module.css";
import menu from "../images/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
function Firstslide() {
  return (
    <div className={`w-[100vw] h-[100vh] ${style.background} relative`}>
      <div className="absolute top-[22vh] lg:top-[18vh] text-center text-white m-auto w-[100vw] font-headingbold font-bold lg:text-[12vh] lg:leading-[12vh] leading-[5vh] text-[5vh]">
        Home For Next <div></div>
        Generation DAIs
      </div>
      <div className="absolute top-[34vh] lg:top-[43vh] text-center text-white m-auto w-[100vw] font-text font-medium lg:text-[3vh] text-[14px]">
        A Decentralized marketplace to create, share and monetize your AI
        applications for <div></div>businesses, communities, and developers
        <br />
        <br />
        <button className="bg-[#00C9E0] rounded-[8px] px-8 py-2   font-inter text-[16px] leading-[24px]">
          Whitepaper
        </button>
        <div className="py-1"></div>
        <button className="bg-[#00C9E0] rounded-[8px] px-8 py-2  font-inter text-[16px] leading-[24px] mx-4 md:hidden">
          Connect to Wallet
        </button>
      </div>
      <div className="absolute top-[4vh] left-[10vw] text-white font-text font-bold text-2xl">
        Logo
      </div>
      <div className="absolute top-[4vh] right-[10vw] text-white font-text font-bold text-2xl flex">
        <button className="bg-[#00C9E0] rounded-[8px] px-8 py-2  font-inter text-[16px] leading-[24px] mx-4 md:block hidden">
          Connect to Wallet
        </button>
        <img
          src={menu}
          alt="Menu"
          className="cursor-pointer my-2"
          style={{ width: 24, height: 24 }}
        />
      </div>
      <div className="absolute bottom-[20vh] right-[10vw] flex flex-col  text-[#41EAD4]">
        <a href="#">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-xl p-2 cursor-pointer"
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-xl p-2 cursor-pointer"
          />
        </a>
      </div>
      <div className="absolute bottom-[4vh] left-[2vw] flex rotate-[-90deg]">
        <span className="font-text text-[16px] font-medium tracking-[0.05em] text-white">
          SCROLL
        </span>
        <span className="w-[2px] h-[80px] bg-[linear-gradient(180deg, #09F4F4 0%, #00C9E0 100%)]"></span>
      </div>
    </div>
  );
}

export default Firstslide;
