import React from 'react'

const ContactImages = () => {
  return (
    <div className='px-10 flex flex-col sm:flex sm:flex-row gap-5'>
        <div className='flex flex-col gap-y-5'>
            <img src="https://images.prismic.io/rejouice/d6c0d668-1d56-441a-9edb-d9cfe95bfa43_Mask+group+%2875%29.jpg?auto=compress%2Cformat&fm=webp" alt="" />
            <h2 className='text-[3vw] font-bold'>San Diego</h2>
            <div>
                <h2 className='text-[1.7vw] leading-[1.7vw]'>4375 30th Street <br />
California, 92104 <br />
USA</h2>
            </div>
        </div>
        <div className='flex flex-col gap-y-5'>
            <img src="https://images.prismic.io/rejouice/f59a43d5-ddc5-43aa-8eec-627097529d0f_contact-2.jpg?auto=compress%2Cformat&fm=webp" alt="" />
            <h2 className='text-[3vw] font-bold'>Paris</h2>
            <div>
                <h2 className='text-[1.7vw] leading-[1.7vw]'>26 rue du Chalet <br />
75010, Paris <br />
France</h2>
            </div>
        </div>
    </div>
  )
}

export default ContactImages