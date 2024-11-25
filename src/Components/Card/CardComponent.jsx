import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

 export default function CardComponent({image="/fallback-image.png",name,price,slug}) {
  return (
    <div className=" ">
  
 
<div className='flex flex-row w-full'>
  {/* Card Grid */}
  <div className="grid grid-cols-1 w-full    gap-4">
  {/* Single Card */}
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <div className="relative">
      <Link
              href={`/images/${slug}`}>
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