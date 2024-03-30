import React , {useEffect}from "react";
import Section5Card from "./Section5Card";
import Section5CardDetails from "./Section5CardDetails";
import "../HomePage/Home.css";
import BgVid from "../HomePage/images/animated.mov";
import AOS from "aos";
import "aos/dist/aos.css";

const Section5 = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <>
      <div className="section-5 overflow-hidden">
        <h1 data-aos="fade-right" data-aos-duration="1000" className="font-bold">We are</h1>
        
        <div className="section-5-flex">
          {Section5CardDetails.map((val, ind) => {
            return <Section5Card Key={ind} p={val.p} h3={val.h3} h1={val.h1} />;
          })}
        </div>

        <h1 data-aos="fade-left" className="font-bold sm:text-1xl 
        " data-aos-duration="1000">Musemind</h1>
      </div>

      <div className="section-5-bg-vid">
        <video src={BgVid} autoPlay loop muted />
      </div>
    </>
  );
};

export default Section5;
