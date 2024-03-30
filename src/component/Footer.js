import React , {useEffect}from "react";
import SemButton from "./SemButton";

import AOS from "aos";
import "aos/dist/aos.css";

import { FaDownload, FaStar } from "react-icons/fa";

const Footer = () => {

  useEffect(() => {
    AOS.init({ duration: 800 });
  });

  return (
    <div>
      <footer className="bg-black p-3 text-white text-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="p-4">
              <ul className="text-left leading-8">
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" >Home</a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" >Work</a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" >Contect</a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" >Career</a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" >Blog</a>
                </li>
              </ul>
            </div>
            <div className="p-4 shadow">
              <ul className="text-left leading-8">
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" data-aos-duration="100">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" data-aos-duration="200">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" data-aos-duration="300">
                    Mobile App
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" data-aos-duration="400">
                    SaaS Design
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" data-aos-duration="500">
                    MVP Build
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" data-aos-duration="600">
                    Webflow Development
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" data-aos-duration="700">
                    Digital Design
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" data-aos-duration="800">
                    Design System Service
                  </a>
                </li>
              </ul>
            </div>
            <div className=" p-4 shadow">
              <ul className="text-left leading-8">
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" data-aos-duration="100">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" data-aos-duration="200">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" data-aos-duration="300">
                    Dribbble
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" data-aos-duration="400">Behance</a>
                </li>
                <li>
                  <a className="hover:text-green-300 cursor-pointer" data-aos="fade-up" data-aos-duration="500">Clutch</a>
                </li>
              </ul>
            </div>
            <div className=" p-4 shadow">
              <div className="flex m-3 leading-3">
                <h3 data-aos="fade-up">EMAIL:</h3>
                <p data-aos="fade-up">hello@musemind.agency</p>
              </div>
              {/* <SemButton btnName='contact'/> */}
              <SemButton btnName="contect" data-aos="fade-up"/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        <div className="flex items-center gap-5">
          <button className="bg-yellow-400 p-3 rounded-full">
            <FaDownload size={32} color="black" />
          </button>
          <div>
            <h1 className=" font-semibold text-3xl text-left">Company Deck</h1>
            <p className="text-left">PDF, 3 MB</p>
          </div>
        </div>
        <div>
        © 2023 Your App Name. All rights reserved.
        </div>
        <div className="flex items-center gap-5">
              <img src={'https://assets-global.website-files.com/643f7373d3f6653157617339/6461a8ae72fa898a55ea6595_Component%2010.svg'} alt="" className="bg-white p-2 rounded-full"/>
             <div>
             <div className="flex gap-2 items-center">
                <h1 className="font-semibold text-2xl">5.0</h1>
                <div className="flex gap-1">
                  <FaStar size={20} color="yellow"/>
                  <FaStar size={20} color="yellow"/>
                  <FaStar size={20} color="yellow"/>
                  <FaStar size={20} color="yellow"/>
                  <FaStar size={20} color="yellow"/>
                </div>
              </div>
              <p>Based on 22 Clutch reviews</p>
             </div>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
