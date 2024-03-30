import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Musemind.png";
// import './header.css';
import "./test.css";
import { FaBars, FaArrowDown } from "react-icons/fa";
import SemButton from "./SemButton";

const Test = () => {
  const [click, setClick] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  console.log(click)

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="flex bg-slate-300 justify-around items-center w-full font-bold py-3 relative" id="hedr-main">
        <div>
          <ul>
            <li>
                <Link to='/' ><img src={Logo} className="w-52" /></Link>
            </li>
          </ul>
        </div>

        <div>
        {/* id={click ?  "test-flex active " : "flex items-center gap-5"} */}
          {/* <ul className='flex gap-5 items-center flex-nav-menu' > */}
          <ul className={!click ? 'flex gap-5 items-center flex-nav-menu' : 'flex-nav-menu active' } >
            <li>
              <div className=" ">
                <button
                  className="  flex items-center gap-2 focus:outline-none"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Service
                  <FaArrowDown />
                </button>

                {isDropdownVisible && (
                  <div
                    className="absolute bg-black  w-full   flex items-center justify-center duration-1000"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    id="hedr-drop"
                  >
                    <div className="flex flex-col justify-center w-full " >
                    <a href="#" className="text-white text-left">
                      UI & UX Design
                    </a>
                    <a href="#" className="text-white text-left">
                      Web Design
                    </a>
                    <a href="#" className="text-white text-left">
                      Branding
                    </a>
                    <a href="#" className="text-white text-left">
                      Webflow
                    </a>
                    <a href="#" className="text-white text-left">
                      MVP Development
                    </a>
                    <a href="#" className="text-white text-left">
                      SaaS Design
                    </a>
                    <a href="#" className="text-white text-left">
                      Mobile App
                    </a>
                    <a href="#" className="text-white text-left">
                      Design System
                    </a>
                    </div>
                   
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link to="/about" className="">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/work" className="">
                Work
              </Link>
            </li>
            <li>
              <Link to="/ourprocess" className="">
                Our Process
              </Link>
            </li>
            <li>
              <Link to="/career" className="">
                Career
              </Link>
            </li>
            <li>
              <Link to="/blog" className="">
                Blog
              </Link>
            </li>
            <li>
            <div className="nav-sem-btn">
            <Link to='/contect'><SemButton btnName="contect us" /></Link>
        </div>
            </li>
          </ul>
        </div>

        <div className="nav-btn">
          <Link to='/contect'><SemButton btnName="contect us" /></Link>
        </div>
        
        <div className="menu-icon text-white" onClick={handleClick}>
        {click ?  <FaBars size={20} color="white"/> :   "Close" }
      </div>
      </div>

      
    </>
  );
};

export default Test;
