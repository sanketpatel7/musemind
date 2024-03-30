import React from "react";
import Slider from "react-slick";

import Slime from "./About Img/sliimg.svg";
import Profile1 from "./About Img/profile1.png";
import Clutc from "./About Img/Clutch.png";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SliderData from "./SliderData";

const CustomPrevArrow = (props) => (
  <button {...props} className="custom-prev-arrow">
    <FaArrowLeft />
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="custom-next-arrow">
    <FaArrowRight />
  </button>
);

const AboutSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <>
      <Slider {...settings} className=" w-4/5  m-auto relative">
        {SliderData.map((val) => {
          return(
            <div className="">
            <div className=" p-10 gap-12 flex flex-col">
              <div className="flex items-start gap-10">
                <img src={Slime} />
                <p className="font-semibold text-2xl">
                 {val.p}
                </p>
              </div>
              <div className=" mx-20">
                <div className="flex gap-6 items-center  ">
                  <img src={val.proimg} alt="" className="" />
                  <div>
                    <p className="font-semibold text-xl">{val.proname}</p>
                    <p>{val.propost}</p>
                  </div>
                  <img src={Clutc} className="w-32" />
                </div>
              </div>
            </div>
          </div>
          )
        })}
      </Slider>
    </>
  );
};

export default AboutSlider;
