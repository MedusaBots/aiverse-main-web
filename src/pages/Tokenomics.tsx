import React, { useState, useEffect } from "react";
import Tokenomics1 from "../components/Tokenomics1";
import Logo from "../images/logo2.png";
import Loader from "../images/loader.gif";

function Tokenomics() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center m-auto align-middle items-center w-[100vw] h-[100vh] bg-[#011627d8]">
          <div className="max-h-[280px] w-[280px]">
            <img src={Logo} alt="" className="h-[210px] w-auto mx-auto" />
            <img src={Loader} alt="" className="h-[60px] w-auto mx-auto" />
          </div>
        </div>
      ) : (
        <Tokenomics1 />
      )}
    </>
  );
}

export default Tokenomics;
