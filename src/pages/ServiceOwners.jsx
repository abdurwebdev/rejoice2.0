import React from 'react'
import { gsap } from 'gsap';
const ServiceOwners = () => {
    const data=[
        {
            image:'https://images.prismic.io/rejouice/aa6f1b8f-d800-4fba-a9a0-8fbdc8dae100_Mask+group+%2836%29.jpg?auto=compress%2Cformat&fm=webp',
            headingone:'Fleur',
            headingtwo:'Co Founder & CEO Proof'
        },
        {
            image:'https://images.prismic.io/rejouice/83847927-1e7f-404a-a72c-ed04849a1ff9_Mask+group+%2833%29.jpg?auto=compress%2Cformat&fm=webp',
            headingone:'Fleur',
            headingtwo:'Co Founder & CEO Proof'
        },
        {
            image:'https://images.prismic.io/rejouice/9f763a44-1b10-46bc-b4c0-bdaad3ff8c50_Mask+group+%2834%29.jpg?auto=compress%2Cformat&fm=webp',
            headingone:'Fleur',
            headingtwo:'Co Founder & CEO Proof'
        },
        {
            image:'https://images.prismic.io/rejouice/138bfdb2-94b0-432f-a575-4a82c9fb1932_Mask+group+%2835%29.jpg?auto=compress%2Cformat&fm=webp',
            headingone:'Fleur',
            headingtwo:'Co Founder & CEO Proof'
        }
    ]
  return (
    <div className='lg:flex lg:flex-row lg:gap-5 px-10 mt-10 lg:items-center items-center justify-center mb-5 lg:justify-between flex flex-col'>
        {data.map((item,index)=>{
            return(
                <div key={index} className='flex flex-col gap-y-5'>
                <div>
                    <img className='w-96 h-96 object-cover' src={item.image} alt="" />
                </div>
                <div className='flex flex-col'>
                    <h2>{item.headingone}</h2>
                    <h2>{item.headingtwo}</h2>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default ServiceOwners