import React from 'react';
import map from '../assets/map.png';
import paterners from '../assets/patners.png'

const MapContainer = () => {
  return (
    <div className='mt-15 max-lg:mt-5'>
         <h1 className='text-center text-4xl tracking-wider font-medium  max-lg:text-2xl '>Huge Glogal Network of Fast VPN</h1>
         <p className='text-center mt-4 text-gray-800 text-base '>See <span className='font-medium'>LaslesVPN</span> everywhere to make it easier for you when you move locations</p>

         <div className='mt-10'>
            <img src={map} alt="" />
         </div>

         {/* icons */}
         <div className='mt-5'>
            <div><img src={paterners} alt="" /></div>
         </div>
         <h1 className='text-center text-3xl text-gray-800 font-bold'>Trusted by Thousands of Happy Customer</h1>
         <p className='text-center mt-3 text-gray-700 leading-relaxed'>These are the stories of our customers who have joined us with great pleasure when using this crazy feature</p>
    </div>
  )
}

export default MapContainer
