import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PageTwo = () => {
  useEffect(() => {
    // GSAP animation with ScrollTrigger
    gsap.fromTo('#pagetwo h3', {
      opacity: 0,
      duration: 1,
      y:100
    },{
        opacity:1,
        scrub:1,
        y:0,
         scrollTrigger:{
            trigger:'#pagetwo',
            start:'top 20%'
         }},
   );
   gsap.fromTo('#elem2 h2', {
    opacity: 0,
    duration: 1,
    y:50
  },{
      opacity:1,
      scrub:1,
      y:0,
       scrollTrigger:{
          trigger:'#elem2',
          start:'top 20%'
       }},
 );
  }, []);

  
  return (
    <>
      <div className='flex w-full  items-center text-[3vw] py-4 border-b border-black justify-between'>
        <h2>Tomorrow's Brand Today</h2>
        <h2>Paris/San Diego</h2>
      </div>
      <div id='pagetwo' className='w-full mt-5'>
        <h3 className='text-[4vw] tracking-tighter leading-[5vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          We are a venture firm and digital agency. Our mission is to transform founders' visions into remarkable brands. Choose traditional compensation or an equity offset through our Venture Model — your vision, your decision.
        </h3>
      </div>
      <div id="elem2" className='w-full text-center mt-40 '>
        <h6 className='lg:text-[1.5vw] text-[3vw] flex items-center justify-center'>Agency & Venture <span className='text-[1vw] px-3 py-2 rounded-full bg-black text-white'>Models</span></h6>
        <h2 className='lg:text-[3vw]  text-[9vw] lg:leading-[3vw] leading-[9vw]'>Explore Our Services</h2>
        <h2 className='lg:text-[3vw]  text-[9vw] lg:leading-[3vw] leading-[9vw]'>and engagement models</h2>
      </div>
    </>
  );
};

export default PageTwo;
