import React from "react";
import discover from "../images/discover.png";
import vector1 from "../images/Vector1.png";
import vector from "../images/Vector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Dots from "../images/Dots.png";
import Boxes from "../images/Img.png";

function Secondslide() {
  return (
    <div className="w-[100vw] bg-[#011627]">
      <div
        className="absolute top-[69.8vh] h-[40vh] w-[100vw] z-[1000]"
        style={{
          background:
            "linear-gradient(180deg, rgba(1, 22, 39, 0) 0%, #011627 76.64%, #011627 100%)",
        }}
      ></div>
      <div className="absolute hidden top-[102vh] md:block m-auto text-center font-mont text-white text-[12px] w-[100vw] z-[10000] font-extralight">
        <span className="font-extralight">Discover more</span>
        <img src={discover} alt="Discover" className="m-auto pt-4" />
      </div>
      <div className="absolute top-[102vh] z-[5]">
        <img
          src={vector1}
          alt="vector1"
          className="w-[20vw] left-[4vw] z-[5]"
          style={{ height: "80vh" }}
        />
      </div>
      <div className="absolute top-[116vh] left-[2vw] z-[5]">
        <img
          src={vector}
          alt="vector1"
          className="w-[40vw] left-[4vw] z-[7] bg-[#BE41EA] blur-[250px] opacity-[0.11]"
        />
      </div>
      <div className="absolute top-[116vh] left-[2vw] z-[-1]">
        <img
          src={vector}
          alt="vector1"
          className="w-[40vw] left-[4vw] z-[7] bg-[#41EAD4] blur-[250px] opacity-[0.07]"
        />
      </div>
      <div className="absolute top-[116vh] right-[4vw] z-[5]">
        <img src={vector} alt="vector1" className="w-[40vw] left-[4vw] z-[7]" />
      </div>
      <div className="absolute w-[100vw] mt-[4vh] top-[100vh] bg-[#011627]">
        <div className="text-white w-[100vw] mt-[35vh] m-auto">
          <div className="flex">
            <div className="max-w-[50vw] ml-[15vw] text-sm font-text">
              A platform where even small communities con access ai technology
              and developers can use our platform to create their own data sets
              to experiment, learn and earn with their creativity.
            </div>
            <div
              className="justify-end flex w-[20vw]"
              style={{ filter: "drop-shadow(0px 4px 95px #38659B);" }}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="p-4 bg-[#011627] rounded-tl-md cursor-pointer"
                style={{ boxShadow: "-10px 14px 24px rgba(1, 22, 39, 0.08)" }}
              />
              <span className="bg-[#133149] w-[2px] h-auto"></span>
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ boxShadow: "-10px 14px 24px rgba(1, 22, 39, 0.08)" }}
                className="p-4 bg-[#011627] rounded-br-md cursor-pointer"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="m-auto mx-[10vw] flex justify-between">
          <div
            className="flex w-[100%] h-[270px] rounded-[40px] mx-4"
            style={{
              background:
                "linear-gradient(211.41deg, rgba(29, 61, 96, 0.26) -10.07%, rgba(33, 195, 174, 0.29) 48.06%, rgba(61, 108, 164, 0.33) 108.66%)",
              boxShadow: "0px 25px 50px 25px #22F0CB",
            }}
          ></div>
          <div
            className="flex w-[100%] h-[270px] rounded-[40px] mx-4"
            style={{
              background:
                "linear-gradient(215.34deg, #0A2439 -43.52%, #102143 27.96%, #214467 110.68%)",
              boxShadow: "0px 25px 50px 25px #4276B2",
            }}
          ></div>
          <div
            className="flex w-[100%] h-[270px] rounded-[40px] mx-4"
            style={{
              background:
                "linear-gradient(215.34deg, #0A2439 -43.52%, #102143 27.96%, #214467 110.68%)",
              boxShadow: "0px 25px 50px 25px #4276B2",
            }}
          ></div>
          <div
            className="flex w-[100%] h-[270px] rounded-[40px] mx-4"
            style={{
              background:
                "linear-gradient(215.34deg, #0A2439 -43.52%, #102143 27.96%, #214467 110.68%)",
              boxShadow: "0px 25px 50px 25px #4276B2",
            }}
          ></div>
        </div>
        <br />
        <br />
        <br />
        <div className="ml-[10vw] my-10 relative">
          <img src={Dots} alt="dots" />
          <div className="right-[10vw] my-10 absolute top-[10vh]">
            <img src={Boxes} alt="boxes" className="w-[25vw]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondslide;
