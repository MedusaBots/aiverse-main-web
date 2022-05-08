import React from "react";
import Vector1 from "../images/Vector1.png";
import Vector from "../images/Vector.png";
import menu from "../images/menu.png";
import Vector6 from "../images/Vector6.png";
import Group1193 from "../images/Group1193.png";
import Vector5 from "../images/Vector5.png";
import Group1201 from "../images/Group1201.png";
import Group1093 from "../images/Group1093.png";
import Group1097 from "../images/Group1097.png";
import Group1096 from "../images/Group1096.png";
import Group207 from "../images/Group207.png";
import Group1098 from "../images/Group1098.png";
import Three from "../images/3.png";
import lights from "../images/lights.png";
import Footer from "./Footer";
import Logo2 from "../images/logo2.png";

function Tokenomics1() {
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
    <div className="w-[100vw] min-h-[200vh] bg-[#011627]  text-white font-text">
      <div className="absolute top-0 left-[10vw]">
        <img
          src={Vector1}
          alt="vector"
          className="max-h-[30vh] bg-[#41EAD4] opacity-[0.5]"
          style={{
            filter: "blur(80px)",
            transform: "matrix(0.91, -0.5, 0.39, 0.89, 0, 0)",
          }}
        />
      </div>
      <div className="absolute top-[4vh] left-[10vw]">
        <img src={Logo2} alt="Logo" className="w-auto md:h-[80px] h-[60px]" />
      </div>
      <div className="absolute top-[4vh] right-[10vw] text-white font-text font-bold text-2xl flex">
        <button
          className="bg-[#00C9E0] rounded-[8px] px-10 py-2  font-inter text-[16px] leading-[24px] mx-4 md:block hidden"
          onClick={login}
        >
          Connect to Wallet
        </button>
        <img
          src={menu}
          alt="Menu"
          className="cursor-pointer my-2"
          style={{ width: 24, height: 24 }}
        />
      </div>
      <div className="absolute top-[10vh] left-[10vw] z-[5]">
        <img
          src={Vector}
          alt="vector1"
          className="bg-[#BE41EA] blur-[250px] opacity-[0.11] max-h-[70vh] z-[7]"
          style={{ filter: "blur(50px)" }}
        />
      </div>
      <div className="pt-32 font-[600] tracking-wide pl-32 font-poppins text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-10xl leading-8">
        TOKENOMICS
      </div>
      {/* <div className="absolute top-[10vh] right-[2vw]">
        <img src={Group1193} alt="" className="max-h-[70vh]" />
      </div> */}
      <div className="absolute top-[10vh] right-[15vw]">
        <img
          src={lights}
          alt=""
          className="max-w-[35vw]"
          style={{ filter: "blur(60px)", transform: "rotate(-130.5deg)" }}
        />
      </div>
      <div className="absolute top-0 right-[2vw]">
        <img src={Group1201} alt="" className="w-[50vw]" />
      </div>
      <div className="absolute top-[25vh] left-0">
        <img src={Group1098} alt="" className="h-[90vh]" />
      </div>
      <div className="absolute top-[80vh] right-0 z-[1000]">
        <img src={Group1096} alt="" className="h-[90vh] z-[1000]" />
      </div>
      <div className="absolute top-[102vh] right-[12vw]">
        <img src={Group207} alt="" className="h-[48vh]" />
      </div>
      <div className="absolute top-[105vh] left-0">
        <img src={Three} alt="" className="lg:h-[70vh] h-[60vh]" />
      </div>
      <div className="absolute top-[105vh] right-0">
        <img
          src={Vector}
          alt=""
          className="h-[80vh] bg-[#41EAD4] opacity-[0.1]"
          style={{
            filter: "blur(40px)",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
          }}
        />
      </div>
      <img
        src={Vector6}
        alt="vec6"
        className="absolute top-[150vh] left-[20vw] h-[50vh]"
      />
      <img
        src={Vector5}
        alt="vec6"
        className="absolute top-[120vh] left-[5vw] h-[60vh]"
        style={{ filter: "blur(20px)" }}
      />
      <div className="absolute top-[160vh] w-[100vw] mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Tokenomics1;
