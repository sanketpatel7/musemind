import React , {useEffect}from 'react'
// import Sec12BGImg from '../HomePage/images/sec-12bgimg.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Section12 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
     
      <div className='flex flex-col bg-black justify-between flex-1 overflow-hidden'>
      <div className='m-20 overflow-hidden'>
      <h1 className='text-left lg:ml-80 text-white text-3xl sm:text-1xl' data-aos="fade-right" data-aos-duration="2000">Have a Cool Project idea?</h1>
      <h1 className='text-center text-white text-7xl font-bold hover:text-yellow-400 cursor-pointer  ' data-aos="fade-left" data-aos-duration="2000">Start by saying Hi..</h1>
      </div>
      </div>
      
    </>
  )
}

export default Section12
