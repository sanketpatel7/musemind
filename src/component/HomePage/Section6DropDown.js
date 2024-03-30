import React, { useState, useEffect } from "react";
import SemButton from "../SemButton";
// import SecCardImg from "../HomePage/images/drop-img-1.png";
import "../HomePage/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Section6DropDown = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    AOS.init({ duration: 400 });
  });

  return (
    <>
      <div
        className="dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // data-aos="zoom-out-up"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="flex dropdown-button ">
          <div className="flex items-center justify-  p-10 w-full">
            <p className="w-full text-center text-2xl ">{props.mainp}</p>

            <h1 className="w-full text-5xl font-semibold">{props.mainh1}</h1>
          </div>
          <div className="sec-6-drop-card-img  p-10 w-30p">
            <img
              src={props.mainimg}
              className="drop-img  hover:scale-125 hover:rotate-45 duration-500 w-full"
            />
          </div>
        </div>
        {isHovered && (
          <div className="dropdown-content flex justify-center items-center">
            <div className=" flex flex-col gap-4 md:w-full sm:w-full px-20">
              {/* <p>01</p> */}
              {/* <p>
                Exceptional UX isn't just design; it's a journey that builds
                trust, forges loyalty, and makes your brand unforgettable and
                this is our commitment to you from our UX design agency.
              </p> */}
              <p className="  w-70p flex justify-center ">{props.hovtext}</p>
              <div className="Drop-btn">
                <SemButton btnName="Learn more" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Section6DropDown;
