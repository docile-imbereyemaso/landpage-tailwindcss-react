import React from 'react';
import image from '../assets/image.png'

const Top = () => {
  return (
     <main className='mt-20 '>
       <div className='flex lg:flex-row max-lg:flex-col max-lg:gap-y-5 '>
                <div className='space-y-5 lg:space-y-10'>
        <h1 className='text-5xl font-medium text-gray-800 max-lg:text-3xl'>Want anything to be easy with <span className='text-gray-900 font-extrabold'>LasleyVPN</span></h1>
        <p className='text-sm/7 tracking-wide text-gray-500'>Provide a network for all your needs with ease and fun using <span className='text-gray-900 font-medium '>LasleyVPN</span> discover interesting features from us.</p>
        <button className='bg-red-600/80 px-15 py-4 rounded-xl hover:bg-red-500/50 transition text-sm font-semibold tracking-wider text-white shadow-2xl shadow-red-600/25'>Get Started</button>
      </div>
             <div>
              <img src={image} alt="" className='w-full object-cover' />  
             </div>

       </div>

       <div className='grid lg:grid-cols-3  shadow-xl mx-20 mt-10 py-5 max-lg:mx-0'>
              <div className='small-card'>
               <i class="fa-solid fa-user small-card-icon"></i>
               <div>
                   <h1 className='small-card-h1'>90+</h1>
                   <p className='small-card-p'>Users</p>
                
               </div>
          </div>
          <div  className='border-l-2 border-l-gray-500/50 border-r-2 border-r-gray-500/50 small-card'>
                  <i class="fa-solid fa-location-dot small-card-icon"></i>
               <div>
                   <h1 className='small-card-h1'>30+</h1>
                   <p className='small-card-p'>Locations</p>
                
               </div>   
          </div>
          <div className='small-card'>
                 <i class="fa-solid fa-server small-card-icon"></i>
               <div>
                   <h1 className='small-card-h1'>50+</h1>
                   <p className='small-card-p'>Servers</p>
                
               </div>   
          </div>
       </div>
     
     </main>
  )
}

export default Top
