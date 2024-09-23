import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import { gsap } from 'gsap';
import CompanyPhotos from './CompanyPhotos';
import CompanySlogan from './CompanySlogan';
import CompanyAwards from './CompanyAwards';
import CompanyAwardsDetail from './CompanyAwardsDetail';
import CompanyPeople from './CompanyPeople';
import CompanyJobs from './CompanyJobs';
import CompanyInteractive from './CompanyInteractive';
import CompanyJoin from './CompanyJoin';
import Footer from '../components/Footer'
const Company = () => {
  
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
        <title>About | REJOUICE®</title>
      </Helmet>
      <div id="master" className='w-full h-screen opacity-100 bg-black absolute top-0 left-0'></div>
      <Navbar/>
      <CompanyPhotos/>
      <CompanySlogan/>
      <CompanyAwards/>
      <CompanyAwardsDetail/>
      <CompanyPeople/>
      <CompanyJobs/>
      <CompanyInteractive/>
      <CompanyJoin/>
      <Footer/>
    </div>
  )
}

export default Company;