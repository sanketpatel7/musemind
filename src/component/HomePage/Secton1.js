import React, { useState , useEffect} from "react";
import "./Home.css";
import { FaStar } from "react-icons/fa";
import Clutch from "../HomePage/images/Clutch.png";
// import BtnText from "./images/Circle Button PNG.png";
import Bgvideo from '../HomePage/images/production_id_4068404 (2160p).mp4'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Secton1 = () => {

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <div class="content ">
      <div className='main ' >
      <video src={Bgvideo} autoPlay loop muted />
      </div>
        <div className="main-box">
          <h1 className="section-1-h1" data-aos="fade-down">
            <p style={{ color: "black" }} className="font-bold">
              Digital Product - <span style={{ color: "white" }}>UX</span>
            </p>
            <p className="font-bold">Design Agency</p>
          </h1>

          <div className="child-box border-red-600" data-aos='fade-up'>
            <div className="c-class-1" >
              <div className="top">
                <p>REVIEWED ON</p>
                <p className=" flex">
                  <FaStar color="red" size={20} />
                  <FaStar color="red" size={20} />
                  <FaStar color="red" size={20} />
                  <FaStar color="red" size={20} />
                  <FaStar color="red" size={20} />
                </p>
              </div>

              <div className="bottom">
                <img src={Clutch} className="clutch" />
                <p>REVIEWED ON</p>
              </div>
            </div>

            <div className="c-class-2">
              <p>
                Musemind is a global UX Design and Web <br />
                Design Agency. Helping Brands redefine <br></br>experiences and
                empower business growth.
              </p>
            </div>

            <div className="C-Class-3">
              <button>
                {/* <img src={BtnText} className="circle-btn-text" /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secton1;
