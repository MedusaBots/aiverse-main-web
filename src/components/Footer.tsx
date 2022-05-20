import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Divider from "../images/Divider.png";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="w-[80vw] md:w-[30vw] mx-auto my-4">
      <div className="text-center text-sm font-text font-semibold text-white leading-[25px] pb-4">
        FOLLOW US
      </div>
      <img src={Divider} alt="Divider" className="mx-[30vw] md:mx-[12vw]" />
      <div className="flex max-w-[80px] text-[#41EAD4] text-[16px] mx-auto justify-between pt-2">
        <a href="https://www.instagram.com/ai.verse.dai/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/AIVerse_Dai">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://t.me/AIVERSE_DAI">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </div>
      <div className="text-center font-text text-[12px] text-white px-4 pt-4 pb-6">
        Copyright © aiverse 2022. All rights reserved.
      </div>
      <div className="text-center font-text text-2xl text-white pb-4">
        aiverse.
      </div>
    </div>
  );
}

export default Footer;
