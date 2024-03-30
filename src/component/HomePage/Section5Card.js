import React , {useEffect} from "react";
import "../HomePage/Home.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Section5Card = (props) => {
  

  useEffect(() => {
    AOS.init({ duration: 0 });
  });


  let animationType;
  let aniTime;

  if (props.Key < 2) {
    animationType = "slide-left";
    aniTime = '2000'
  } else if (props.Key > 2){
    animationType = "slide-right";
    aniTime = '2000'
  }

  
  
  
  return (
    <>
      <div className="Section-5-card" data-aos={animationType} data-aos-duration={aniTime} id="sec-5-ani">
        <div className="main-5-card">
          <div className="main-5-sec-1">
            <p>{props.p}</p>
            {/* <p>{"props.p"}</p> */}
          </div>
          <div className="main-5-sec-2">
            <h3 className="text-2xl font-semibold">{props.h3}</h3>
            {/* <h3>{"props.h3"}</h3> */}
            <hr />
            <h1 className="font-bold">{props.h1}</h1>
            {/* <h1>{"props.h1"}</h1> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5Card;
