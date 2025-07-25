import React from 'react';
import image from '../assets/image.png';
import imageleft from '../assets/image-left.png';
import icons from '../assets/icons.png';


const Top = () => {
  return (
     <main className='mt-20 mr-20 max-lg:mr-0'>
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

       <div className='grid lg:grid-cols-3  shadow-xl  mt-10 py-5 '>
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
      <div className='flex lg:flex-row max-lg:flex-col max-lg:gap-y-5 mt-10 lg:mt-20 shadow-lg py-4 bg-white max-lg:px-2'>
          <div className='lg:p-10'>
              <img src={imageleft} alt="" className='w-full object-cover lg:w-150' />  
             </div>
                <div className='space-y-5 lg:space-y-10'>
        <h1 className='text-5xl font-medium text-gray-800 max-lg:text-3xl'>We provide Many Features You Can Use</h1>
        <p className='text-lg/7 tracking-wide text-gray-500'>You can explore the features that we provide with fun and have their own functions each features</p>
          <ul className='space-y-5 mt-3'>
             <li className='flex items-center text-gray-500 font-medium gap-x-3 group transition ease-in-out'>
               <img src={icons} alt=""  className='size-10 group-hover:grayscale'/>
               <p className='group-hover:text-gray-900/50'>Powerfull online Protection.</p>
             </li>
             <li className='flex items-center text-gray-500 font-medium gap-x-3 group transition ease-in-out'>
               <img src={icons} alt="" className='size-10 group-hover:grayscale'/>
               <p className='group-hover:text-gray-900/50'>Internet without borders.</p>
             </li>
             <li className='flex items-center text-gray-500 font-medium gap-x-3 group transition ease-in-out'>
               <img src={icons} alt="" className='size-10 group-hover:grayscale'/>
               <p className='group-hover:text-gray-900/50'>Supercharged VPN.</p>
             </li>
             <li className='flex items-center text-gray-500 font-medium gap-x-3 group transition ease-in-out'>
               <img src={icons} alt="" className='size-10 group-hover:grayscale'/>
               <p className='group-hover:text-gray-900/50'>No specific time limits.</p>
             </li>
          </ul>
      </div>
             

       </div>
   
   <div className='lg:mt-15 max-lg:mt-10 flex flex-col items-center max-lg:text-xl'> 
      <h1 className='text-3xl font-extrabold text-gray-900 tracking-wide mb-5'>Choose Your Plan</h1>
      <p className='text-gray-500 text-lg leading-relaxed tracking-widest max-lg:text-sm'>Let's choose the package that is best for you and explore it happly an cheerfully</p>
   </div>

     
     </main>
  )
}

export default Top
