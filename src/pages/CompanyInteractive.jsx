import React, { useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const CompanyInteractive = () => {
    useEffect(() => {
        const images = gsap.utils.toArray('div[id^="img"]');

        images.forEach((image, index) => {
            gsap.fromTo(image, {
                y: index * 200, // Initial position based on index
            }, {
                y: 0, // Target position when scrolling reaches that section
                scrollTrigger: {
                    trigger: image,
                    start: "top center", // When the top of the image reaches the center of the viewport
                    end: "+=400", // How long the animation should run while scrolling
                    scrub: true, // Smooth scrubbing effect
                    pin: true, // Pins the image during scrolling
                }
            });
        });

    }, []);
    
  return (
    <div className='w-full min-h-[100vh] relative bg-[#0E0E0E] py-20  text-white px-8 flex flex-col'>
        <div>
            <h2 className='text-[6vw] tracking-tighter leading-[6vw]'>When we guarantee our talents' success, we guarantee our client's success. Together we're unstoppable.</h2>
        </div>
        <div className='flex items-start justify0-between  gap-5 lg:gap-64 mt-10'>
            <div>
                <h2 className='text-[4vw] lg:text-[2vw] lg:leading-[2vw] tracking-tighter leading-[4vw]'>Best Conditions</h2>
            </div>
            <div className='lg:w-[40%]'>
                <h2 className='text-[4vw] tracking-tighter leading-[4vw] lg:text-[2vw] lg:leading-[2vw]'>When we guarantee our talents' success, we guarantee our client's success. Together we're unstoppable.</h2>
            </div>
        </div>
        <div className='hidden sm:flex w-full min-h-screen sm:flex-col py-11 sm:relative sm:items-start sm:justify-between'>
            <div className='sticky top-11' >
                <img className='w-80 h-96 object-cover' src="https://images.prismic.io/rejouice/c3d0bb69-be50-4679-ba6f-33ddf02a34ee_Test.png?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            </div>
            <div className='sticky top-28 absolute left-52 ' >
                <img className='w-80  h-96 object-cover' src="https://images.prismic.io/rejouice/5a440036-def6-4da2-8b0b-8c0c89ac3318_REJOUICE_OFFICE.png?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            </div>
            <div className='sticky top-44 absolute left-96  ' >
                <img className='w-80  h-96 object-cover' src="https://images.prismic.io/rejouice/13398fec-da1b-4ad2-87de-ff86f10eab71_Lol.png?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            </div>
            <div className='sticky top-56 absolute left-[550px]  ' >
                <img className='w-80  h-96 object-cover' src="https://images.prismic.io/rejouice/4fb84cc3-6c00-443b-8eb7-a8b10189aebc_Yallah.png?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            </div>
            <div className='sticky top-72 absolute left-[650px]  ' >
                <img className='w-80  h-96 object-cover' src="https://images.prismic.io/rejouice/35508ea2-8948-42b7-9102-4d8ea1b54703_IMG_3570.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            </div>
            <div className='sticky top-96  left-[750px]  ' >
                <img className='w-80  h-96 object-cover' src="https://images.prismic.io/rejouice/f7798263-96d7-480e-b59f-b861355f8c35_Mask+group+%2863%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            </div>
        </div>
        <div className='relative sm:hidden mt-20 w-full h-screen'>
            <img className='absolute w-60 h-96 object-cover z-0' src="https://images.prismic.io/rejouice/c3d0bb69-be50-4679-ba6f-33ddf02a34ee_Test.png?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img className='absolute z-10 top-20 w-60 h-96 left-32 object-cover' src="https://images.prismic.io/rejouice/4e24070d-ffc8-4bd5-ad9c-c3e8344fce15_Test4.png?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img className='absolute z-10 top-28 w-60 h-96 left-60 object-cover' src="https://images.prismic.io/rejouice/5a440036-def6-4da2-8b0b-8c0c89ac3318_REJOUICE_OFFICE.png?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
        </div>
        <div className='text-white text-[6vw] tracking-tighter leading-[6vw]'>
            <h2>Do we have <br />high standard? <br />You bet!</h2>
        </div>
        <div className='flex flex-col gap-y-5 px-5 sm:px-5 gap-5 mt-10 sm:flex-row sm:items-start sm:justify-center '>
            <img className='w-full h-full object-cover sm:w-[45vw]' src="https://images.prismic.io/rejouice/968a2524-8eea-40d0-836d-bf51854b3ee6_Group+46.jpg?auto=compress%2Cformat&fm=webp" alt="" />
            <img className='w-full h-full object-cover sm:w-[45vw]' src="https://images.prismic.io/rejouice/2607a212-5df9-427e-9035-2eb924b7b875_Group+3691.jpg?auto=compress%2Cformat&fm=webp" alt="" />
        </div>
    </div>
  )
}

export default CompanyInteractive