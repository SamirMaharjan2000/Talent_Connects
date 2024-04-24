import React from 'react'
import Logo from '../../assets/image/footer_logo.png'
import { FaFacebook , FaInstagram, FaTwitter, FaLocationDot }  from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
    <div className='bg-[#3FBDF1] mt-[-280px] h-[700px] flex flex-col justify-center items-center'>
    <div className=" text-white p-4 flex justify-evenly items-center gap-[550px]">
      <div className="flex items-center flex-col gap-8 mt-[150px]">
        <img src={Logo} alt="Logo" className="h-20 w-auto" />
        <div className="container w-[300px] h-[200px]">
        <p  className='font-bold text-justify text-lg'>Talent Connects was established in February 2019 with the vision to bridge the skilled employees with the right jobs.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 flex-col ml-[-300px] gap-8">
        <h1 className='text-white font-semibold'>Connect With Us</h1>
        <div className='flex flex-row  gap-8'>
        <a href="">
        <FaFacebook className="h-6 w-6"/>
        </a>
        <a href="">
          <FaTwitter className="h-6 w-6" />
        </a>
        <a href="">
          <FaInstagram className="h-6 w-6" />
        </a>
        <a href="">
          <FaLocationDot className="h-6 w-6" />
        </a>
        <a href="">
          <IoMdMail className="h-6 w-6" />
        </a>
        </div>
      </div>
    </div>
    <p className='font-bold text-justify text-lg text-white'>@2024 Talent Connects Pvt. Ltd All Rights Reserved</p>
    </div>

    
    </>
  )
}

export default Footer

