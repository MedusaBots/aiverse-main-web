import React from "react";
import logo from "../images/logo.png";

function Vision() {
  return (
    <div>
      <h1 className="text-center md:text-left font-headingbold font-bold text-6xl text-white">
        Our Vision
      </h1>
      <div className="flex md:flex-row mx-auto flex-col-reverse w-[100%] md:w-[100%] py-6">
        <div className="w-[100%] md:w-[50%] my-auto">
          <div className="rounded-3xl border-2 border-[#B5B5B5] max-w-[90%] p-6 text-[#E9E9E9] font-mont text-[12px] leading-[18px] mx-auto">
            We wish to create a platform where the users can get the access to
            various ai based applications helping over all development and
            growth in their professional life and free up their burden, time and
            resources. It can help startups to scale, give better satisfaction
            to customers, automate repetitive tasks and improve the quality of
            work. At an individual level, these services can help its users to
            overcome their boredom, relieve stress and perform creative tasks in
            their free time
          </div>
        </div>
        <div className="w-[100%] mb-8 mx-auto md:mb-0 md:w-[50%]">
          <img
            src={logo}
            alt="logo"
            className="w-[100%] bg-[linear-gradient(200.55deg, #163845 -4.6%, #1C3851 48.38%, #162642 102.49%)]"
          />
        </div>
      </div>
    </div>
  );
}

export default Vision;
