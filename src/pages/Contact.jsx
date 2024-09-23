import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { gsap } from 'gsap';
import Navbar from '../components/Navbar';
import ContactMain from './ContactMain';
import ContactImages from './ContactImages';
import ContactVideo from './ContactVideo';
import Footer from '../components/Footer'
const Contact = () => {
  useEffect(() => {
    const tl=gsap.timeline();
    tl.to('#master',{
      opacity:1,
      duration:1,
      delay:0.5
    })
    tl.to('#master',{
      y:'-100%',
      duration:1,
      delay:1
    })
  
    return () => {
      
    }
  }, [])
  return (
    <div>
      <Helmet>
        <title>Contact | REJOUICE®</title>
      </Helmet>
      <div id="master" className='w-full h-screen opacity-100 bg-black absolute top-0 left-0'></div>
      <Navbar/>
      <ContactMain/>
      <ContactImages/>
      <ContactVideo/>
      <Footer/>
    </div>
  )
}

export default Contact