import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const CompanyAwards = () => {
  const imageRef = useRef();
  const parentRef = useRef();
  useEffect(() => {
    gsap.fromTo(imageRef.current,{
      y:350,
      duration:1
    },{y:0,
      scrollTrigger:{
        trigger:parentRef.current,
        start:'top 10%',
        srub:true,
      }
    })
  
    return () => {
      
    }
  }, [])
  
  return (
    <div ref={parentRef} className='px-10 w-full relative min-h-screen  flex items-start justify-start'>
        <h2 className='text-[15vw]'>60+</h2>
        <img ref={imageRef} className=' lg:absolute lg:left-36 lg:top-44 w-[450px] h-[650px] lg:object-cover  sm:h-[100vh] object-cover' src="https://www.rejouice.com/assets/images/Awwwards_Trophy_white_1.webp" alt="" />
    </div>
  )
}

export default CompanyAwards