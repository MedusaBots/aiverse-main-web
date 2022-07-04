import React, { useState } from "react";
import discover from "../images/discover.png";
import vector1 from "../images/Vector1.png";
import vector from "../images/Vector.png";
import vector3 from "../images/Vector3.png";
import vector4 from "../images/Vector4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Dots from "../images/Dots.png";
import Boxes from "../images/Img.png";
import Thirdslide from "./Thirdslide";
import styles from "../css/second.module.css";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Secondslide() {
  // Add achievements here then set slide index so that you can show achievemnts as cards
  const achievements = [
    {
      title: "AI Publisher",
      text: "Developers can create their AI using our exclusive APIs",
    },
    {
      title: "Freedom to monetise",
      text: "Developers can monetize their product (AI, Data or VR) the way they prefer (Rent or Sell)",
    },
    {
      title: "Come, Connect and Create",
      text: "Developers can interact with one another and collaborate to create their products.",
    },
    {
      title: " Bridge to Developer and Consumer",
      text: "Connecting developers with the end consumer directly.",
    },
    {
      title: "Helping SMBs and SMEs",
      text: "Seamless options to choose with affordable costs.",
    },
    {
      title: "Building Metaverse with ease",
      text: "Providing templates and thousands of assets to create a metaverse using  the easy drag 'n drop feature.",
    },
  ];
  // Set sliceIndex to have a carousel of achievements
  const { width, height } = useWindowDimensions();
  const [sliceIndex, setsliceIndex] = useState<Array<number>>(
    width > 1024
      ? [0, 3]
      : width > 768 && width < 1024
      ? [0, 2]
      : width > 520 && width < 768
      ? [0, 1]
      : [0, 0]
  );
  const scrolltonext = () => {
    document
      .getElementById("scrollhere")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-[100vw] bg-[#011627] min-h-[100vh]">
      <div
        className="absolute top-[69.8vh] h-[40vh] w-[100vw] z-[1000]"
        style={{
          background:
            "linear-gradient(180deg, rgba(1, 22, 39, 0) 0%, #011627 76.64%, #011627 100%)",
        }}
      ></div>
      <div className="absolute top-[98vh] block md:hidden max-w-[80vw] m-auto text-white z-[100000000] ml-[10vw]">
        <div className="text-3xl font-mulish font-[500] tracking-[0.05em] z-[1000000] pb-10">
          Built on Web3
        </div>
        <p className="font-text font-[14px]">
          A platform where even small communities can access ai technology and
          developers can use our platform to create their own data sets to
          experiment, learn and earn with their creativity.
        </p>
      </div>
      <div className="absolute hidden top-[85vh] md:block m-auto text-center font-mont text-white text-[12px] w-[100vw] z-[10000] font-extralight">
        <span className="font-extralight">Discover more</span>
        <img
          src={discover}
          alt="Discover"
          className="m-auto pt-4 cursor-pointer"
          onClick={scrolltonext}
        />
      </div>
      <div className="absolute top-[100vh] z-[15]">
        <img
          src={vector1}
          alt="vector1"
          className="w-[20vw] left-[4vw] z-[15] hidden md:block"
          style={{ height: "80vh" }}
        />
      </div>
      <div className="absolute top-[146vh] left-[2vw] z-[5]">
        <img
          src={vector}
          alt="vector1"
          className="w-[50vw] left-[4vw] z-[7] bg-[#BE41EA] blur-[250px] opacity-[0.11]"
        />
      </div>
      <div className="absolute top-[158vh] left-[2vw] z-[-1]">
        <img
          src={vector}
          alt="vector1"
          className="w-[50vw] left-[4vw] z-[7] bg-[#41EAD4] blur-[250px] opacity-[0.07]"
        />
      </div>
      <div className="absolute top-[160vh] right-[4vw] z-[5]">
        <img
          src={vector}
          alt="vector1"
          className="bg-[#BE41EA] blur-[250px] opacity-[0.07] w-[50vw] left-[4vw] z-[7]"
        />
      </div>
      <div className="absolute w-[100vw] mt-[4vh] top-[100vh] bg-[#011627]">
        <div className="text-white w-[100vw] mt-[20vh] m-auto">
          <div className="flex pt-16" id="scrollhere">
            <div className="max-w-[50vw] ml-[15vw] text-[6px] md:text-lg font-text tracking-[-0.02em] leading-[150%] invisible md:visible">
              A Pocket-Friendly AI marketplace for Small scale Businesses and
              communities. aiverse is a platform for developers to use their
              skills to learn and earn by building AI models.
            </div>
            <div
              className="justify-end flex w-[20vw] z-[100000]"
              style={{ filter: "drop-shadow(0px 4px 50px #38659B)" }}
            >
              <span
                onClick={() =>
                  setsliceIndex((prev) =>
                    prev[0] !== 0
                      ? [prev[0] - 1, prev[1] - 1]
                      : [prev[0], prev[1]]
                  )
                }
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ boxShadow: "-10px 14px 24px rgba(1, 22, 39, 0.08)" }}
                  className="p-4 bg-[#011627] rounded-tl-md cursor-pointer"
                />
              </span>
              <span className="bg-[#133149] w-[3px] h-[20px] my-auto"></span>
              <span
                onClick={() =>
                  setsliceIndex((prev) =>
                    prev[1] !== achievements.length - 1
                      ? [prev[0] + 1, prev[1] + 1]
                      : [prev[0], prev[1]]
                  )
                }
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="p-4 bg-[#011627] rounded-br-md cursor-pointer"
                  style={{ boxShadow: "-10px 14px 24px rgba(1, 22, 39, 0.08)" }}
                />
              </span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* Achievements carousel */}
        <div className="flex m-auto mx-[10vw] justify-between">
          {achievements
            .slice(sliceIndex[0], sliceIndex[1] + 1)
            .map((item, index) => (
              <>
                <div
                  className={`${styles.styleit} flex justify-around w-[100%] h-[270px] rounded-[40px] mx-4`}
                  key={index}
                >
                  <div className="flex flex-col justify-around max-h-[70%] my-auto te">
                    <div className="font-text font-semibold text-xl text-center text-[#41EAD4] tracking-wide py-[2vh] w-[80%] mx-auto">
                      {item["title"]}
                    </div>
                    <div className="font-poppins text-sm text-center text-white tracking-[0.01em] w-[80%] mx-auto  py-[2vh]">
                      {item["text"]}
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
        <br />
        <br />
        <br />
        <div className="ml-[10vw] my-10 relative md:block hidden">
          <img src={Dots} alt="dots" />
          <div className="right-[10vw] my-10 absolute top-[5vh]">
            <img src={Boxes} alt="boxes" className="w-[28vw]" />
          </div>
          <div className="right-[10vw] my-10 absolute top-[-5vh]">
            <img src={vector3} alt="boxes" className="w-[10vw]" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Thirdslide />
      </div>
    </div>
  );
}

export default Secondslide;
