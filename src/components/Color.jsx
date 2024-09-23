import React from 'react'

const Color = () => {
  return (
    <div className='flex items-center relative w-full h-screen justify-center'>
        <svg className='absolute z-[99] w-96' viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="49" stroke="#fff" stroke-width="0.25" fill="none" className="o:0.3 $$2$$ $$3$$ $$4$$ (.in-view):tween:all,2.8s,easeOutSlow dasharray:308 dashoffset:616 (.in-view):dashoffset:431.20000000000005"></circle>
            <circle cx="50" cy="50" r="49" stroke="#fff" stroke-width="0.25" fill="none" className="$$5$$ $$6$$ $$7$$ (.in-view):tween:all,2.8s,easeOutSlow dasharray:308 dashoffset:308 (.in-view):dashoffset:123.2"></circle>
        </svg>
        <svg className='absolute top-3 h-[150vh] z-[999] w-96 ' viewBox="0 0 100 100">
            <circle cx="50" cy="1" r="1" fill="#fff">
                <animateMotion
                    path="M 0 -49 A 49 49 0 1 1 0 49 A 49 49 0 1 1 0 -49"
                    dur="5s"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
        <video src="https://rejouice.com/assets/videos/RJ-BALL-BLUE-ORANGE-scaled.webm" className='absolute' autoPlay loop muted></video>
        <div className='absolute text-center'>
            <h1 className='text-3xl'>2 Seats </h1>
            <h1>Available for 2024</h1>
        </div>
    </div>
  )
}

export default Color