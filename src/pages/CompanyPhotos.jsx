import React, { useEffect } from 'react'

const CompanyPhotos = () => {
   
    
  return (
    <div className='flex items-center sm:items-start mt-28 px-10 gap-5 justify-between'>
        <div id='imageone' className='flex flex-col w-[50vw] sm:w-[25vw] gap-y-3' data-scroll data-scroll-speed="2">
            <img src="https://images.prismic.io/rejouice/96e61489-365f-4966-aa49-77fc64c47df0_Mask+group+%282%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img className='h-20 object-center object-cover' src="https://images.prismic.io/rejouice/e06aaf42-70c3-4d31-8316-e4457c5f3c87_Mask+group+%287%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img  src="https://images.prismic.io/rejouice/cdf8af9a-8d0e-4c8c-b757-663d53f8998d_Mask+group+%285%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img className='mt-10' src="https://images.prismic.io/rejouice/427a858a-3580-4a6e-bd8c-aa7c2315858a_Rectangle+120.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img className='h-20 object-cover' src="https://images.prismic.io/rejouice/fbd64d96-7cba-41ac-abfa-48972e2cd695_Mask+group+%286%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img src="https://images.prismic.io/rejouice/776fc09f-cb5a-45e8-adf3-a6593c7b1932_Group+3799.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
        </div>
        <div id='imagetwo' className='hidden sm:flex sm:flex-col sm:items-start sm:gap-y-3 sm:w-[25vw]'>
            <img src="https://images.prismic.io/rejouice/f8c7debf-e849-475b-afad-9180fda661c9_Rectangle+8.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img src="https://images.prismic.io/rejouice/3911b5e7-9310-4837-b944-b1fda1c51cf8_Mask+group.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img src="https://images.prismic.io/rejouice/264ccb08-a766-4dff-b668-d7c01c9dbc8b_4.png?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img src="https://images.prismic.io/rejouice/e6a69a42-fec4-4f95-8a8d-63a2cf812c84_Mask+group+%289%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
        </div>
        <div id='imagethree' className='flex flex-col w-[50vw] sm:w-[25vw] gap-y-3'>
            <img className='h-20 object-cover' src="https://images.prismic.io/rejouice/d5c41ca4-3ede-43b5-b73e-6a3a6ffaa5cf_Mask+group+%284%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img className='mt-10' src="https://images.prismic.io/rejouice/c24a425f-4bf8-4e3e-9c4f-911993f82107_Mask+group+%283%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img className='h-20 object-cover' src="https://images.prismic.io/rejouice/32166661-1817-40c4-9914-4a7ea997a08e_Mask+group+%288%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img src="https://images.prismic.io/rejouice/cb59d54a-763f-449f-a98b-cb2a9aa7dbf8_Rectangle+115.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img className='mt-10' src="https://images.prismic.io/rejouice/a1984e34-62c4-4299-888a-d075b56c09bf_Rectangle+121.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img src="https://images.prismic.io/rejouice/bb37dc4c-49b2-4305-9b6c-46b2480530d6_Group+3798.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
        </div>
        <div id='imagefour' className='hidden sm:flex sm:flex-col sm:gap-y-3 sm:w-[25vw]'>
            <img src="https://images.prismic.io/rejouice/d5c41ca4-3ede-43b5-b73e-6a3a6ffaa5cf_Mask+group+%284%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img src="https://images.prismic.io/rejouice/cdf8af9a-8d0e-4c8c-b757-663d53f8998d_Mask+group+%285%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img src="https://images.prismic.io/rejouice/cb59d54a-763f-449f-a98b-cb2a9aa7dbf8_Rectangle+115.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
            <img src="https://images.prismic.io/rejouice/776fc09f-cb5a-45e8-adf3-a6593c7b1932_Group+3799.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
        </div>
    </div>
  )
}

export default CompanyPhotos