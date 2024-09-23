import React, { useState } from 'react'

const WorkGrid = () => {
    const [viewMode, setViewMode] = useState('grid');
    const handleModeChange =  (mode) =>{
        setViewMode(mode);
    }
    const data=[
        {
            headingone:"Hyperframe",
            headingtwo:"Hyperframe",
            heading:"01",
            image:"https://images.prismic.io/rejouice/0658fa21-75ae-406c-9c73-f5ec51f9100f_Moxion+Power.jpg?auto=compress,format"
        },
        {
            headingone:"Moxion Power",
            headingtwo:"Moxion Power",
            heading:"02",
            image:"https://images.prismic.io/rejouice/53c4e6be-8fd9-4362-9fc3-de00f83592e4_Hyperframe.jpg?auto=compress,format"
        },
        {
            headingone:"Oura Ring",
            headingtwo:"Oura Ring",
            heading:"03",
            image:"https://images.prismic.io/rejouice/1f7d9eac-64e5-41fb-8069-17d12c115531_Oura+Ring.jpg?auto=compress,format"
        },
        {
            headingone:"Gen Cell",
            headingtwo:"Gen Cell",
            heading:"04",
            image:"https://images.prismic.io/rejouice/c946c9f1-4cf6-4d2d-92ff-11dc74cd117d_GenCell.jpg?auto=compress,format"
        },
        {
            headingone:"Proof",
            headingtwo:"Proof",
            heading:"05",
            image:"https://images.prismic.io/rejouice/e05d3b6a-cf68-42fd-a148-91cd108a5fe9_Proof+%282%29.jpg?auto=compress,format"
        },
        {
            headingone:"Rivian",
            headingtwo:"Rivian",
            heading:"06",
            image:"https://images.prismic.io/rejouice/f75f31fd-aec0-4ebc-a077-52c7c739dcae_Rivian.jpg?auto=compress,format"
        },
        {
            headingone:"Tenzr",
            headingtwo:"Tenzr",
            heading:"07",
            image:"https://images.prismic.io/rejouice/41231e86-1f8b-4002-852d-246131b1bdca_Tenzr.jpg?auto=compress,format"
        },
        {
            headingone:"Unspun",
            headingtwo:"Unspun",
            heading:"08",
            image:"https://images.prismic.io/rejouice/08c31a34-c7ea-43ad-b365-e84f68dca589_Unspun.jpg?auto=compress,format"
        },
        {
            headingone:"List Across",
            headingtwo:"List Across",
            heading:"09",
            image:"https://images.prismic.io/rejouice/460fab4d-6e2c-4267-b361-2f232c04af19_ListAcross.jpg?auto=compress,format"
        },
        {
            headingone:"OV Loop",
            headingtwo:"OV Loop",
            heading:"10",
            image:"https://images.prismic.io/rejouice/868b262c-c98c-448a-b671-e981143f52f5_Rectangle+970.jpg?auto=compress,format"
        },
        {
            headingone:"Connect Homes",
            headingtwo:"Connect Homes",
            heading:"11",
            image:"https://images.prismic.io/rejouice/05a72688-e98d-48d7-9830-f4a05505164a_Proof.jpg?auto=compress,format"
        },
        {
            headingone:"Engineered Floors",
            headingtwo:"Engineered Floors",
            heading:"12",
            image:"https://images.prismic.io/rejouice/0cc87b02-bfd7-44cc-bc9f-1e28adad3f7e_Rivian+%281%29.jpg?auto=compress,format"
        },
        {
            headingone:"Pinch",
            headingtwo:"Pinch",
            heading:"13",
            image:"https://images.prismic.io/rejouice/e888af59-6e0d-478f-ad04-8109904ef8ae_Tenzr+%281%29.jpg?auto=compress,format"
        },

  
    ]
  return (
    <>
      <div className='flex items-center gap-x-4 justify-center  w-full sticky top-10 mb-24 z-50 '>
        <button onClick={()=>setViewMode('grid')} className='border-black border-2 rounded-full px-4 py-2 mix-blend-difference font-bold'>Full Size Grid</button>
        <button onClick={()=>setViewMode('dispatch')} className='border-black border-2 rounded-full bg-black text-white px-4 py-2 mix-blend-difference font-bold'>Dispatched Grid</button>
      </div>
      {viewMode==='grid' && <div className='flex flex-col w-full'>
        {data.map((item,index)=>{
            return (
                <div key={index} className={`flex items-center ${index===12 && 'lg:mb-16'}  justify-center flex-col h-72 md:h-[75vh] lg:h-[80vh] xl:h-screen `}>
                <h1 className='text-[12vw] relative z-50 text-white'>{item.headingone}</h1>
                <div className='w-full px-24 flex items-center justify-between'>
                <h1 className='text-white relative z-50'>{item.headingtwo}</h1>
                <h1 className='text-white relative z-50'>{item.heading}</h1>
                </div>
                <img className='absolute' src={item.image} alt="" />
             </div>
            )
        })}
        </div>}
        {viewMode==='dispatch' && 
        <div className='px-10'>
            <div className='flex items-start justify-center gap-x-1'>
                <div className='relative mb-10'>
                    <video className='w-[40vw] object-cover' autoPlay loop muted src="https://prismic-io.s3.amazonaws.com/rejouice/c0dfe4a5-7d2b-4068-bff9-595792b1c586_01.mp4"></video>
                    <div className='w-full absolute z-50 -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
                </div>
                <div className='relative'>
                    <video className='w-[40vw] object-cover' src="https://prismic-io.s3.amazonaws.com/rejouice/07c26132-1636-4ed4-b465-e1e9eeb5103a_02.mp4" autoPlay loop muted></video>
                    <div className='w-full absolute z-50 -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
                </div>
                
            </div>
            <div className='w-full relative mb-10 lg:w-[80vw] lg:ml-24 flex items-center  justify-center'>
                        <video className='lg:w-[80vw]'  src="https://prismic-io.s3.amazonaws.com/rejouice/9eed9f11-3b1b-475c-8057-b08918b9c895_03.mp4" autoPlay loop muted></video>
                        <div className='w-full absolute z-50 -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
            </div>
            <div className='flex relative  mb-10 w-full items-end justify-end'>
                <video className='lg:w-[50vw]' src="https://prismic-io.s3.amazonaws.com/rejouice/8a070d76-45ca-4818-8d07-70ee09550e69_04.mp4" autoPlay loop muted></video>
                <div className=' absolute z-50 w-[50vw] -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
            </div>
            <div className='w-full relative mb-10 lg:w-[80vw] lg:ml-24 flex items-center  justify-center'>
                        <video className='lg:w-[80vw]'  src="https://prismic-io.s3.amazonaws.com/rejouice/4f610a2d-b702-4333-a562-2babcbe1d1ff_05.mp4" autoPlay loop muted></video>
                        <div className='w-full absolute z-50 -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
            </div>
            <div className='flex items-start justify-center gap-x-1'>
            <div className='relative'>
                    <video className='w-[40vw] object-cover' src="https://prismic-io.s3.amazonaws.com/rejouice/d601f7c0-2f89-4f60-8ad5-f6fcb605f41c_06.mp4" autoPlay loop muted></video>
                    <div className='w-full absolute z-50 -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
                </div>
                <div className='relative mb-10'>
                    <video className='w-[40vw] object-cover' autoPlay loop muted src="https://prismic-io.s3.amazonaws.com/rejouice/fe08727a-e5d4-49fd-a069-c7b4128f6da1_07.mp4"></video>
                    <div className='w-full absolute z-50 -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
                </div>    
            </div>
            <div className='w-full relative mb-10 lg:w-[80vw] lg:ml-24 flex items-center  justify-center'>
                        <video className='lg:w-[80vw]'  src="https://prismic-io.s3.amazonaws.com/rejouice/b7c53457-2152-49d0-a3b5-f06838e87bfb_08.mp4" autoPlay loop muted></video>
                        <div className='w-full absolute z-50 -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
            </div>
            <div className='flex relative  mb-10 w-full items-end justify-end'>
                <video className='lg:w-[50vw]' src="https://prismic-io.s3.amazonaws.com/rejouice/e49a8ad7-c6bc-4673-9348-4d45554e964c_09.mp4" autoPlay loop muted></video>
                <div className=' absolute z-50 w-[50vw] -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
            </div>
            <div className='w-full relative mb-10 lg:w-[80vw] lg:ml-24 flex items-center  justify-center'>
                        <video className='lg:w-[80vw]'  src="https://prismic-io.s3.amazonaws.com/rejouice/e3a6fbab-8d4c-4f3c-ba8a-10428fef522f_10.mp4" autoPlay loop muted></video>
                        <div className='w-full absolute z-50 -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
            </div>
            <div className='flex items-start justify-center gap-x-1'>
            <div className='relative'>
                    <video className='w-[40vw] object-cover' src="https://prismic-io.s3.amazonaws.com/rejouice/3e462253-aaf9-41c5-9fba-ecbe948479f0_11.mp4" autoPlay loop muted></video>
                    <div className='w-full absolute z-50 -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
                </div>
                <div className='relative mb-10'>
                    <video className='w-[40vw] object-cover' autoPlay loop muted src="https://prismic-io.s3.amazonaws.com/rejouice/4f65a9c5-4cd4-4ad3-9b62-a939abb3985a_12.mp4"></video>
                    <div className='w-full absolute z-50 -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
                </div>    
            </div>
            <div className='w-full relative mb-10 lg:w-[80vw] lg:ml-24 flex items-center  justify-center'>
                        <video className='lg:w-[80vw]'  src="https://prismic-io.s3.amazonaws.com/rejouice/ebcbd0e2-d8c2-4f7c-8116-cce0c522b0d4_13.mp4" autoPlay loop muted></video>
                        <div className='w-full absolute z-50 -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
            </div>
            <div className='flex relative  mb-10 w-full items-end justify-end'>
                <video className='lg:w-[50vw]' src="https://prismic-io.s3.amazonaws.com/rejouice/9526b423-3b1b-4174-b557-76825c617635_14.mp4" autoPlay loop muted></video>
                <div className=' absolute z-50 w-[50vw] -bottom-10 flex items-center justify-between h-10 '>
                        <h1>Wireframe</h1>
                        <h1>(01)</h1>
                    </div>
            </div>
        </div>
        }
      
    </>
  )
}

export default WorkGrid