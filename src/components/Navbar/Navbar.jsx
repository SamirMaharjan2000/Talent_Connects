import React, { useState } from "react"
import logo from "../../assets/image/small_logo.png"
import { Bars3BottomRightIcon , XMarkIcon} from '@heroicons/react/24/solid'


const Navbar = () => {
  let Links =[
    {name: 'About Us', path: "/aboutus"},
    {name: 'Products', path: "/products"},
    {name: 'Find Salaries', path: "/salaries"},
    {name: 'Training', path: "/training"},
    {name: 'Employee', path: "/employee"},
    {name: 'Jobseeker', path: "/jobseeker"},
  ]
    let [isOpen,setIsOpen] = useState(false);

  return (
    <div className='shadow-md w-full top-0 left-0 h-24px sticky bg-white z-50' >
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center ">
        {/* logo  */}
        <div className="flex text-2xl cursor-pointer items-center">
          <img src={logo} alt="" />
        </div>

        {/* menu */}
        <div onClick={()=> setIsOpen(!isOpen)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden ">
          {
             isOpen? <XMarkIcon/> : <Bars3BottomRightIcon/>
          }
          
          
        </div> 


        {/* Nav Links */}
        <ul className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static  bg-cyan  md:z-auto z-10  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-20 bg-[#0897C1] 00 bg pt-4 text-white' : 'top-[-490px]'}`}>

          {
            Links.map(link => (
              <li className="font-semibold my-7 md:my-0 md:ml-8">
                <a href="/">{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
