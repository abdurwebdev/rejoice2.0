import React from 'react'

const CompanyPeople = () => {
    const data=[
        {
            image:'https://images.prismic.io/rejouice/ZiLSyfPdc1huKpi-_Maskgroup-2.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/ZiLSyPPdc1huKpi9_Maskgroup-3.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/ZiLSxvPdc1huKpi7_Maskgroup-5.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/1aeb5a27-cf18-420a-b376-8b70fc17feac_3a63e0ee-f553-4559-9cef-96ad57e10e86_ClementB%2520copie.jpg+%281%29.jpg?auto=compress%2Cformat&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/ZiLSxPPdc1huKpi4_Maskgroup-7.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/ZiLSwvPdc1huKpi2_Maskgroup-9.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        }
    ]
    const datatwo=[
        {
            image:'https://images.prismic.io/rejouice/ZiLSyPPdc1huKpi9_Maskgroup-3.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/ZiLSxfPdc1huKpi6_Maskgroup-6.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/ZiLSwfPdc1huKpi1_Maskgroup-10.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/ZiLSwfPdc1huKpi1_Maskgroup-10.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        }
    ]
    const datathree=[
        {
            image:'https://images.prismic.io/rejouice/74a3462a-5833-4882-b357-91abde70338d_5786eff9-1b6f-4708-8a71-1499a77177eb_IMG_2859%2520copie.jpg+%281%29.jpg?auto=compress%2Cformat&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/ZiLSx_Pdc1huKpi8_Maskgroup-4.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/ZiLSxfPdc1huKpi6_Maskgroup-6.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/0d118676-9442-420c-9ba5-dc8f9d35fff8_1d9afee1-405e-4eb0-b671-8a0c35db3fed_PJ%2520copie.jpg+%281%29.jpg?auto=compress%2Cformat&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/ZiLSw_Pdc1huKpi3_Maskgroup-8.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
    ]
     const datafour=[
        {
            image:'https://images.prismic.io/rejouice/ZiLSyPPdc1huKpi9_Maskgroup-3.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/ZiLSxfPdc1huKpi6_Maskgroup-6.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/ZiLSwfPdc1huKpi1_Maskgroup-10.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
        {
            image:'https://images.prismic.io/rejouice/ZiLSwfPdc1huKpi1_Maskgroup-10.jpg?auto=format%2Ccompress&fm=webp&width=2048'
        },
     ]
  return (
    <div className='flex items-center justify-between lg:px-5'>
        <div className='flex flex-col sm:hidden px-3 gap-y-3 '>
          {data.map((item,index)=>{
            return(
                <img key={index} src={item.image} alt="" />
            )
          })}
        </div>
        <div className='hidden sm:flex sm:flex-col sm:gap-y-3 sm:ml-3 sm:mr-3'>
        {datatwo.map((item,index)=>{
            return(
                <img key={index} src={item.image} alt="" />
            )
          })}
        </div>
        <div className='flex flex-col gap-y-3'>
        {datathree.map((item,index)=>{
            return(
                <img key={index} src={item.image} alt="" />
            )
          })}
        </div>
        <div className='hidden sm:flex sm:flex-col sm:gap-y-3 sm:ml-3'>
        {datafour.map((item,index)=>{
            return(
                <img key={index} src={item.image} alt="" />
            )
          })}
        </div>
    </div>
  )
}

export default CompanyPeople