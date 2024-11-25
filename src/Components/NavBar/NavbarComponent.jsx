
import Link from 'next/link';
import React from 'react'
import { IoReorderFour,  IoSearch } from "react-icons/io5";
import { IoIosContact,IoMdCart } from "react-icons/io";
export default function NavbarComponent() {
  return (

    <div className="h-[50px] bg-white text-blue-500 flex w-full fixed  top-0 z-20 items-center justify-between px-6 mx-auto    left-0 ">
     <div className="ml-1 flex">
       <Link href="/">
        <IoReorderFour />
         
      </Link>
       <p>MegaMart</p>
    </div>
     
      
      {/* <div>
      <IoSearch />
        <input type="text" 
         
        />
      </div> */}

<div className="flex items-center max-w-md mx-auto bg-blue-100   shadow-md">
  
  <div className="pl-3" >
  <IoSearch color="#f80"/>
   
  </div>

 { /* Input Field */}
  <input
    type="text"
    placeholder="Search essentials grocries and more..."
    className="w-full h-6 bg-blue-100  py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

      
      <div className="flex gap-3  cursor-pointer">
          <div className='flex'>
          <IoIosContact     size={20}/>
          
            <p> Signup/Signin</p>
            </div>
            
          <div className='flex'>
          <IoMdCart   size={20}/> 
          
          <p>cart</p>
          </div>
        </div>
  </div>
      
   
  )
}
