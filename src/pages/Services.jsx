import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import ServicesMain from './ServicesMain'
import ServicesSecond from './ServicesSecond'
import ServiceThird from './ServiceThird'
import ServiceFourt from './ServiceFourt'
import ServiceFifth from './ServiceFifth'
import ServiceSixth from './ServiceSixth'
import ServiceVideo from './ServiceVideo'
import ServiceQuestions from './ServiceQuestions'
import ServiceSeat from './ServiceSeat'
import Footer from '../components/Footer'
import { gsap } from 'gsap';
const Services = () => {

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
  const nbRef = useRef();
  useEffect(() => {
    gsap.fromTo(nbRef.current,{opacity:0,y:40},{opacity:1,y:0,delay:2})
  
    return () => {
      
    }
  }, [])
  
  return (
    <>
    <Helmet>
      <title>Services | REJOUICE®</title>
    </Helmet>
    <div id="master" className='w-full h-screen opacity-100 bg-black absolute top-0 left-0'></div>
    <Navbar/>
    <div className='w-full h-screen flex px-10 lg:text-[4vw] lg:leading-[4vw] text-[7vw] sm:text-[5vw] sm:leading-[5vw] items-center tracking-tighter leading-[7vw] text-black justify-center'>
      <h2 ref={nbRef}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REJOUICE <sup>®</sup> is a digital brand accelerator based in San Diego & Paris. We harness the power of narrative, design, and technology to translate ambitious visions into powerful brands. We offer two engagement models. </h2>
    </div>
    <ServicesMain/>
    <ServicesSecond/>
    <ServiceThird/>
    <ServiceFourt/>
    <ServiceFifth/>
    <ServiceSixth/>
    <ServiceVideo/>
    <ServiceQuestions/>
    <ServiceSeat/>
    <Footer/>
    </>
  )
}

export default Services