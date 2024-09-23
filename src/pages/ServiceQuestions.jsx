import React from 'react'

const ServiceQuestions = () => {
    const data=[
        {
            headingone:'(00)',
            headingtwo:'What is the contract preparation timeframe for your Venture model engagement?',
            hedingthree:'(A). Same timeframe as a traditional service agreement. If you are ready to go we can sign everything within a week.'
        },
        {
            headingone:'(00)',
            headingtwo:'What is the contract preparation timeframe for your Venture model engagement?',
            hedingthree:'(A). Same timeframe as a traditional service agreement. If you are ready to go we can sign everything within a week.'
        },
        {
            headingone:'(00)',
            headingtwo:'What is the contract preparation timeframe for your Venture model engagement?',
            hedingthree:'(A). Same timeframe as a traditional service agreement. If you are ready to go we can sign everything within a week.'
        },
        {
            headingone:'(00)',
            headingtwo:'What is the contract preparation timeframe for your Venture model engagement?',
            hedingthree:'(A). Same timeframe as a traditional service agreement. If you are ready to go we can sign everything within a week.'
        }
    ]
  return (
    <div className='flex w-full min-h-screen px-10 mt-20 flex-col lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-x-64 gap-y-5'>
    <div>
        <h2 className='text-[7vw] sm:text-[2vw]'>Questions <br />We've got answers</h2>
    </div>
    <div className='flex items-start justify-start flex-col gap-y-10  text-[4vw] sm:text-[2vw] py-5   border-b-2 border-black w-full '>
        {data.map((item,index)=>{
            return(
                <div key={index} className='flex items-start justify-start border-t-2 border-black gap-x-20'>
            <div>
            <h2>{item.headingone}</h2>
        </div>
        <div className='flex flex-col gap-y-10'>
            <h2>{item.headingtwo}</h2>
            <h2>{item.hedingthree}</h2>
        </div>
        </div>
            )
        })}
    </div>
</div>
  )
}

export default ServiceQuestions