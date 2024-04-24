import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const AccordionItem = ({ id, title, content }) => {
  return (
    <div className='relative w-[400px] bg-[#e3edf7] shadow-md rounded-xl m-[15px] z-1'>
      <input type="checkbox" id={id} className='absolute opacity-0 peer'/>
      <label htmlFor={id} className='flex justify-between items-center font-bold tracking-[1px] mx-[20px] h-[50px] cursor-pointer'>
        {title}
        <div className="w-4 h-7 absolute top-[20px] right-[20px]">
          <ChevronDownIcon />
        </div>
      </label>
      <div className='max-h-0 overflow-hidden duration-200 peer-checked:max-h-[200px]'>
        <p className='p-[20px] text-sm'>
          {content}
        </p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const items = [
    { id: 'input1', title: 'Application Form', content: 'Provide us with your basic information, educational background, and a brief statement of interest.' },
    { id: 'input2', title: 'Submit Relative Documents', content: 'Upload your resume, academic transcripts, and any other supporting documents.' },
    { id: 'input3', title: 'Interview Process', content: 'Shortlisted candidates will undergo an interview process to assess their suitability for the programme.'
     },
    { id: 'input4', title: 'Payment and Visa Procedure', content:
    <ul className='list-disc'>
      <li >
        <p>Payment Information: Successful candidates are required to make a payment to secure their spot in the internship programme. This fee covers administrative costs, support services, and various resources provided during the internship.</p>
      </li>
      
      </ul>  },
    { id: 'input5', title: 'Acceptance', content: 'Congratulations! Successful candidates will receive an offer to join the Talent Connects Company International Internship Programme.' }
  ];

  return (
    <div className='flex flex-col justify-center items-center relative'>
      {items.map(item => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Accordion;
