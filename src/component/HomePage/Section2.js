import React, { useState, useEffect } from "react";
// import { Element, scroller } from 'react-scroll';

import "../HomePage/Home.css";
// import se2Video from "./images/main_showreel.mp4";

const Section2 = () => {
  var main = document.querySelector(".sec-2-vid");
  var curs = document.querySelector("#arr");
  var video = document.querySelector('video')
 

const [Scroll , SetScroll] = useState("100%")

// video.addEventListener('scroll' , function(){
//   for(Seroll>= 100% Scroll--)
// })



  // main.addEventListener("mousemove", function (dets) {
  //   curs.style.top = dets.y + "px";
  //   curs.style.left = dets.x + "px";
  //   console.log(dets.y)
  // });

  return (
    <>
      <div className="sec-2-vid">
        {/* <video src={se2Video} controls width="100" height="auto" /> */}

        <div id="arr"></div>
      </div>
    </>
  );
};

export default Section2;
