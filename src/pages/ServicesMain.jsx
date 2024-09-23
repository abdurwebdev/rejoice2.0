import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
const ServicesMain = () => {
    const capRef = useRef();
    const starRef = useRef();

    
   
  return (
    <div className='flex w-full min-h-screen px-10 flex-col lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-x-64 gap-y-5'>
        <div  ref={capRef}>
            <h2 className='text-[7vw] sm:text-[2vw]'>Capibilities</h2>
        </div>
        <div ref={starRef} className='flex items-start justify-start flex-col gap-y-10  text-[4vw] sm:text-[2vw] py-5  border-t-2 border-b-2 border-black w-full '>
            
            <div className='flex items-start justify-start gap-x-20'>
                <div>
                <h2>Strategy</h2>
            </div>
            <div>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
            </div>
            </div>
            <div className='flex items-start border-t-2 border-black w-full justify-start gap-x-20'>
                <div>
                <h2>Strategy</h2>
            </div>
            <div>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
            </div>
            </div>
            <div className='flex items-start border-t-2 border-black w-full justify-start gap-x-20'>
                <div>
                <h2>Strategy</h2>
            </div>
            <div>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
                <h2>Workshops</h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesMain