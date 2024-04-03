'use client'
import {useState} from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import {MdOutlineStarPurple500} from 'react-icons/md'
import reviews from '@/assets/reviews'

const Reviews = () => {
    const [isDrop,setIsDrop] = useState<boolean>(false);
  return (
    <div>
        <button onClick={() => setIsDrop(prev => !prev)} className='w-full flexBetween border-t py-4 '>
            <span className='text-lg'>Reviews</span>
            < MdOutlineArrowForwardIos className={`transition-all text-base ${isDrop && 'rotate-90'}`}/>
        </button>

        {/* content */}
        <div className={`${isDrop ? 'h-full' : 'h-0'} dropdown-parent-transition overflow-hidden`}>
            <div className={`${isDrop ? 'traslate-y-0' : '-translate-y-full'} origin-top dropdown-transition`}>
                <div className='flex items-center'>
                    <span className='text-4xl font-bold mr-3'>4.9</span>
                    {[1,2,3,4,5].map(itm =>
                        <MdOutlineStarPurple500 key={itm} className={`w-5 text-lg  text-dark`} />
                    )}
                    <span className='ml-2 text-sm md:text-base text-gray-600'>12 Reviews, 24 Q&As</span>
                </div>
                    
                <div className='mt-8'>
                    {reviews.map((item,index) => (
                        <div key={index} className='mb-11'>
                            {/* header */}
                            <div className='flex items-center'>
                                <img src={item.image} className='w-12 aspect-square rounded-full object-cover' alt={item.image} />
                                <div className='ml-3'>
                                    <h1 className='font-bold text-base mb-[2px]'>{item.name}</h1>
                                    <div className='flex items-center'>
                                        {[1,2,3,4,5].map(itm =>
                                            <MdOutlineStarPurple500 key={itm} className={`mr-[2px] w-[14px] text-lg text-dark`} />
                                        )}
                                        <span className='ml-2 text-gray-500 text-sm md:text-base'>{item.timestamp}</span>
                                    </div>
                                </div>
                            </div>
                            {/* reviews */}
                            <p className='leading-7 line-clamp-5 mt-4'>
                                {item.comment}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Reviews
