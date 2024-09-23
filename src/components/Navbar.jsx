import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const showMenu = () =>
    {
       gsap.to('#menu',{
        y:0
       })
    }
    const closeMenu = () =>{
      gsap.to('#menu',{
        y:'-100%'
      })
    }
  
  return (
    <>
    <div id="menu" className='w-full  text-black translate-y-[-100%]  bg-white p-10 absolute z-50 top-0'>
      <div className='flex flex-col gap-y-4 lg:flex-row lg:items-start lg:justify-between'>
      <div className='absolute right-5 text-2xl'>
        <button onClick={closeMenu}><h2>Close</h2></button>
      </div>
      <div className='flex flex-col'>
        <h1>rejoice</h1>
        <video className='w-96 h-60 object-cover rounded-lg' autoPlay loop muted src="https://prismic-io.s3.amazonaws.com/rejouice/3c8eec5e-c857-4fd3-9add-a9e6035a160c_RJ-2.0-Video+background+5_1+%281%29.mp4"></video>
        <div className='flex items-center w-96 justify-between'>
          <div>
            <h2>Play Reel</h2>
          </div>
          <div>
            <h2>—01:18</h2>
          </div>
        </div>
      </div>
      <div id='home' className='mr-48 flex flex-col'>
        <Link to='/' className='text-[4vw] leading-[4vw]'>Home</Link>
        <Link to='/work' className='text-[4vw] leading-[4vw]'>Work</Link>
        <Link to='/services' className='text-[4vw] leading-[4vw]'>Services & Models</Link>
        <Link to='/company' className='text-[4vw] leading-[4vw]'>About</Link>
        <Link to='/contact' className='text-[4vw] leading-[4vw]'>Contact</Link>
        <button className='px-4 py-3 border-black w-32 border-2 mt-5 text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in'>Take a seat</button>
      </div>
      </div>
      <div className='w-full mt-10 py-3 flex items-center justify-between border-t border-black'>
        <h2>Tomorrow's Brands, Today.™</h2>
        <div className='flex gap-x-2'>
            <h2>X</h2>
            <h2>Instagram</h2>
            <h2>LinkedIn</h2>
        </div>
      </div>
    </div>
    
    <nav className='fixed w-full px-8 py-8 top-0 flex items-center justify-between '>
        <div>
            <h2 className='font-normal text-xl'>The Venture Agency.</h2>
        </div>
        <div>
            <button onClick={showMenu}><h2 className='font-normal text-xl'>Menu</h2></button>
        </div>
    </nav>
    </>
  )
}

export default Navbar