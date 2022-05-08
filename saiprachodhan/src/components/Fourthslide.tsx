import React from "react";
import ball from "../images/ball.png";
import vector from "../images/Vector.png";
import Notification from "../images/Notification.png";
import styles from "../css/fourthslide.module.css";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Group1217 from "../images/Group1217.png";
import Group1215 from "../images/Group1215.png";
import Group1216 from "../images/Group1216.png";

function Fourthslide() {
  const { width, height } = useWindowDimensions();
  return (
    <div>
      <div className="flex justify-between ml-[8vw]">
        <div>
          <h1 className="pt-[5vh] font-headingbold font-bold text-6xl text-white py-2 tracking-[0.05em]">
            NFTs!!
          </h1>
          <br />
          <br />
          <p className="w-[80vw] md:max-w-[45vw] font-text text-sm leading-[24px] text-white py-2">
            NFTs will act as voucher providing premium access to our users. 1003
            NFTs are going to be minted and can be bought from marketplace
          </p>
        </div>

        <div
          className={`${styles.fourthslide} w-[30vw] mr-[8vw] min-h-[320px] md:block hidden`}
        ></div>
      </div>
      <div className="absolute top-[200vh] right-0 hidden md:block">
        <img src={vector} alt="v" className="w-[40vw] z-[10000000]" />
      </div>
      <div className="max-w-[92%] min-h-[90vh] z-[10000000] md:bg-[#011627] rounded-t-lg">
        <div className="flex justify-between md:flex-row flex-col">
          <div className="md:hidden my-4 overflow-x-scroll flex">
            <div
              className={`card bg-[linear-gradient(210.96deg, #0F2834 0.01%, #1C3951 42.05%, #14243E 104.81%)] min-h-[320px] mx-4 min-w-[250px] m-auto ${styles.cardit}`}
            >
              <img src={Group1215} alt="" className="w-[250px] h-auto" />
            </div>
            <div
              className={`card bg-[linear-gradient(210.96deg, #0F2834 0.01%, #1C3951 42.05%, #14243E 104.81%)] min-h-[320px] mx-4 min-w-[250px] m-auto ${styles.cardit}`}
            >
              <img src={Group1216} alt="" className="w-[250px] h-auto" />
            </div>
            <div
              className={`card bg-[linear-gradient(210.96deg, #0F2834 0.01%, #1C3951 42.05%, #14243E 104.81%)] min-h-[320px] mx-4 min-w-[250px] m-auto ${styles.cardit}`}
            >
              <img src={Group1217} alt="" className="w-[250px] h-auto" />
            </div>
          </div>
          <div className="w-[100%] md:w-[35%] md:mx-0 mx-auto">
            <div
              className={`${styles.bgshape} box flex flex-col justify-between h-[100%]`}
            >
              <img
                src={Notification}
                alt="notification"
                style={{
                  transform: width > 800 ? "scale(0.8)" : "scale(1)",
                  transformOrigin: "top center",
                }}
              />
            </div>
          </div>
          <div className="md:w-[45%] hidden md:block mt-10 justify-end">
            <div
              className={`card bg-[linear-gradient(210.96deg, #0F2834 0.01%, #1C3951 42.05%, #14243E 104.81%)] min-h-[250px] mx-4 w-[190px] ${styles.cardit} relative z-[100000]`}
            >
              <div
                className={`absolute top-[20px] left-[120px] card bg-[linear-gradient(210.96deg, #0F2834 0.01%, #1C3951 42.05%, #14243E 104.81%)] min-h-[250px] min-w-[190px] m-auto ${styles.cardit} z-[-4]`}
                style={{ transform: "matrix(0.94, 0.36, -0.32, 0.93, 0, 0)" }}
              >
                <img src={Group1217} alt="" className="w-[190px] h-[270px]" />
              </div>
              <div
                className={`absolute top-[20px] right-[120px] card bg-[linear-gradient(210.96deg, #0F2834 0.01%, #1C3951 42.05%, #14243E 104.81%)] min-h-[250px] mx-4 min-w-[190px] m-auto ${styles.cardit} z-[-4]`}
                style={{ transform: "matrix(0.94, -0.36, 0.32, 0.93, 0, 0)" }}
              >
                <img src={Group1216} alt="" className="w-[190px] h-[270px]" />
              </div>
              <div
                className={`card bg-[linear-gradient(210.96deg, #0F2834 0.01%, #1C3951 42.05%, #14243E 104.81%)] min-h-[250px] w-[190px] ${styles.cardit} relative z-[100000]`}
              >
                <img src={Group1215} alt="" className="w-[190px] h-[270px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Fourthslide;
