import React from "react";

import "../HomePage/Home.css";
import Section7slider from "./Section7slider";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section7Data from "./Saction7Data";


const ClientFeedbackSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              
            }
          }
        ]
      };
  return (
    <>
      {/* <div className="section-7 " > */}
      <div className=" flex justify-center flex-col bg-slate-500 py-10" >
        {/* <p className="section-7-p">200+ Trusted Clients</p> */}
        {/* <p className=" font-semibold text-white text-center rotate-12  bg-green-600 max-w-12   "  >200+ Trusted Clients</p> */}
        <h1 className="font-semibold text-5xl text-center text-white">Clients Feedback</h1>
        <div className="sec-7-slider-flex">
          <Slider {...settings}>
            {Section7Data.map((val) => {
                return(
                    <Section7slider p={val.p} img = {val.img} username = {val.userName} post = {val.post} />
                )
            })}
          </Slider>

          
        </div>
      </div>
    </>
  );
};

export default ClientFeedbackSlider;
