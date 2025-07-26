import React from 'react';
import image from '../assets/card.png'

const Cards = () => {
  return (
    <section className='grid grid-cols-3 max-lg:grid-cols-1 lg:space-x-20 mt-20 max-lg:space-y-5'>
      <div className='flex flex-col  bg-white border-2 border-gray-500/50 px-10 py-10 rounded-xl'>
          <div className='p-10 max-lg:p-0'>
            <img src={image} alt="" className='w-full max-lg:size-100 object-contain' />
          </div>
             <h1 className='mx-14 font-semibold text-gray-900 max-lg:text-center max-lg:text-2xl'>Free Plan</h1>
             <div className='space-y-5 mt-6 max-lg:mx-auto'>
              <p className='flex gap-x-6'>
                <i class="fa-solid fa-check text-green-500"></i>
                 <span className='text-gray-600'>Unlimited Bandwitch</span>
              </p>
              <p className='flex gap-x-6'><i class="fa-solid fa-check text-green-500"></i>
                 <span className='text-gray-600'>Encrpted Connection</span>
              </p>
              <p className='flex gap-x-6'><i class="fa-solid fa-check text-green-500"></i>
                 <span className='text-gray-600'>No Traffic Logs</span>
              </p>
              <p className='flex gap-x-6'><i class="fa-solid fa-check text-green-500"></i>
                 <span className='text-gray-600'>Works on All Devices</span>
              </p>
             </div>
              <div className='mt-10'>
                <h2 className='text-center text-2xl font-medium text-gray-900'>Free</h2>
                 <div className='flex items-center justify-center'>
                       <button className='px-20 py-3 ring-2 ring-red-500 mt-2 rounded-3xl text-red-500 font-semibold tracking-wider hover:bg-red-300 transition hover:text-white'>select</button>
                 </div>
                 
              </div>
      </div>
          <div className='flex flex-col  bg-white border-2 border-gray-500/50 px-10 py-10 rounded-xl'>
          <div className='p-10 max-lg:p-0'>
            <img src={image} alt="" className='w-full max-lg:size-100 object-contain' />
          </div>
             <h1 className='mx-14 font-semibold text-gray-900 max-lg:text-center max-lg:text-xl'>Standard Plan</h1>
             <div className='space-y-5 mt-6 max-lg:mx-auto'>
              <p className='flex gap-x-6'>
                <i class="fa-solid fa-check text-green-500"></i>
                 <span className='text-gray-600'>Unlimited Bandwitch</span>
              </p>
              <p className='flex gap-x-6'><i class="fa-solid fa-check text-green-500"></i>
                 <span className='text-gray-600'>Encrpted Connection</span>
              </p>
              <p className='flex gap-x-6'><i class="fa-solid fa-check text-green-500"></i>
                 <span className='text-gray-600'>No Traffic Logs</span>
              </p>
              <p className='flex gap-x-6'><i class="fa-solid fa-check text-green-500"></i>
                 <span className='text-gray-600'>Works on All Devices</span>
              </p>
             </div>
              <div className='mt-10'>
                <h2 className='text-center mb-5 text-gray-500 text-lg'><span className=' text-2xl font-medium text-gray-900'>$9</span>/mo</h2>
                 <div className='flex items-center justify-center'>
                       <button className='px-20 py-3 ring-2 ring-red-500 mt-2 rounded-3xl text-red-500 font-semibold tracking-wider hover:bg-red-300 transition hover:text-white'>select</button>
                 </div>
                 
              </div>
      </div>
        <div className='flex flex-col  bg-white border-2 border-red-800 px-10 py-10 rounded-xl'>
          <div className='p-10 max-lg:p-0'>
            <img src={image} alt="" className='w-full max-lg:size-100 object-contain' />
          </div>
             <h1 className='mx-14 font-semibold text-gray-900 max-lg:text-center max-lg:text-xl'>Standard Plan</h1>
             <div className='space-y-5 mt-6 max-lg:mx-auto'>
              <p className='flex gap-x-6'>
                <i class="fa-solid fa-check text-green-500"></i>
                 <span className='text-gray-600'>Unlimited Bandwitch</span>
              </p>
              <p className='flex gap-x-6'><i class="fa-solid fa-check text-green-500"></i>
                 <span className='text-gray-600'>Encrpted Connection</span>
              </p>
              <p className='flex gap-x-6'><i class="fa-solid fa-check text-green-500"></i>
                 <span className='text-gray-600'>No Traffic Logs</span>
              </p>
              <p className='flex gap-x-6'><i class="fa-solid fa-check text-green-500"></i>
                 <span className='text-gray-600'>Works on All Devices</span>
              </p>
             </div>
              <div className='mt-10'>
                <h2 className='text-center mb-5 text-gray-500 text-lg'><span className=' text-2xl font-medium text-gray-900'>$12</span>/mo</h2>
                 <div className='flex items-center justify-center'>
                       <button className='px-20 py-3 ring-2 bg-red-500 mt-2 rounded-3xl text-white font-semibold tracking-wider hover:bg-red-300 transition hover:text-white'>select</button>
                 </div>
                 
              </div>
      </div>
    </section>
  )
}

export default Cards
