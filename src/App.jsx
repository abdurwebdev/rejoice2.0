import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Navbar from './components/Navbar'
import PageTwo from './components/PageTwo';
import Cards from './components/Cards';
import Pagehree from './components/Pagehree';
import Color from './components/Color';
import Pagefive from './components/Pagefive';
import Review from './components/Review';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Work from './pages/Work';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { HelmetProvider } from 'react-helmet-async';
import AboutSecond from './pages/Company';
import Company from './pages/Company';
const App = () => {
  const pageoneRef = useRef();
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,  
      smooth: true,   
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

  
  
    return () => {
      lenis.destroy(); 
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      gsap.to('#cursor',{
        scale:1,
        opacity:1
      })
    };
    const handleMouseLeave = () =>{
      gsap.to('#cursor',{
        opacity:0,
        scale:0
      })
    }
    const handleMouseMove = (e) =>{
      gsap.to('#cursor',{
        x:e.clientX,
        y:e.clientY
      })
    }
    const pageOne = pageoneRef.current;
    if (pageOne) {
      pageOne.addEventListener('mouseenter', handleMouseEnter);
      pageOne.addEventListener('mouseleave',handleMouseLeave);
      pageOne.addEventListener('mousemove',handleMouseMove);
    }
  
    return () => {
      if (pageOne) {
        pageOne.removeEventListener('mouseenter', handleMouseEnter);
        pageOne.removeEventListener('mouseleave',handleMouseLeave);
        pageOne.removeEventListener('mousemove',handleMouseMove);
      }
    }
  }, [])
  useEffect(() => {
    const tl=gsap.timeline();
    tl.fromTo('#loader h2',{
      x:100,
      opacity:0,
      duration:1
    },{
      x:0,
      opacity:1,
      stagger:0.3
    })
    tl.fromTo('#loader h2',{
      x:0,
      opacity:1
    },{
      x:100,
      stagger:-0.3,
      opacity:0
    })
    tl.to('#loader',{
      opacity:0
    })
    tl.to('#loader',{
      display:'none'
    })
  
    return () => {
      
    }
  }, [])
 
  
  
  return (
    <>
    <HelmetProvider>
    <Router>
      <Routes>
        <Route path='/' element={<> <div id="loader" className='w-full h-screen text-[2vw] text-white flex items-center justify-center gap-x-2 bg-black absolute z-50'>
      <h2>Tommorow's</h2>
      <h2>Brands</h2>
      <h2>Today"</h2>
    </div>
    <div id='main' className='text-white'>
      <div id='pageone' ref={pageoneRef}>
        <div id="cursor" className='fixed rounded-full text-white bg-black/100 w-20 h-20 flex items-center justify-center'>
          <h2 className='text-xs'>PLAY REEL</h2>
        </div>
      <video src="https://prismic-io.s3.amazonaws.com/rejouice/658ef98d531ac2845a270509_RJ-2-0-Videobackground_compressed.mp4" autoPlay loop muted className='w-full h-screen object-cover'></video>
      <Navbar/>
      <h1 className='absolute bottom-0 text-[34vw] leading-[30vw]'><span>r</span><span>e</span><span>j</span><span>o</span><span>i</span><span>c</span><span>e</span></h1>
      </div>
      <div id="pagetwo" className='w-full px-5 py-10   h-screen text-black'>
        <PageTwo/>
      </div>
      <div id="pagethree" className='w-full px-5 py-10 mt-28 lg:px-20 min-h-screen  text-black'>
        <Cards/>
      </div>
      <div id="pagefour" className='w-full'>
        <Pagehree/>
      </div>
      <div id="pagefive" className='w-full '>
        <Color/>
      </div>
      <div id="pagesix" className='w-full'>
        <Pagefive/>
      </div>
      <div id="pagenine" className='w-full h-screen'>
        <About/>
      </div>
      <div id="pageseven" className='w-full h-screen'>
        <Review/>
      </div>
      <div id="pageeight" className='w-full h-[105vh] bg-[#0E0E0E] '>
        <Footer/>
      </div>
    </div></>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
    </HelmetProvider>
    </>
  )
}

export default App