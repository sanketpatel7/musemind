import React, { useEffect } from "react";
// import Img1 from '../HomePage/images/img 1.webp'
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Section4Card = (props) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  });

  function isEven(number) {
      return number % 2 === 0;
  }
  // alert(props.key)

  return (
    <>
    {/* <div>
      <div className="card" >
      
          <div className="top hover:duration-1000">
            <img src={props.ImgSrc} className="hover:scale-110 duration-500 relative" />
            
            <div className="btn-container">
            <button className="bg-yellow-300 px-4 py-2 absolute rounded-full text-3xl" >+</button>
            </div>
            </div>
            
          </div>
          <div className="card-text">
            <h2 className="text-2xl font-semibold">{props.Heading}</h2>
            <h3 className="text-1xl">{props.Para}</h3>
          </div>
        </div> */}
      
        <div className="flex flex-col gap-3 duration-1000" data-aos={ isEven(props.Key) ? "fade-down-right" : "fade-down-left" }>
          <div className=" flex items-center gap-2 justify-center overflow-hidden w-full" id="sec-4-img">
            <img src={props.ImgSrc} className="object-cover size-full duration-500 hover:scale-110 relative " />
            <button className="py-3 px-5 bg-yellow-400 absolute rounded-full text-3xl " id="sec-4-btn" >+</button>
          </div>
          <div className="gap-y-3 flex flex-col">
            <h1 className="text-white font-semibold text-2xl" >{props.Heading}</h1>
            <h1 className="text-yellow-50">{props.Para}</h1>
          </div>  
        </div>

    </>
  );
};

export default Section4Card;
