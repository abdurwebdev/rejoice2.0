import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
    
    
  return (
    <>
    <footer className='w-full h-full relative px-5 py-5 flex min-h-screen  lg:h-[105vh]   lg:flex-row bg-[#0E0E0E] text-white lg:flex-wrap lg:items-start lg:justify-between   flex-col'>
        <div >
            <h2  className='text-[5vw] lg:text-[2vw]'>Relax. we've got you.</h2>
            <button  className='px-3 py-4 border-2 rounded-full border-white text-white  hover:bg-white hover:text-black transition-all duration-300 ease-in'><h2>Take a seat</h2></button>
        </div>
        <div  className='flex flex-col gap-y-5 mt-5 lg:flex-row'>
                <div>
                    <h2>Home</h2>
                    <h2>Work</h2>
                    <h2>About</h2>
                    <h2>Services & models</h2>
                    <h2>Contact</h2>
                </div>
                <div>
                    <div>
                        <h2>X</h2>
                    </div>
                    <div>
                        <h2>Instagram</h2>
                    </div>
                    <div>
                        <h2>LinkedIn</h2>
                    </div>
                </div>
        </div>
        <div className='flex text-[#93918B] lg:mt-0 lg:mb-96 lg:w-full lg:flex-row lg:items-start lg:justify-between bg-[#0E0E0E] flex-col'>
    <div>
            <h2>Sandiego-California</h2>
            <h2>Paris-France</h2>
        </div>
        <div className='flex flex-col  mt-5 lg:gap-x-5 lg:flex-row'>
                <div>
                    <h2>biz@rejouice.com</h2>
                </div>
                <div>
                     <h2>©2023 legal</h2>                    
                </div>
                </div>
        </div>
        <div  className='absolute lg:text-[33vw] lg:top-60 lg:bottom-0 bottom-0 text-[32vw] leading-[30vw] lg:leading-[32vw]'>
            <h1>rejoice</h1>
        </div>
    </footer>
    
    </>
  )
}

export default Footer