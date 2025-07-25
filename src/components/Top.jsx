import React from 'react';
import image from '../assets/image.png'

const Top = () => {
  return (
     <main className='mt-20 flex lg:flex-row max-lg:flex-col max-lg:gap-y-5 '>

      <div className='space-y-5 lg:space-y-10'>
        <h1 className='text-5xl font-medium text-gray-800 max-lg:text-3xl'>Want anything to be easy with <span className='text-gray-900 font-extrabold'>LasleyVPN</span></h1>
        <p className='text-sm/7 tracking-wide text-gray-500'>Provide a network for all your needs with ease and fun using <span className='text-gray-900 font-medium '>LasleyVPN</span> discover interesting features from us.</p>
        <button className='bg-red-600/80 px-15 py-4 rounded-xl hover:bg-red-500/50 transition text-sm font-semibold tracking-wider text-white shadow-2xl shadow-red-600/25'>Get Started</button>
      </div>
             <div>
              <img src={image} alt="" />  
             </div>
     </main>
  )
}

export default Top
