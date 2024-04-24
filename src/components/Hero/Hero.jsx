import React from 'react'
import hero_icon from "../../assets/image/hero.svg"

const Hero = () => {
  return (
    <div className="pt-[95px] bg-[#3FBDF1]  h-[852px] mt-[-20px]">
        <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row md:pl-[-10px]">
            <div className="mb-14 lg:mb-0 lg:w-1/2">
                <h1 className="max-w-xl text-[2.0rem] leading-none text-white font-extrabold font-sans text-center lg:text-5xl lg:text-left lg:leading-tight mb-5 ">
                    Talent Connects<br/> Global Internship<br/> Programme
                </h1>
                <div className="flex justify-center mt-14 lg:justify-start">
                <button type='button' className='text-[#3FBDF1] bg-white font-medium rounded-lg px-5 py-3 text-center hover:bg-blue-100 '>Apply Now</button>
                </div>
            </div>
            <div className="">
                <img src={hero_icon} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Hero
