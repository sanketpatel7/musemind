import React from "react";
// import sliImg from "../HomePage/images/Slider.png";
// import Pro1 from "../HomePage/images/profile1.png";
// import SlideLogo from "../HomePage/images/slide logo.png";
import "../HomePage/Home.css";



const Section7slider = (props) => {


  return (
    <>
      
        <div className="slider-main-con">
          {/* <img src={sliImg} className="slider-img" /> */}
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
           {props.p}
          </p>

          <div className="sli-sec-2">
            <div className="slider-pro-flex">
              <img src={props.img} />

              <div className="profile-sec-2">
                <p style={{ fontWeight: "bold" }}>sanket</p>
                <p>{props.post}</p>
              </div>
            </div>

            <div className="slider-logo">
              {/* <img src={SlideLogo} /> */}
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Section7slider;
