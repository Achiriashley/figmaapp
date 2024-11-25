import Image from 'next/image'
import React from 'react'
import Link  from 'next/link';


export default function CardComponents2({image,name}) {
  return (
    
      
       
          <div className=" mx-auto px-4 md:px-8 lg:px-16 overflow-x-auto">
            <div className=" shadow  grid-cols-1 sm:grid-cols-2   gap-4">
             <div>
                <Link  href={'/images'}>
               <Image
               src={image}
          
               alt="food"
               className="w-100 h-70 object-cover rounded-md"
               width={100}
               height={50}
             />
                </Link>
             </div>
             <div className="p-4">
             <h3 className="mt-4 flex text-sm font-semibold">{name}</h3>
            </div>
            </div>
         </div>
  )
}
