import React, { useState, useEffect } from 'react';
import se2Video from "../component/HomePage/images/main_showreel.mp4";

const VideoPlayer = () => {
    const [mainWidth, setMainWidth] = useState(100);
    const [mainHeight, setMainHeight] = useState(100);
    const [showText, setShowText] = useState(false);

//     var main = document.querySelector(".sec-2-vid");
//     var curs = document.querySelector("#arr");
//     var video = document.querySelector('video')
   
  
//   const [Scroll , SetScroll] = useState("100%")
  
//   video.addEventListener('scroll' , function(){
//     for(Seroll>= 100% Scroll--)
//   })
  
  
  
//     main.addEventListener("mousemove", function (dets) {
//       curs.style.top = dets.y + "px";
//       curs.style.left = dets.x + "px";
//       console.log(dets.y)
//     });

    useEffect(() => {
        const width = mainWidth;
        const height = mainHeight;
        const handleScroll = () => {
            const scrolledPosition = window.scrollY;

            function getSectionStartPosition(sectionId) {
                console.log(sectionId)
                var section = document.getElementById(sectionId);
                return section.offsetTop;
            }
            const startPosition = getSectionStartPosition("videosection");
            if (startPosition < scrolledPosition) {
                if(width > 20){
                    setMainWidth(width - 2);
                    setMainHeight(height - 2);
                    setShowText(true)
                }
            } else {
                if(width <= 100){
                    setMainWidth(width + 2);
                    setMainHeight(height + 2);
                    setShowText(false);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [mainWidth, mainHeight]);

    return (
        <>
            {showText && (<h1 className='text-center font-bold text-7xl'>Elevating UX,  Empowering</h1>)}
            <div className="flex justify-center items-center h-screen overflow-hidden" id='videosection'>
                
                {showText && (<h1 className='font-bold text-7xl'>Businesses,</h1>)}
                
                <video className='duration-1000' autoPlay loop muted style={{ width: `${mainWidth}%`, height: `${mainHeight}vh`, transition: 'width 0.9s, height 0.9s', justifyContent: "center", alignItems: "center", display: "flex" }}>
                    <source src={se2Video} type="video/mp4" />
                    {/* <div id="arr"></div> */}
                </video>
                {showText && (<h1 className='font-bold text-7xl'>Redefining</h1>)}
            </div>
            {showText && (<h1 className='text-center font-bold text-7xl top-0'>Experiences...</h1>)}
        </>
    );
};

export default VideoPlayer;