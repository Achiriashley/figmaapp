import Image from 'next/image'
import React from 'react'
import Link  from 'next/link';


export default function CardComponents2({image,name}) {
  return (
    
      
       
          <div className=" w-full mx-auto  overflow-x-auto">
            <div className="w-full shadow     gap-4">
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
