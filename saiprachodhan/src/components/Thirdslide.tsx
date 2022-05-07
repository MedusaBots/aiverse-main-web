import React, { useEffect } from "react";
import styles from "../css/thirdslide.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Dots from "../images/Dots.png";
import Ball from "../images/ball.png";
import Fourthslide from "./Fourthslide";
import Fifthslide from "./Fifthslide";

function Thirdslide() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className={`${styles.background}`}>
        <div className="absolute left-[2vw] top-[230vh] z-[8] md:hidden block">
          <img src={Dots} alt="ima" className="w-[80vw]" />
        </div>
        <div className="absolute right-0 top-[230vh] z-[10] md:hidden block">
          <img src={Ball} alt="ima" className="w-[80vw] opacity-[0.5]" />
        </div>
        <div className="nw:ml-[8vw]">
          <h1 className="text-center md:text-left pt-[5vh] font-headingbold font-bold text-6xl text-white py-2">
            Pillers Of aiverse
          </h1>
          <br />
          <br />
          <br />
          <div className="cards nw:mr-[8vw] md:flex-row flex-col flex justify-between">
            <div
              className="z-[10000000000] card my-[20px] min-h-[350px] m-auto md:mx-4 w-[240px] relative rounded-lg"
              data-aos="fade-up"
              data-aos-duration="1500"
              style={{
                background: "#122C48",
                border: "2px solid rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(41px)",
                boxShadow:
                  "-23.609px 48.8461px 73.2692px rgba(23, 18, 43, 0.55)",
              }}
            >
              <div
                className="transition-all duration-1000 ease-in-out absolute hover:top-[-20px] hover:left-[-20px] min-h-[350px] w-[240px]  rounded-lg z-[10000000000]"
                style={{
                  background:
                    "linear-gradient(210.96deg, #091E35 0.01%, #142D4D 42.05%, #0B273C 104.81%)",
                  boxShadow:
                    "-23.609px 48.8461px 73.2692px rgba(23, 18, 43, 0.55)",
                  backdropFilter: "blur(20.3526px)",
                }}
              >
                <div className="text-white font-poppins mx-auto text-center text-[14px] invisible p-2">
                  Aiverse characters have emerged from a metaverse who will
                  share their powers to users. Each characters of aiverse have
                  specific power which can be leveraged by users in the form of
                  AI applications
                </div>
                <div className="text-white font-poppins  mx-auto text-center text-[12px] p-2 font-extralight tracking-[0.02em]">
                  Aiverse characters have emerged from a metaverse who will
                  share their powers to users. Each characters of aiverse have
                  specific power which can be leveraged by users in the form of
                  AI applications
                </div>
              </div>
            </div>
            <div
              className="card min-h-[350px] my-[20px] m-auto md:mx-4 w-[240px] relative rounded-lg  z-[10000000000]"
              style={{
                border: "2px solid rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(41px)",
                background: "#122C48",
                boxShadow:
                  "-23.609px 48.8461px 73.2692px rgba(23, 18, 43, 0.55)",
              }}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div
                className="transition-all duration-1000 ease-in-out absolute hover:top-[20px] hover:left-[20px] min-h-[350px] w-[240px] z-[10] rounded-lg"
                style={{
                  background:
                    "linear-gradient(210.96deg, #091E35 0.01%, #142D4D 42.05%, #0B273C 104.81%)",
                  boxShadow:
                    "-23.609px 48.8461px 73.2692px rgba(23, 18, 43, 0.55)",
                  backdropFilter: "blur(20.3526px)",
                }}
              >
                <div className="text-white font-poppins mx-auto text-center text-[14px] invisible p-2">
                  Use-2-earn- Users can earn AIV tokens as they use our AI
                  models . Higher the no. Of requests per day more aiv tokens
                  will be awarded to users at the end of the day
                </div>
                <div className="text-white font-poppins  mx-auto text-center text-[12px] p-2 font-extralight tracking-[0.02em]">
                  Use-2-earn- Users can earn AIV tokens as they use our AI
                  models . Higher the no. Of requests per day more aiv tokens
                  will be awarded to users at the end of the day
                </div>
              </div>
            </div>
            <div
              className="card my-[20px] min-h-[350px] m-auto md:mx-4 w-[240px] relative rounded-lg z-[10000000000]"
              style={{
                border: "2px solid rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(41px)",
                background: "#122C48",
                boxShadow:
                  "-23.609px 48.8461px 73.2692px rgba(23, 18, 43, 0.55)",
              }}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div
                className="transition-all duration-1000 ease-in-out absolute hover:top-[-20px] hover:left-[20px] min-h-[350px] w-[240px] z-[10] rounded-lg"
                style={{
                  boxShadow:
                    "-23.609px 48.8461px 73.2692px rgba(23, 18, 43, 0.55)",
                  background:
                    "linear-gradient(210.96deg, #091E35 0.01%, #142D4D 42.05%, #0B273C 104.81%)",
                  backdropFilter: "blur(20.3526px)",
                }}
              >
                <div className="text-white font-poppins mx-auto text-center text-[14px] invisible p-2">
                  Aiverse will be providing decentralized data set pools where
                  developers can upload their data sets/ predictions and these
                  can be access by consumers. Ai verse will also be providing
                  its ready to use data sets
                </div>
                <div className="text-white font-poppins  mx-auto text-center text-[12px] p-2 font-extralight tracking-[0.02em]">
                  Aiverse will be providing decentralized data set pools where
                  developers can upload their data sets/ predictions and these
                  can be access by consumers. Ai verse will also be providing
                  its ready to use data sets
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <Fourthslide />
        </div>
      </div>
      <Fifthslide />
    </>
  );
}

export default Thirdslide;
