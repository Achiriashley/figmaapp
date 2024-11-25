import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardComponent1({image,name}) {
  return (
    <div className="max-w-6xl mx-auto p-6">
  
 

  {/* Categories Grid */}
  <div className="flex space-x-6 overflow-x-auto">
    {/* Single Category */}
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 flex shadow items-center justify-center bg-gray-100 rounded-full border-2 border-blue-600">
       <Link href={`/images`}>
        <Image  
          src={image}
          alt="Mobile"
          className="w-10 h-10 object-contain"
          width={100}
          height={100}
        /> </Link>
      </div>
      <p className="mt-2 text-sm font-medium text-gray-700">{name}</p>
    </div>

   
  </div>
</div>

  )
}

