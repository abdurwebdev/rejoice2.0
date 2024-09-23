import React from 'react'

const ServiceSixth = () => {
    const data=[
        {
            headingone:'(01)',
            headingtwo:'Fleur(Proof)',
            headingthree:'“Rejouice helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way.”'
        },
        {
            headingone:'(01)',
            headingtwo:'Fleur(Proof)',
            headingthree:'“Rejouice helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way.”'
        },
        {
            headingone:'(01)',
            headingtwo:'Fleur(Proof)',
            headingthree:'“Rejouice helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way.”'
        },
        {
            headingone:'(01)',
            headingtwo:'Fleur(Proof)',
            headingthree:'“Rejouice helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way.”'
        },
    ]
  return (
    <div className='w-full mt-10 px-5'>
        {data.map((item,index)=>{
            return(
                <div key={index} className='flex flex-col mb-24 lg:items-start lg:justify-between lg:flex-row text-4xl gap-y-5 '>
                <div className='flex items-start gap-x-48 justify-between'>
                    <h2>{item.headingone}</h2>
                    <h2>{item.headingtwo}</h2>
                </div>
                <div className='lg:w-[60%]'>
                    <h2>{item.headingthree}</h2>
                </div>
                </div>
            )
        })}
       
        
    </div>
  )
}

export default ServiceSixth