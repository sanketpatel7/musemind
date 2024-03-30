import React, { useEffect } from "react";
import "../index.css";
import Header from "../component/Header";
import Secton1 from "../component/HomePage/Secton1";
import Section2 from "../component/HomePage/Section2";
import Section3 from "../component/HomePage/Section3";
import Section4Card from "../component/HomePage/Section4Card";
import Section8 from "../component/HomePage/Section8";

import Section4CardDetails from "../component/HomePage/Section4CardDetails";
import Section5 from "../component/HomePage/Section5";
import SemButton from "../component/SemButton";
import Section6 from "../component/HomePage/Section6";
import ClientFeedbackSlider from "../component/HomePage/ClientFeedbackSlider";
import Section9 from "../component/HomePage/Section9";
import Section10 from "../component/HomePage/Section10";
import Section11 from "../component/HomePage/Section11";
import Section12 from "../component/HomePage/Section12";
import Footer from "../component/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import VideoPlayer from "../component/VideoPlayer";
import Test from "../component/Test";
// import SemButton from '../component/SemButton'

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <>
      {/* <Header /> */}
      <Test />
      <Secton1 />
      {/* <Section2 /> */}
      <VideoPlayer />
      <Section3 />
      
      <div className=" bg-black py-32 gap-3">
        <div className="flex flex-wrap gap-20 justify-center overflow-hidden">
          {Section4CardDetails.map((val, ind) => { 
            return(          
              <Section4Card
                Key={ind}
                ImgSrc={val.ImgSrc}
                Heading={val.Heading}
                Para={val.Para}
              /> 
            );
          })}
        </div>
        <div className="view-all-cases-btn p-4">
          <SemButton btnName="View all cases" />
        </div>
      </div>

      <Section5 />

      <Section6 />

      <ClientFeedbackSlider />

      {/* <Section8 /> */}

      {/* <Test /> */}

      <Section9 />

      <Section10 />

      <Section11 />

      <Section12 />

      <Footer />
    </>
  );
};

export default Home;
