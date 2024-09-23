import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet-async'
import WorkHero from './WorkHero'
import WorkGrid from './WorkGrid'
import Footer from '../components/Footer'
import { gsap } from 'gsap';
const Work = () => {
  useEffect(() => {
    const tl=gsap.timeline();
    tl.to('#master',{
      opacity:1,
      duration:1
    })
    tl.to('#master',{
      y:'-100%'
    })
  
    return () => {
      
    }
  }, [])
  
  return (
    <div>
      <Helmet>
        <title>Work | REJOUICE®</title>
      </Helmet>
      <div id="master" className='w-full h-screen opacity-100 bg-black absolute top-0 left-0'></div>
      <Navbar/>
      <WorkHero/>
      <WorkGrid/>
      <Footer/>
    </div>
  )
}

export default Work