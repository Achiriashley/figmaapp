import React from 'react'
import { products } from "@/tools/dataa";
import NavbarComponent from '@/Components/NavBar/NavbarComponent';
import Image from 'next/image';


export default function  ProductPage({params}) {
    const { slug } = React.use(params); 
    const mainProduct = products.find(product => product.slug===slug);
    console.log('main product:',mainProduct)
    const [bigImage, setBigImage] = useState(mainProduct?.image)
   
  return (
    <div>
      <NavbarComponent />
      <div className="flex gap-5 p-5 justify-center">
      
        <div className="w-[10%]  flex flex-col gap-3">
          {products.images.map((image, index) => (
            <Image

              key={index} 
              src={image} 
              alt={`Products ${index + 1}`} 
              width={100} 
              height={100} 
              onMouseOver={() => setBigImage(image)}
              className="w-full h-auto rounded-md object-cover cursor-pointer" 
            />
          ))}
        </div>
         {/* Main Image */}
         <div className="w-2/4">
          <Image
            src={bigImage} 
            alt="Main Product" 
            width={500} 
            height={500} 
            className="w-full h-auto rounded-md object-cover" 
          />
        </div>
         {/* Product Details */}
         <div className="w-1/4 flex flex-col gap-3 lg:sticky mt-28">
          <h1 className="text-3xl font-bold">{mainProduct?.name}</h1>
          <p className="text-gray-600">{mainProduct?.price}</p> 
        </div>
      </div>
    </div>
  )
}
