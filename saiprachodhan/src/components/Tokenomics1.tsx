import React, { useState } from "react";
import Vector1 from "../images/Vector1.png";
import Vector from "../images/Vector.png";
import menu from "../images/menu.png";
import cross from "../images/cross.png";
import Vector6 from "../images/Vector6.png";
import Group1193 from "../images/Group1193.png";
import Vector5 from "../images/Vector5.png";
import Group1201 from "../images/Group1201.png";
import Group1199 from "../images/Group1199.png";
import Group1093 from "../images/Group1093.png";
import Group1097 from "../images/Group1097.png";
import Group1094 from "../images/Group1094.png";
import Group1096 from "../images/Group1096.png";
import Group207 from "../images/Group207.png";
import Group1098 from "../images/Group1098.png";
import Three from "../images/3.png";
import lights from "../images/lights.png";
import Footer from "./Footer";
import Logo2 from "../images/logo2.png";
import Menu from "./Menu";

function Tokenomics1() {
  const [walletAddress, setWalletAddress] = useState("");

  // Helper Functions

  // Requests access to the user's META MASK WALLET
  // https://metamask.io
  async function requestAccount() {
    console.log("Requesting account...");

    // ❌ Check if Meta Mask Extension exists
    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log("Error connecting...");
      }
    } else {
      alert("Meta Mask not detected");
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }
  const [dropdown, setdropdown] = useState(false);
  return (
    <>
      <div
        className="hidden overflow-hidden md:block w-[100vw] min-h-[200vh] bg-[#011627] 
       text-white font-text"
      >
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
        <div className="absolute top-[4vh] right-[10vw] text-white font-text font-bold text-2xl flex z-[10000000]">
          <button
            className="bg-[#00C9E0] rounded-[8px] px-10 py-2  font-inter text-[16px] leading-[24px] mx-4 md:block hidden"
            onClick={connectWallet}
          >
            {walletAddress
              ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(
                  walletAddress.length - 3,
                  walletAddress.length
                )}`
              : "Connect to Wallet"}
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
        {dropdown && (
          <div className="absolute top-[10vh] right-[10vw]  z-[10000000]">
            <Menu />
          </div>
        )}
        <div className="absolute top-[10vh] right-[15vw]  z-[1000]">
          <img
            src={lights}
            alt=""
            className="max-w-[35vw] z-[100]"
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
      <div className="block md:hidden bg-[#011627] min-h-[200vh] overflow-x-hidden">
        <div className="absolute top-[4vh] w-[100vw]">
          <div className="mx-[4vw] flex justify-between">
            <div>
              <img
                src={Logo2}
                alt="Logo"
                className="w-auto md:h-[80px] h-[60px]"
              />
            </div>
            <div className="z-[10000000] my-auto">
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
          </div>
        </div>
        {dropdown && (
          <div className="absolute top-[10vh] right-[5vw]">
            <Menu />
          </div>
        )}
        <div className="pt-32 text-white font-poppins text-4xl text-center font-[600] tracking-wide">
          TOKENOMICS
        </div>
        <div className="absolute top-[19vh] right-0 overflow-hidden">
          <img
            src={Group1199}
            alt=""
            className="w-[80vw] overflow-hidden"
            style={{ transform: "rotate(5deg)" }}
          />
        </div>
        <div className="w-[100vw] mt-72 z-[10000]">
          <img src={Group1097} className="w-[70%] mx-auto  z-[1000]" />
        </div>
        <div>
          <img
            src={Group1094}
            className="mt-[-200px] w-[100%] mx-auto  z-[1000]"
          />
        </div>
        <div className="w-[100vw]">
          <img src={Group207} className="w-[86%] m-auto" />
        </div>
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default Tokenomics1;
