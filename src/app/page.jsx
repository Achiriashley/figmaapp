'use client';
import React from 'react';
import Link from 'next/link';
import NavbarComponent from '@/components/NavBar/NavbarComponent';
// import CardComponent from '@/Components/Card/CardComponent';
 import { products } from '@/tools/dataa';
 import { products2 } from '@/tools/data2';
 import { products3 } from '@/tools/food';
 import { products4 } from '@/tools/box';

import  HeroComponent  from '@/Components/Hero/HeroComponent';
import CardComponent from '@/Components/Card/CardComponent';
import CardComponent1 from '../Components/Card2/CardComponent1';
import FooterComponent from '@/Components/Footer/FooterComponent';
import CardComponents2 from '@/Components/Card3/CardComponents2';
import ElecComponent from '@/Components/Electronics/ElecComponent';



export default function Page() { 
  return (
    <div className="">
     <NavbarComponent />
     <>
     <HeroComponent/>
     <div className="  ">
     <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold">
      Grab the best deal on <span className="text-blue-600">Smartphones</span>
    </h2>
    <a href="#" className="text-blue-600 hover:underline">View All</a>
  </div>
     <div className="h-[100%] w-[100%] flex items-center justify-center p-5   gap-5">
        {products.map((product) =>(
          <CardComponent 
          key={product.id}
          image={product.image} 
          name={product.name} 
          price={product.price}
          slug ={product.slug}
          />
        ))}
        </div></div>
   
        <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold">
      Shop From <span className="text-blue-600">Top Categories</span>
    </h2>
    <a href="#" className="text-blue-600 hover:underline">
      View All
    </a>
  </div>
  <div className="h-[100%] w-[100%] flex items-center justify-center p-5   gap-5">
        {products2.map((product) =>(
          <CardComponent1 
          key={product.id}
          image={product.image} 
          name={product.name} 
          />
        ))}
        </div>

        <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold mb-4">Daily <span className="text-blue-600">Electronics </span></h2>
      </div>
      <div className="h-[100%] w-[100%] flex items-center justify-center p-5   gap-5"> 
        {products4.map((product) =>(
          <ElecComponent 
          key={product.id}
          image={product.image} 
        
          name={product.name} 
          />
        ))}
        </div>


        <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl  font-bold mb-4">Daily <span className="text-blue-600"> Essentials</span></h2>
        <a href="#" className="text-blue-600 hover:underline">
      View All
    </a>
</div> 

        <div className="h-[100%] w-[100%] flex items-center justify-center p-5   gap-5"> 
        {products3.map((product) =>(
          <CardComponents2 
          key={product.id}
          image={product.image} 
          name={product.name} 
          />
        ))}
        </div>
        <FooterComponent/>
     </>
      
  
    </div>
  );
}
