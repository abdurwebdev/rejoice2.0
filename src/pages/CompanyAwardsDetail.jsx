import React from 'react'
import { Link } from 'react-router-dom'

const CompanyAwardsDetail = () => {
    const data=[
        {
            headingone:'25x',
            headingtwo:'Awwwards'
        },
        {
            headingone:'25x',
            headingtwo:'Awwwards'
        },
        {
            headingone:'25x',
            headingtwo:'Awwwards'
        },
        {
            headingone:'25x',
            headingtwo:'Awwwards'
        },
        {
            headingone:'25x',
            headingtwo:'Awwwards'
        },
    ]
  return (
    <div  className='w-full px-10 mt-52 flex flex-col'>
        <div className='flex items-end justify-end text-[5vw] flex-col leading-[5vw] mr-20'>
            <h2>Awards for</h2>
            <h2>digital innovation</h2>
        </div>
        <div className='flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-center'>
            {data.map((item,index)=>{
                return(
                    <div key={index} className='flex flex-col sm:w-[20vw] gap-y-5  py-3'>
                    <div className='border-b-2 border-black'>
                    <h2 className='text-[6vw]'>{item.headingone}</h2>
                    </div>
                    <div>{item.headingtwo}</div>
                </div>
                )
            })}
        </div>
        <div className='flex items-start justify-start'>
            <Link to='/'>+Many More</Link>
        </div>
        <div className='flex items-end mt-10 w-full lg:w-[50vw]  justify-end flex-col gap-y-10'>
            <h2 className='text-[5vw] tracking-tighter leading-[5vw]'>The numbers are good. The people are even better.</h2>
            <h2 className='text-[3vw] tracking-tighter leading-[3vw]'>We've curated the best possible team so they can design your best possible brand.</h2>
        </div>
    </div>
  )
}

export default CompanyAwardsDetail