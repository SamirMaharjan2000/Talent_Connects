import React from 'react'
import Accordion from './Accordion'
import benefits from '../../assets/image/benefits2.jpg'

const Apply = () => {
  return (
    <div className='mt-8 lg:flex gap-[250px]'>
        <div className='lg:flex  '> 
        <h1 className=' lg:ml-[300px] font-bold text-xl md:pb-3 justify-center items-center '>How to Apply</h1>
         <div className='lg:ml-[-150px] mt-8'><Accordion/></div>
        </div>
        <img src={benefits} alt="" className=" rounded-lg  mb-5 lg:w-[800px] lg:h-[350px] lg:ml-[-140px] "/>
    </div>
  )
}

export default Apply
