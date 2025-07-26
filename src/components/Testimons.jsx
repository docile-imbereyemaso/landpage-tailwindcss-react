import React from 'react';
import passport from '../assets/passport.png';

const Testimons = () => {
  return (
    <div className='mt-5 grid max-lg:grid-cols-1 lg:grid-cols-3 gap-x-10 mb-5 max-lg:space-y-4 '>
         <div className='border-2 border-red-500 rounded-lg px-5 py-5 transform hover:scale-[1.01] transition duration-300 ease-in-out hover:shadow-2xl shadow-purple-500/50 hover:bg-gray-100/50 '>
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
  )
}

export default Testimons
