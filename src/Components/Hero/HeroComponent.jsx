// import React from 'react'
// import { Image } from 'next/image';


// export default function HeroComponents() {
//   return (
//     <div className="h-[40%] w-[100%] bg-violet-950 rounded-lg ">
       
//       <div className=" items-start justify-start">
//             <p className="text-[50px] text-white"> Best Deal Online on Smart watches </p>
//             <h1 className="text-[100px] text-white">SMART WEARABLE.</h1>
//             <p className="text-[50px] text-white"> Up to 80% OFF</p>
//       </div>
//       <div>
//       <div className="items-end justify-end">
//       <Image src="/images/carrousell.png" height={40} width={400} alt='watch' className=" absolute  cursor-pointer"/>
//       <Image src="/images/watcch.png" height={40} width={400} alt='watch' className=" absolute  cursor-pointer"/>
//     </div>
//     </div></div>
//   )
// }
import React from 'react';
import Image from 'next/image';

const BannerComponent = () => {
  return (
    // <div className=' bg-black p-5'>
    // <div className="flex flex-col sm:flex-row items-center justify-between p-6 space-y-6 sm:space-y-0 bg-indigo-900 rounded-lg shadow-lg">
      

    //   <div className="text-container max-w-lg sm:text-left text-center">
    //     <h1 className="text-4xl font-bold mb-4 text-white">Best Deal Online on Smart Watches</h1>
    //     <p className="text-lg mb-6 text-white">
    //       Smart wearable for a better lifestyle
    //     </p>
    //     <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-white transition">
    //       Up to 80% Off
    //     </button>
    //   </div>


    //   <div className="relative w-full sm:w-[400px] h-[300px] sm:h-[300px]">
    //     <Image 
    //       src="/images/watch.png" 
    //       alt="Smart Watch Banner"
    //       layout="intrinsic" 
    //       width={300} 
    //       height={200} 
    //       objectFit="cover" 
    //       className="rounded-lg shadow-md overslow-hidden"
    //     />
    //   </div>

    // </div></div>
    <div className='p-6 w-full'>
    <div className="w-full  relative flex mt-16 z-10  items-center justify-between bg-blue-900 text-white p-5 rounded-lg shadow-lg  max-w-none">
  {/* Left Content */}
  <div className='p-5 w-1/2'>
    <p className="text-sm font-light mb-2">Best Deal Online on smart watches</p>
    <h1 className="text-3xl font-bold">SMART WEARABLE.</h1>
    <p className="text-lg mt-2 font-semibold">UP to 80% OFF</p>
  </div>  
  
  {/* Image Section */}
  <div className="relative">
   
    <Image
      src="/images/watch.png"
      alt="Smart Watch"
      width={100}
      height={100}
      className="w-32 h-32 rounded-lg"
    />
  </div>

  {/* Arrows */}
  <div className="absolute ml-1 left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-900 p-2 rounded-full shadow-md cursor-pointer">
    <span>&lt;</span>
  </div>
  <div className="absolute mr-1 right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-900 p-2 rounded-full shadow-md cursor-pointer">
    <span>&gt;</span>
  </div>
</div>
</div>
  );
};

export default BannerComponent;