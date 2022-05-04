import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Roadmap() {
  return (
    <div className="bg-[#011627] text-white">
      <h1 className=" text-white m-auto w-[100vw] font-headingbold font-bold lg:text-[12vh] lg:leading-[12vh] leading-[5vh] text-[5vh] pt-16 pb-20 pl-20">
        Roadmap
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{
            background: "#00D578",
            color: "#fff",
            borderRadius: "5px",
            transform: "rotate(45deg)",
          }}
          // contentArrowStyle={{ borderRight: "7px solid  #00D578" }}
          icon={
            <>
              <div
                style={{
                  transform: "rotate(-45deg)",
                }}
                className="text-black text-center 
                text-xl font-semibold
                leading-[40px] h-[40px] w-[40px]
                roadmap:leading-[58px] roadmap:h-[58px] roadmap:w-[58px]"
                // the roadmap resizes at 1170px
              >
                <p style={{}} className="">
                  Q1
                </p>
              </div>
            </>
          }
        >
          <h3 className="text-3xl font-bold">2022</h3>
          <p className="">
            <li>Development of two AIs</li>
            <li>Get backers and raise funds</li>
            <li>Launch of NFTs</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{
            background: "#00D578",
            color: "#fff",
            borderRadius: "5px",
            transform: "rotate(45deg)",
          }}
          // contentArrowStyle={{ borderRight: "7px solid  #00D578" }}
          icon={
            <>
              <div
                style={{
                  transform: "rotate(-45deg)",
                }}
                className="text-black text-center 
                text-xl font-semibold
                leading-[40px] h-[40px] w-[40px]
                roadmap:leading-[58px] roadmap:h-[58px] roadmap:w-[58px]"
                // the roadmap resizes at 1170px
              >
                <p style={{}} className="">
                  Q2
                </p>
              </div>
            </>
          }
        >
          <h3 className="text-3xl font-bold">2022</h3>
          <li>Launch of AIV coins</li>
          <li>Release of chat bot ai</li>
          <li>
            Development of decentralized pool of dataset & prediction models
          </li>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{
            background: "#00D578",
            color: "#fff",
            borderRadius: "5px",
            transform: "rotate(45deg)",
          }}
          // contentArrowStyle={{ borderRight: "7px solid  #00D578" }}
          icon={
            <>
              <div
                style={{
                  transform: "rotate(-45deg)",
                }}
                className="text-black text-center 
                text-xl font-semibold
                leading-[40px] h-[40px] w-[40px]
                roadmap:leading-[58px] roadmap:h-[58px] roadmap:w-[58px]"
                // the roadmap resizes at 1170px
              >
                <p style={{}} className="">
                  Q3
                </p>
              </div>
            </>
          }
        >
          <h3 className="text-3xl font-bold">2022</h3>
          <li>Development Of Spam detector ai</li>
          <li>Development of Data analytic ai</li>
          <li>Launch of data analytic and spam detector ai </li>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{
            background: "#00D578",
            color: "#fff",
            borderRadius: "5px",
            transform: "rotate(45deg)",
          }}
          // contentArrowStyle={{ borderRight: "7px solid  #00D578" }}
          icon={
            <>
              <div
                style={{
                  transform: "rotate(-45deg)",
                }}
                className="text-black text-center 
                text-xl font-semibold
                leading-[40px] h-[40px] w-[40px]
                roadmap:leading-[58px] roadmap:h-[58px] roadmap:w-[58px]"
                // the roadmap resizes at 1170px
              >
                <p style={{}} className="">
                  Q4
                </p>
              </div>
            </>
          }
        >
          <h3 className="text-3xl font-bold">2022</h3>
          <li>Start development of photo editor and ar ai </li>
          <li>Release of photo editor and ar ai</li>
          <li>Start development of anti virus and cyber security ai</li>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{
            background: "#00D578",
            color: "#fff",
            borderRadius: "5px",
            transform: "rotate(45deg)",
          }}
          // contentArrowStyle={{ borderRight: "7px solid  #00D578" }}
          icon={
            <>
              <div
                style={{
                  transform: "rotate(-45deg)",
                }}
                className="text-black text-center 
                text-xl font-semibold
                leading-[40px] h-[40px] w-[40px]
                roadmap:leading-[58px] roadmap:h-[58px] roadmap:w-[58px]"
                // the roadmap resizes at 1170px
              >
                <p style={{}} className="">
                  Q1
                </p>
              </div>
            </>
          }
        >
          <h3 className="text-3xl font-bold">2023</h3>
          <li>Release of antivirus and cyber security ai </li>
          <li>Start of development of game ai </li>
          <li>Launch of game ai </li>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Roadmap;
