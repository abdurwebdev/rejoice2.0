import React from 'react'
import Marquee from "react-fast-marquee";
const Review = () => {
  return (
    <>
    <div className='w-[96%] border-b-2 mb-5 text-black border-black ml-6 py-5'>
      <h1 className='text-[6vw]'>Get in touch.</h1>
    </div>
    <Marquee pauseOnHover>
      <div className='flex items-end  flex-row ml-5 gap-x-5'>
      <img className='w-96 h-full' src="https://images.prismic.io/rejouice/d3289122-3f25-43f3-b140-11a342a484d7_Mask+group+%2838%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
      <img className='w-96 h-full' src="https://images.prismic.io/rejouice/8059f4af-8ba3-4e5f-a14b-ba5ed760963f_Mask+group+%2839%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
      <img className='w-96 h-full' src="https://images.prismic.io/rejouice/57ac2830-96e7-4174-a104-b384126bf98c_fec955552eb681ff6c273774515e6c2e.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
      <img className='w-96 h-full' src="https://images.prismic.io/rejouice/a19d8427-5008-4dce-afa4-5d66118a0463_d7a851a9d8e2eb36cf93ffe4a6fa3701.jpeg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
      <img className='w-96 h-full' src="https://images.prismic.io/rejouice/36450525-8a76-4a44-b6d4-59c00ad0b50d_RJ-Home-OuraRing-x2.png?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
      </div>
    </Marquee>
    </>
)
}

export default Review