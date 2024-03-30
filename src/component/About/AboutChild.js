import React, { useState, useEffect } from "react";
import Img1 from "../About/About Img/img1.webp";
import SemButton from "../SemButton";
// import AutoScrollSlider from './AutoScrollSlider';
import "../button.css";
import Sli1 from "./About Img/Sli1.jpg";
import Sli2 from "./About Img/Sli2.webp";
import Sli3 from "./About Img/Sli3.webp";
import Sli4 from "./About Img/Sli4.webp";
import Sli5 from "./About Img/Sli5.webp";
import Sli6 from "./About Img/Sli6.webp";
import Img2 from "./About Img/img2.png";
import Img3 from "./About Img/Img3.webp";
import Icon1 from "./About Img/icon1.svg";
import Icon2 from "./About Img/icon2.svg";
import Icon3 from "./About Img/icon3.svg";
import Icon4 from "./About Img/icon4.svg";
import Bgimg from "./About Img/bgimg.png";
import Cimg1 from "./About Img/img1.svg";

import Grid1 from "./About Img/grid1.png";
import Grid2 from "./About Img/grid2.png";
import Grid3 from "./About Img/grid3.png";
import Grid4 from "./About Img/grid4.png";
import Grid5 from "./About Img/grid5.png";
import Grid6 from "./About Img/grid6.png";
import Grid7 from "./About Img/grid7.png";
import Grid8 from "./About Img/grid8.png";
import Grid9 from "./About Img/grid9.png";
import Grid10 from "./About Img/grid10.png";

import Slider from "react-slick";
import VarticalTabs from "./VarticalTabs";
import AboutSlider from "./AboutSlider";
import AcardData from "./AcardData";
import Sec11Data from "./Sec11Data";

const AboutChild = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* section 1 */}
      <div className="">
        <div className=" py-40 px-16">
          <p className="text-black text-8xl font-semibold">Fueling Minds</p>
          <p className="text-8xl font-semibold text-gray-400 ">
            <span className="text-black">—</span>Inspiring Designs..
          </p>
        </div>
        <div>
          <img src={Img1} className="" alt="simple img" />
        </div>
        <div className="bg-black flex flex-col gap-28 px-40 py-40">
          <div className="gap-2">
            <p className="text-white text-6xl font-semibold">
              Musemind Design Agency
            </p>
            <p className="text-gray-400 text-6xl font-semibold">
              Igniting Excellence Through
            </p>
            <p className="text-gray-400 text-6xl font-semibold">
              Dedication & Innovation
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-gray-400 text-2xl">
              At Musemind, our journey is fired by passion—our core spark. The
              secret to our innovation and success? It's the fusion of
              relentless dedication, a heart that beats for design, and a drive
              to innovate!
            </p>
            <p className="text-gray-400 text-2xl">
              Also, in our design agency we treasure integrity and transparency.
              Our commitment to ethical practices has been a driving force.
              Clients rely on us for clear communication, honest collaboration,
              and reliable results. This foundation of trust has been key to our
              journey, fostering relationships and fueling our enduring success.
            </p>
            <div className="flex justify-start">
              <SemButton btnName="Discover our works" />
            </div>
          </div>
        </div>
        <div className="bg-black overflow-hidden">
          <Slider {...settings}>
            <div class="item p-6 border-lime-300 ">
              <img src={Sli1} className="border-cyan-400" />
            </div>
            <div class="item p-6">
              <img src={Sli2} className="border-cyan-400" />
            </div>
            <div class="item p-6">
              <img src={Sli3} className="border-cyan-400" />
            </div>
            <div class="item p-6">
              <img src={Sli4} className="" />
            </div>
            <div class="item p-6">
              <img src={Sli5} className="" />
            </div>
            <div class="item p-6">
              <img src={Sli6} className="border-cyan-400" />
            </div>
          </Slider>
        </div>
        <img src={Img2} className="" />
      </div>
      {/* section 2 */}
      <div className="mx-10 my-4">
        <h1 className="text-8xl font-bold">Empowering</h1>
        <h1 className="text-8xl font-bold text-center text-gray-400">
          Success Stories.
        </h1>
      </div>
      {/* section 3 */}
      <div className="flex gap-10">
        <div className=" w-full">
          <img src={Img3} className="w-100" />
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl">
              Over the years, we've propelled numerous businesses to thrive,
              maintaining robust partnerships through our collaborative
              approach.
            </p>
            <p className="text-2xl">
              We are proud to help businesses grow and succeed in different
              industries. From startups to established enterprises, our tailored
              solutions have helped them conquer challenges, reach milestones,
              and actualize their visions.
            </p>
            <hr className="font-bold " />
            <div className="flex  items-center ">
              <div className=" p-10">
                <p className="text-4xl font-bold">250+</p>
                <p>Businesses Thrived</p>
              </div>
              <p className="text-1xl p-8">
                We helped more than 250 business to reach to
                <br /> their business goals with our innovative solutions.
              </p>
            </div>
          </div>
          <hr />
          <div className="flex  items-center ">
            <div className=" p-10">
              <p className="text-4xl font-bold">$1B+</p>
              <p>Accumulated over $1B</p>
            </div>
            <p className="text-1xl p-8">
              Over the time, working from Large to small business we have
              accumulated over $1B.
            </p>
          </div>
          <hr />
        </div>
      </div>
      {/* section 4 */}
      <VarticalTabs />
      {/* section 5 */}
      <div className="flex justify-around items-center py-32">
        <div>
          <p className="text-8xl font-extrabold">How</p>
          <p className="text-8xl font-extrabold text-gray-400 px-40">We Work</p>
        </div>
        <p className="text-2xl font-semibold">
          Our process is simple. We start with your
          <br />
          needs, create engaging experiences, <br />
          research, experiment with ideas, and use <br />
          your feedback to guide us.
        </p>
      </div>
      {/* section 6 */}
      <div className="flex  py-10 px-8  ">
        <div className="border-2 flex flex-col justify-center items-center w-full rounded-full p-8">
          <img src={Icon1} />
          <p>Project kickoff</p>
        </div>
        <div className="border-2 flex flex-col justify-center items-center w-full rounded-full p-8">
          <img src={Icon2} />
          <p>Project kickoff</p>
        </div>
        <div className="border-2 flex flex-col justify-center items-center w-full rounded-full p-8">
          <img src={Icon3} />
          <p>Project kickoff</p>
        </div>
        <div className="border-2 flex flex-col justify-center items-center w-full rounded-full p-8">
          <img src={Icon4} />
          <p>Project kickoff</p>
        </div>
      </div>
      {/* section 7 */}
      <div className=" bg-gray-300 py-10 ">
        {/* <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('./About Img/bgimg.png')" }}> */}
        <div className="flex justify-evenly items-center">
          <div>
            <p className="text-9xl font-bold">Clients</p>
            <p className="text-9xl font-bold text-gray-400 text-center">
              Feedback
            </p>
          </div>
          <div>
            <SemButton btnName="See All feedback" />
          </div>
        </div>
        <AboutSlider />
      </div>
      {/* section 8 */}
      <img src={Img2} className="" />
      {/* section 9 */}
      <div>
        <p className="text-black text-7xl leading-tight font-bold mx-10">
          What{" "}
          <span className="text-gray-400">
            Makes Us <br />
            different{" "}
          </span>
          from Others
        </p>
      </div>
      {/* section 10 */}
      <div className=" grid lg:grid-cols-3 gap-10 md:col-span-2 sm:grid-cols-1 px-10 my-40">
        {AcardData.map((a) => {
          return (
            <div>
              <img src={a.svg} />
              <br />
              <p className="text-xl font-bold">{a.p}</p>
              <br />
              <p>{a.p2}</p>
            </div>
          );
        })}
      </div>
      {/* section 11 */}
      <div className="flex flex-col bg-gray-300 py-36  ">
        <p className="text-9xl font-extrabold mx-24 ">Archived</p>
        <div className="flex justify-center items-center gap-10 mx-20 ">
          {Sec11Data.map((props) => {
            return (
              <div className="Section-5-card ">
                <div className="main-5-card hover:text-white fill-white gap-20">
                  <div className="main-5-sec-1">
                    <img src={props.img} />
                  </div>
                  <div className="main-5-sec-2">
                    <h3 className="text-2xl font-semibold">{props.headinf}</h3>

                    <p className="font-bold ">{props.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-9xl font-extrabold mx-auto">Awards</p>
      </div>

      <div className="bg-black py-20 flex flex-col gap-28">
        <div className="px-10">
          <p className="text-6xl font-bold text-white">Our Most</p>
          <p className="text-6xl font-bold text-gray-300">Valuable Clients</p>
        </div>
        <div className="grid grid-cols-5 gap-10 px-16">
          <img src={Grid1} className="m-10 " />
          <img src={Grid2} className="m-10 " />
          <img src={Grid3} className="m-10 " />
          <img src={Grid4} className="m-10 " />
          <img src={Grid5} className="m-10 " />
          <img src={Grid6} className="m-10 " />
          <img src={Grid7} className="m-10 " />
          <img src={Grid8} className="m-10 " />
          <img src={Grid9} className="m-10 " />
          <img src={Grid10} className="m-10 " />
        </div>
      </div>
    </>
  );
};

export default AboutChild;
