import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const ServiceThird = () => {
    useEffect(() => {
      gsap.to('.elem',{
        height:'150px',
        scrollTrigger:{
            trigger:'.elem',
            start:'top 20%',
            end:'top 17%',
            scrub:true
        }
      })
    
      return () => {
        
      }
    }, [])
    
  return (
    <div className='w-full flex mt-10 items-start justify-center flex-wrap min-h-screen gap-2'>
        <div className='w-[45vw] elem h-[50vh] p-5  bg-black text-white flex flex-col items-start justify-between'>
            <div className='flex text-[5vw] lg:text-[2vw] items-start w-full justify-between'>
                <h2>Agency Model</h2>
                <button>Down</button>
            </div>
            <div>
                <h2 className='text-[3vw] lg:text-[2vw] text-slate-100'>Cash Compensation.</h2>
            </div>
        </div>
        <div className='w-[45vw] elem h-[50vh] bg-black text-white p-5 flex flex-col items-start justify-between'>
        <div className='flex text-[5vw] lg:text-[2vw] items-start w-full justify-between '>
                <h2>Venture Model</h2>
                <button>Down</button>
            </div>
            <div>
                <h2 className='text-[3vw] lg:text-[2vw] text-slate-100'>Hybrib:Less Cash,Some Equity.</h2>
            </div>
        </div>
        <div className='flex items-center justify-center text-[8vw] leading-[8vw] text-center'>
          <h1>Elevate Your Brand. Outpace The Competition.</h1>
        </div>
        <div className='flex flex-col w-full px-10'>
          <div className='w-full border-b-2 py-3 border-black flex items-center justify-between'>
            <h2>Agency</h2>
            <h2>Contact
            </h2>
          </div>
          <div className='text-[6vw] tracking-tighter leading-[7vw] lg:text-[4vw] lg:leading-[4vw]'> 
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We transform tech startups into industry leaders. We do this by working hand-in-hand with founders. Crafting their unique market presence isn't just our expertise, it's our passion. We link business objectives to customers needs.</h2>
          </div>
        </div>
        <div className='w-full h-[150vh] flex px-10  items-center flex-col justify-center  bg-[#0E0E0E] text-white'>
          <h1 className='text-[15vw] text-center leading-[15vw] sm:text-[8vw] sm:leading-[8vw]'>Investing in Market-Defining Startups.</h1>
          <div className='flex flex-col w-full px-10'>
          <div className='w-full border-b-2 py-3 border-white flex items-center justify-between'>
            <h2>Agency</h2>
            <h2>Contact
            </h2>
          </div>
          <div className='text-[6vw] tracking-tighter leading-[7vw] lg:text-[4vw] lg:leading-[4vw]'> 
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We transform tech startups into industry leaders. We do this by working hand-in-hand with founders. Crafting their unique market presence isn't just our expertise, it's our passion. We link business objectives to customers needs.</h2>
          </div>
        </div>
        </div>
        <div className='w-full h-[100vh] mb-5 -mt-10'>
          <img className='w-full h-full object-cover' src="https://images.prismic.io/rejouice/d9c46e31-0e85-4f69-a56e-0fd79e630be2_Mask+group+%2832%29.jpg?auto=compress%2Cformat&fm=webp" alt="" />
        </div>
    </div>
  )
}

export default ServiceThird