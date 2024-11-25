import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

 export default function CardComponent({image,name,price}) {
  return (
    <div className=" ">
  
 
<div className=' max-w-6xl mx-auto p-6'>
  {/* Card Grid */}
  <div className="flex space-x-4 overflow-x-auto">
  {/* Single Card */}
    <div className="border w-full ">
      <div className="relative">
      <Link
              href={`/images`}>
        <Image
          src={image}
          
          alt="Smartphone"
          className="w-32 h-32 object-cover rounded-md"
          width={100}
          height={50}
        />
        </Link>
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
          56% OFF
        </div>
      </div>
      <h3 className="mt-4 text-sm font-semibold">{name}</h3>
      <p className="text-green-600 font-semibold text-sm">{price}</p>
    </div>
</div></div>
</div>
  );
}