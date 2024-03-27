import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
const BottomNav = () => {
  return (
    <div className="flex items-center gap-4 sm:hidden fixed bottom-0 right-0 left-0 z-[500] bg-white px-4 py-3 outline-none">
        <div className='flexCenter'>
            <button className=''>< AiOutlineHeart className='text-3xl text-dark' /></button>
        </div>
        <div className='w-full'>
            <button className='w-full bg-dark text-light py-3 rounded-xl'>Add to cart</button>
        </div>
    </div>
  )
}

export default BottomNav