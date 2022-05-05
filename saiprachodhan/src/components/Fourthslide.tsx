import React from "react";
import ball from "../images/ball.png";
import vector from "../images/Vector.png";
import styles from "../css/fourthslide.module.css";

function Fourthslide() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="pt-[5vh] font-headingbold font-bold text-6xl text-white py-2 tracking-[0.05em]">
            NFTs!!
          </h1>
          <br />
          <br />
          <p className="max-w-[45vw] font-text text-sm leading-[24px] text-white py-2">
            NFTs will act as voucher providing premium access to our users. 1003
            NFTs are going to be minted and can be bought from marketplace
          </p>
        </div>

        <div
          className={`${styles.fourthslide} w-[30vw] mr-[8vw] min-h-[320px]`}
        ></div>
      </div>
      <div className="absolute top-[240vh] right-0">
        <img src={vector} alt="v" className="w-[40vw] z-[1000000]" />
      </div>
      <div className="max-w-[92%] min-h-[80vh] z-[10000000] bg-[#011627] rounded-t-lg"></div>
      <br />
      <br />
    </div>
  );
}

export default Fourthslide;
