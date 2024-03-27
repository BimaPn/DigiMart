'use client'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'
import list from '@/assets/searchList'
const Search = ({className}:{className:string}) => {
    const [active,setActive] = useState<boolean>(false);
    return(
        <>
        <div className={`${active ? 'absolute top-0 left-0 right-0 px-3 sm:px-8' : 'w-fit'} h-full flexCenter bg-white`}>
            <div className={`${active ? 'boxWidth justify-between' : 'w-fit justify-center'} flex items-center gap-4`}>
                <Link href='/' className={`${active ? 'md:block hidden' : 'hidden'} font-bold text-2xl md:text-3xl`}>Gadget</Link>
                <div className={` ${active ? 'bg-light pr-4 w-[90%] md:w-[512px] width-transition-200 width-transition' : 'w-10 bg-transparent p-0'} ${className} flex items-center justify-between`}>
                    <input type="text" className={`${active ? 'w-full border-0 focus:ring-0 focus:outline-none bg-transparent px-4 py-2' : 'w-0'}`} placeholder='Search' />
                    <button onClick={() => setActive(prev => !prev)}>
                        < FiSearch className='text-[22px]'  />
                    </button>
                </div>
                <button
                onClick={() => setActive(prev => !prev)} 
                className={`${active ? 'scale-100 delay-200 transition-transform duration-300 w-fit' : 'scale-0 w-0'} hover:text-netral`}>
                    Cancel
                </button>
            </div>
        </div>

        <div 
        onClick={() => setActive(prev => !prev)}
        className={`${active ? 'scale-100' : 'scale-0'} sm:block hidden absolute top-[60px] md:top-20 left-0 w-screen h-screen bg-dark/20 sm:backdrop-blur-sm z-0`}>
        </div>
            <div className={`${active ? 'scale-100' : 'scale-0'} w-full h-screen sm:h-fit absolute top-[60px] md:top-20 left-0 pb-14 bg-white z-50`}>
                <div className='w-full md:w-[512px] mx-auto pt-4 px-3 sm:px-8'>
                    <h2 className={`${active ? 'scale-100 delay-300 duration-200' : 'scale-0'} transition-transform text-gray-500 mb-3`}>What are you looking for ?</h2>
                    <ul className={`${active ? 'scale-y-100 delay-700 duration-200' : 'scale-y-0'} origin-top transition-transform text-lg`}>
                        {list.map(item =>(
                            <li key={item} className='mb-2'>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Search