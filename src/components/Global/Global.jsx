import React from 'react'
import eligibility from '../../assets/image/eligibility.png';
import internship from '../../assets/image/Internship_benefits800.png';
import Divider from '../Divider/Divider';

const Global = () => {
  return (
        <>
        
        <div className="container flex  flex-wrap items-center  justify-center mx-auto mt-10 md:px-12 md:flex-row md:pl-[-10px] gap-16">
            <div className=" container  lg:mb-0 lg:w-1/2 flex flex-col items-center gap-8">
            <h1 className='pb-3 justify-center items-center font-bold text-xl'>Global Internhip programme</h1>
                <p className='flex justify-center items-center text-justify leading-8'>Are you an enthusiastic individual looking to set up your professional life on a global scale? 
                    The Global Internship Programme by Talent Connects Company is the perfect opportunity for you. To be eligible for this exciting program, you must meet the following criteria:
                    Undergraduate/Masters result awaiting (not more than 6 months from graduation)
                    Passionate about the field of study or interest</p>
                
            </div>
            <img src={eligibility} alt="" className="max-w-xl mb-5 "/>
            <img src={internship} alt="" className="max-w-xl rounded-lg mb-5 lg:h-[350px] w-[400px] lg:ml-[-100px] lg:mr-20" />
            <div className=" container  lg:mb-0 lg:w-1/2 flex flex-col items-center gap-8">
            <h1 className='pb-3 justify-center items-center font-bold text-xl'>Benefits of joining</h1>
                <p className='flex items-center text-justify leading-8 '><ul>Embarking on our global internship programme comes with a plethora of benefits, including:
                    <li className='list-disc text-justify'>Real Exposure: Gain hands-on experience in a real-world working environment, contributing to your professional development. </li>
                    <li className='list-disc text-justify'>International Internship: Immerse yourself in a cross-cultural experience, working with diverse teams and expanding your global perspective.</li>
                    <li className='list-disc text-justify'>Cultural Awareness: Develop cultural sensitivity and understanding by working in an international setting, fostering a well-rounded professional outlook.</li></ul></p>
            </div>
        </div>
        </>
  )
}

export default Global
