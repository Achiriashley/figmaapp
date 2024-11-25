import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ElecComponent({image,name}) {
  return (

     <div className='mx-auto px-4 md:px-8 lg:px-16 overflow-x-auto' >
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
       <Link  href={'/images'}>
       <Image
               src={image}
          
               alt="electronics"
               className="w-100 h-70 object-cover rounded-md"
               width={100}
               height={50}
             />
       </Link>
            </div>
            <div className="p-4">
              <p className="text-gray-500">{name}</p>
            </div>
            </div>
         
       
     
   
  )
}
