import React, { useState , useEffect } from "react";
// import { FiMenu } from "react-icons/fi";


import { Link } from "react-router-dom";
import Logo from "../images/Musemind.png";
import './Header.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import SemButton from "./SemButton";
import { FaBars, FaTimes } from 'react-icons/fa'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [click , setClick] = useState(false); 

  const handleClick = () => setClick(!click);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {

    
    AOS.init({
      // Initialize AOS
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-out', // Easing function for the animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []); 


  return (
    <>
    {/* <div className="top-0 left-0 shadow-sm w-full sticky z-50 duration-1000">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7 bg-black"> */}
           <div className="bg-slate-500 flex justify-around items-center p-2 sticky z-50 duration-1000 w-ful">
        <div className="section-1">
          <Link to="/" className="header-logo">
            <img src={Logo} className="logo" />
          </Link>
        </div>

        <div className="section-2">
          <ul className="manu-name">
            <li>
              <Link to="/about" className="menu-text">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/work" className="menu-text">
                Work
              </Link>
            </li>

            <li>
              <Link to="/ourprocess" className="menu-text">
                Our Process
              </Link>
            </li>

            <li>
              <Link to="/career" className="menu-text">
                Career
              </Link>
            </li>

            <li>
              <Link to="/blog" className="menu-text">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="section-3">
          
          

          <ul>
            <li>
              <Link className="contect-us-text" to="/contect">
                <SemButton btnName = 'Contect us' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
        {/* </div>
    </div>
       */}
       
    </>
  );
};

export default Header;
