import React, { useEffect, useState } from "react";
import Firstslide from "../components/Firstslide";
import Secondslide from "../components/Secondslide";
import Logo from "../images/logo2.png";
import Loader from "../images/loader.gif";

function Home() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center m-auto align-middle items-center w-[100vw] h-[100vh] bg-[#011627d8]">
          <div className="max-h-[280px] w-[280px]">
            <img src={Logo} alt="" className="h-[210px] w-auto mx-auto" />
            <img src={Loader} alt="" className="h-[60px] w-auto mx-auto" />
          </div>
        </div>
      ) : (
        <>
          <Firstslide />
          <Secondslide />
        </>
      )}
    </div>
  );
}

export default Home;
