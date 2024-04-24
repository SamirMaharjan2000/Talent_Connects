import React from 'react'
import about_us from '../../assets/image/about_us.jpg'

const Aboutus = () => {
  return (
    <>
    <div className=" mt-[140px] h-[852px] md:mt-10 lg:mb-[-280px]">
        <div className="container flex  flex-wrap items-center  justify-center mx-auto mt-10 md:px-12 md:flex-row md:pl-[-10px] gap-16 ">
        <div className="">
            <h3 className='pb-3 font-bold text-xl'>About Us</h3>
                <img src={about_us} alt="" className="max-w-xl text-[2.0rem] leading-none text-white font-extrabold font-sans text-center lg:text-5xl lg:text-left lg:leading-tight mb-5 "/>
            </div>
            <div className=" container  lg:mb-0 lg:w-1/2 flex flex-col items-center">
                <p className='flex justify-center items-center text-justify leading-7 t'>In the year 2019, Talent Connects Company embarked on a mission to revolutionize HR approaches and redefine recruitment processes. With a focus on aligning candidates with the vision and mission of organizations, Talent Connects has evolved into a leading HR company with over 5 years of experience. Our unique selling proposition (USP) lies in our state-of-the-art 'cloud-based HR software.' This all-in-one solution empowers organizations to streamline their HR operations efficiently, all from a single integrated system.</p>
                <div className="flex justify-center mt-14 lg:justify-start">
                <button type='button' className='text-white bg-[#3FBDF1] font-medium rounded-lg px-5 py-3 text-center hover:bg-blue-100'>More Info</button>
                </div>
            </div>
        </div>
    </div>

    
    </>
  )
}

export default Aboutus
