import Image from 'next/image'
import React from 'react'

export default function FooterComponent() {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">MegaMart</h3>
            <p className="mb-4">Contact Us</p>
            <p className="mb-4">Phone: +1 202-415-2132</p>
            <p className="mb-4">Call us: +1 202-915-2132</p>

            <div>
            <h3 className="text-lg font-bold mb-4">Download App</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:opacity-80">
                <Image src="/images/app.png" alt="Apple App Store" width={80} height={80} />
              </a>
              <a href="#" className="hover:opacity-80">
                <Image src="/images/play.png" alt="Google Play Store" width={80} height={80} />
              </a>
            </div>
          </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Most Popular Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Shoes</a></li>
              <li><a href="#" className="hover:underline">Beverages</a></li>
              <li><a href="#" className="hover:underline">Personal Care</a></li>
              <li><a href="#" className="hover:underline">Home Care</a></li>
              <li><a href="#" className="hover:underline">Baby Care</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Esatate Policy</a></li>
              <li><a href="#" className="hover:underline">Cancellation & Return Policy</a></li>
            </ul>
          </div>
          
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2022 All rights reserved. Ashley Retail Ltd.</p>
        </div>
      </div>
    </footer>
  )
}
