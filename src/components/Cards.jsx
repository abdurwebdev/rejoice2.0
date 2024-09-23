import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const Cards = () => {
    const data=[
        {
            image:'https://images.prismic.io/rejouice/d8e1fa1f-4f24-41e1-a249-098c62df5aff_Group+46+%281%29.jpg?auto=compress,format',
            video:'https://prismic-io.s3.amazonaws.com/rejouice/87835eca-32b7-4eeb-91fc-4ba0dad1fdec_Website-homepage-Work-01_1.mp4'
        },
        {
            image:'https://images.prismic.io/rejouice/e0350a3d-c390-4d97-af1a-5c86bc822b52_Group+3929.jpg?auto=compress,format',
            video:'https://prismic-io.s3.amazonaws.com/rejouice/3492b027-4212-4103-b2e2-aa702345d784_Website-homepage-Work-02_1.mp4'
        },
        {
            image:'https://images.prismic.io/rejouice/2874f084-ec6c-4a19-b025-a55c1e6db929_Group+3692.jpg?auto=compress,format',
            video:'https://prismic-io.s3.amazonaws.com/rejouice/363f6760-3496-4638-8fc5-3b5d7711087c_Website-homepage-Work-03_1.mp4'
        },

    ]
    useGSAP(() => {
        gsap.from('#head h2', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger:{
                trigger:'#head',
                start:'top 65%'
            }
        });
        gsap.from('#images .elem', {
            opacity: 0,
            duration: 1,
            stagger: 0.4,
            y: 50,
            scrollTrigger: {
                trigger: '#images',
                start: 'top 80%'
            }
        });
        // Clear the animation after it's done
        return () => {
            gsap.set('#head h2', { clearProps: 'all' });
            gsap.set('#images .elem', { clearProps: 'all' });
        };
    });
  return (
    <>
    <div id='head' className='w-full flex items-center text-xl  py-5 justify-between'>
            <h2>Transforming Visions into Brands</h2>
            <h2>See the work</h2>
        </div>
    <div id='images' className='w-full flex flex-col lg:flex-row items-center h-auto gap-5  justify-between '>
        {data.map((item,index)=>{
            return(
        <div key={index}  className='elem relative'>
            <img className='absolute w-full h-full object-cover' src={item.image} alt="" />
            <video src={item.video} autoPlay loop muted></video>
        </div>
            )
        })}
    </div>
    </>
  )
}

export default Cards