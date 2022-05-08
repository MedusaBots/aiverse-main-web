import React, { useState } from "react";
import style from "../css/firstslide.module.css";
import menu from "../images/menu.png";
import cross from "../images/cross.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import discover from "../images/discover.png";
import Logo2 from "../images/logo2.png";
import {
  faInstagram,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Menu from "./Menu";
function Firstslide() {
  const [dropdown, setdropdown] = useState(false);
  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.alert("Metamask not installed");
    }
    return provider;
  };

  const login = async () => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error("Not Window.ehereum provider");
      }
      await provider.request({
        method: "eth_requestAccounts",
      });
    }
  };
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
        <button className="bg-[#00C9E0] rounded-[8px] px-6 py-2   font-inter text-[16px] leading-[24px]">
          Whitepaper
        </button>
        <div className="py-1"></div>
        <button
          className="bg-[#00C9E0] rounded-[8px] px-6 py-2  font-inter text-[16px] leading-[24px] mx-4 md:hidden"
          onClick={login}
        >
          Connect to Wallet
        </button>
      </div>
      {dropdown && (
        <div className="absolute top-[10vh] right-[10vw]">
          <Menu />
        </div>
      )}
      <div className="absolute top-[4vh] left-[10vw] text-white font-text font-bold text-2xl">
        <img src={Logo2} alt="Logo" className="w-auto md:h-[80px] h-[60px]" />
      </div>
      <div className="absolute top-[4vh] right-[10vw] text-white font-text font-bold text-2xl flex">
        <button
          className="bg-[#00C9E0] rounded-[8px] px-10 py-2  font-inter text-[16px] leading-[24px] mx-4 md:block hidden"
          onClick={login}
        >
          Connect to Wallet
        </button>
        {dropdown ? (
          <img
            src={cross}
            alt="Menu"
            className="cursor-pointer my-2"
            style={{ width: 24, height: 24 }}
            onClick={() => setdropdown((prev) => !prev)}
          />
        ) : (
          <img
            src={menu}
            alt="Menu"
            className="cursor-pointer my-2"
            style={{ width: 24, height: 24 }}
            onClick={() => setdropdown((prev) => !prev)}
          />
        )}
      </div>
      <div className="absolute bottom-[20vh] md:bottom-[26vh] right-[1vw] md:right-[10vw] flex flex-col  text-[#41EAD4]">
        <div className="absolute right-[9.6vw] bottom-[4vh] rotate-[-90deg] md:hidden flex">
          <span className="font-text text-[14px] font-medium tracking-[0.05em] text-white">
            SCROLL
          </span>
        </div>
        <div className="absolute bottom-[0vh] right-[13.5vw] rotate-[-90deg] md:hidden flex">
          <span
            className="w-[2px] h-[80px] rotate-[-90deg]"
            style={{
              background: "linear-gradient(180deg, #09F4F4 0%, #00C9E0 100%)",
            }}
          ></span>
        </div>
        <a href="https://twitter.com/AIVerse_Dai" className="z-[1000000000000]">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-xl p-2 mr-4 cursor-pointer z-[100000000000000]"
          />
        </a>
        <a
          href="https://www.instagram.com/ai.verse.dai/"
          className="z-[1000000000000]"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-xl p-2 mr-4 cursor-pointer z-[100000000000000]"
          />
        </a>
        <a href="https://t.me/AIVERSE_DAI" className="z-[1000000000000]">
          <FontAwesomeIcon
            icon={faTelegram}
            className="text-xl p-2 mr-4 cursor-pointer z-[100000000000000]"
          />
        </a>
      </div>
      <div className="absolute left-[5vw] bottom-[27.5vh] rotate-[-90deg] md:flex hidden">
        <span className="font-text text-[14px] font-medium tracking-[0.05em] text-white">
          SCROLL
        </span>
      </div>
      <div className="absolute block md:hidden m-auto text-center font-mont bottom-[18vh] text-white text-[12px] w-[100vw] z-[1000000000000]">
        Discover more
        <img src={discover} alt="Discover" className="m-auto pt-4" />
      </div>
      <div className="absolute bottom-[14vh] left-[7.3vw] rotate-[-90deg] md:flex hidden">
        <span
          className="w-[2px] h-[60px] rotate-[-90deg]"
          style={{
            background: "linear-gradient(180deg, #09F4F4 0%, #00C9E0 100%)",
          }}
        ></span>
      </div>
    </div>
  );
}

export default Firstslide;
