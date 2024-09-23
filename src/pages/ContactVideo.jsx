import React from 'react'

const ContactVideo = () => {
  return (
    <div className='w-full h-screen relative  z-0'>
        <video className='w-full h-full object-cover' src="https://prismic-io.s3.amazonaws.com/rejouice/f3a2bd44-9449-4c9d-9bd6-e9053818f14a_RJ-Services+%281%29.mp4" autoPlay loop muted></video>
        <div className='w-full h-full  absolute top-0 left-0 '>
            <div className='flex flex-col w-full h-full text-white items-center justify-center gap-y-5'>
                <h2 className='text-[2vw]'>Portfolio ↵</h2>
                <h2 className=' text-[5vw] underline'>See our work</h2>
            </div>
        </div>
    </div>
  )
}

export default ContactVideo