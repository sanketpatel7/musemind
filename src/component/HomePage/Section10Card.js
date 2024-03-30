import React from "react";
// import sec10Img from "../HomePage/images/sec10img1.jpg";
import "../HomePage/Home.css";

const Section10Card = (props) => {
  return (
    <>
      <div className="bg-gray-200 shadow overflow-hidden hover:bg-white duration-500">
        <div className="sec-10-main">
          <img src={props.sec10img} alt="" className="w-full hover:scale-110 duration-500 " />
          <div className="sec-10-btm p-4">
            <div className="sec-10-h1">
              <h1 className="font-bold">{props.sec10h1}</h1>
              <div className="sec-10-p my-8">
                <p>{props.sec10p}</p>
                <h5>{props.sec10h5}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section10Card;
