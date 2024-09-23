import React from 'react'

const ContactMain = () => {
  return (
    <div className='px-10 w-full h-96 flex items-start sm:flex-row sm:mt-56  gap-y-5 mt-28 flex-col'>
        <div className='sm:w-[60vw]'>
            <h2 className='text-[5vw] leading-[5vw] sm:text-[3vw] sm:leading-[3vw]'>We craft new ideas and defining experiences to make our clients succeed. Serving global brands, founders, startups, and VCs. </h2>
        </div>
        <div className='flex flex-col  text-[3vw] sm:text-[1.2vw] gap-y-5'>
            <div>
                <h2>Inquires.</h2>
                <a href="mailto:biz@rejouice.com">
                biz@rejouice.com
                </a>
            </div>
            <div>
                <h2>Inquires.</h2>
                <a href="mailto:biz@rejouice.com">
                biz@rejouice.com
                </a>
            </div>
            <div>
                <h2>Inquires.</h2>
                <a href="mailto:biz@rejouice.com">
                biz@rejouice.com
                </a>
            </div>
        </div>
    </div>
  )
}

export default ContactMain