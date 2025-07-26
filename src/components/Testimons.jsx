import React from 'react';
import passport from '../assets/passport.png';

const Testimons = () => {
  return (
    <> 
   
     
   
     <div className='mt-5 grid max-lg:grid-cols-1 lg:grid-cols-3 gap-x-10 mb-5 max-lg:space-y-4 '>
         <div className='border-2 border-red-500 rounded-lg px-5 py-5 transform hover:scale-[1.01] transition duration-300 ease-in-out shadow-2xl hover:shadow-purple-500/50 hover:bg-gray-100/50 '>
                  <div className='flex gap-x-5'>
                    <div>
                        <img src={passport} alt="" className=' object-center' />
                    </div>
                   
                    <div className='flex  items-center justify-between w-full'>     
                                <div>
                                     <h1 className='font-semibold'>Viezh Robert</h1>
                                     <p className='text-gray-500/80 text-sm'>Warsaw, Poland</p>
                               </div>
                                <div>
                                    <span className='font-light mr-2'>4.5</span>
                                    <i class="fa-solid fa-star text-amber-500 text-sm"></i>
                                </div>
                                
                    </div>
                  </div>
                   <p className='mt-3 text-justify leading-relaxed'>
                    “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                   </p>
         </div>
           <div className='border-2 border-gray-500 rounded-lg px-5 py-5 transform hover:scale-[1.01] transition duration-300 ease-in-out hover:shadow-2xl shadow-purple-500/50 hover:bg-gray-100/50 '>
                  <div className='flex gap-x-5'>
                    <div>
                        <img src={passport} alt="" className=' object-center' />
                    </div>
                   
                    <div className='flex  items-center justify-between w-full'>     
                                <div>
                                     <h1 className='font-semibold'>Viezh Robert</h1>
                                     <p className='text-gray-500/80 text-sm'>Warsaw, Poland</p>
                               </div>
                                <div>
                                    <span className='font-light mr-2'>4.5</span>
                                    <i class="fa-solid fa-star text-amber-500 text-sm"></i>
                                </div>
                                
                    </div>
                  </div>
                   <p className='mt-3 text-justify leading-relaxed'>
                    “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                   </p>
         </div>
            <div className='border-2 border-gray-500 rounded-lg px-5 py-5 transform hover:scale-[1.01] transition duration-300 ease-in-out hover:shadow-2xl shadow-purple-500/50 hover:bg-gray-100/50 lg:min-w-150 lg:pr-50'>
                  <div className='flex gap-x-5'>
                    <div>
                        <img src={passport} alt="" className=' object-center' />
                    </div>
                   
                    <div className='flex  items-center justify-between w-full'>     
                                <div>
                                     <h1 className='font-semibold'>Viezh Robert</h1>
                                     <p className='text-gray-500/80 text-sm'>Warsaw, Poland</p>
                               </div>
                                <div>
                                    <span className='font-light mr-2'>4.5</span>
                                    <i class="fa-solid fa-star text-amber-500 text-sm"></i>
                                </div>
                                
                    </div>
                  </div>
                   <p className='mt-3 text-justify leading-relaxed'>
                    “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                   </p>
         </div>
    </div>

    <div className='mt-15 mb-5 flex justify-between'>
        <div className='flex gap-x-4 items-center'>
            <div className='w-10 h-5 bg-red-500 rounded-3xl '></div>
               <div className='size-3 bg-gray-300 rounded-full'></div>
                 <div className='size-3 bg-gray-300 rounded-full animate-pulse'></div>
                   <div className='size-3 bg-gray-300 rounded-full'></div>
          </div>
          <div className='space-x-10'>
            <i class="fa-solid fa-arrow-left text-red-600 text-lg ring-2 ring-red-500 p-3 rounded-full animate-bounce"></i>
            <i class="fa-solid fa-arrow-right text-white text-lg bg-red-500 p-3 rounded-full animate-spin"></i>
          </div>
    </div>  

    <div className='bg-white shadow-2xl mx-20 mt-10 mb-10 p-10 flex justify-between items-center max-lg:flex-col max-lg:space-y-5 max-lg:w-full max-lg:mx-0 translate-y-30 transform rounded-xl '>
        <div className=' max-w-75'>
          <h1 className='text-3xl font-semibold text-gray-900 mb-4'>Subscribe Now for Get Special Features!</h1>
          <p className='text-gray-500'>Let's subscribe with us and find the fun.</p>
        </div>
        <div>
          <button className='bg-red-500 px-10 py-4 rounded-xl text-white font-semibold hover:bg-red-300 transition duration-300'>Subscribe Now</button>
        </div>
    </div>
    </>
   
  )
}

export default Testimons
