import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='bg-gray-100   lg:px-20  lg:py-30 px-10 flex flex-col lg:flex-row lg:gap-x-30'>
         <div className='lg:w-80'>
            <img src={logo} alt="" className='w-32 lg:mb-4' />
             <p className='text-gray-700 text-base/5'>LaslesVPN is a private virtual network that has unique features and has high security</p>
             <div className='space-x-5 mt-5'>
              <i class="fa-brands fa-facebook bg-white p-2 rounded-full ring-1 ring-red-300 text-red-500 text-sm shadow-2xl"></i>
              <i class="fa-brands fa-twitter bg-white p-2 rounded-full ring-1 ring-red-300 text-red-500 text-sm shadow-2xl"></i>
              <i class="fa-brands fa-square-instagram bg-white p-2 rounded-full ring-1 ring-red-300 text-red-500 text-sm shadow-2xl"></i>
              
             </div>
             <p className='mt-7 text-gray-500 font-medium text-base'>&copy;{new Date().getFullYear()}LaslesVPN</p>
         </div>


<div className='lg:flex lg:flex-row justify-between w-full'>
  
         <div>
           <h1>Product</h1>
           <ul>
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
           </ul>
         </div>
           <div>
           <h1>Product</h1>
           <ul>
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
           </ul>
         </div>
           <div>
           <h1>Product</h1>
           <ul>
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
           </ul>
         </div>
</div>
    </div>
  )
}

export default Footer
