import React from "react";
import Roadmap from "./Roadmap";
import Slider from "./Slider";
import Vision from "./Vision";

function Fifthslide() {
  return (
    <>
      <div className="md:mx-[18vw] mx-[8vw] w-[84vw] md:w-[64vw] overflow-hidden">
        <Roadmap />
      </div>
      <div className="mx-[5vw]">
        <Slider />
      </div>

      <div className="md:mx-[18vw] mx-[8vw] w-[84vw] md:w-[64vw] overflow-hidden">
        <Vision />
      </div>
    </>
  );
}

export default Fifthslide;
