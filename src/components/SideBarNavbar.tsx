'use client'
import { useState } from 'react'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'
import Link from 'next/link'
import {IoIosArrowBack} from 'react-icons/io'
import list from '@/assets/sideBarList'

const SideBarContent = () =>{
  return(
    <div className='mt-8'>
      <ul>
        {list.map(item => (
          <li key={item} className='flexBetween py-2'>
            <span>{item}</span>
            < IoIosArrowBack className='rotate-180' />
          </li>
        ))}
      </ul>
      <Link href='/login' className='w-full bg-dark text-light text-center py-2 rounded-lg block mt-10'>Sign In</Link>
    </div>
  )
}

const SideBarNavbar = () => {
  const [isActive,setIsActive] = useState<boolean>(false)
  return (
    <div className='flex justify-start items-center'>
      <button onClick={() => setIsActive(prev => !prev)}>
        < HiOutlineMenuAlt2 strokeWidth={1.6} className='text-[27px] w-8' />
      </button>

      <div onClick={() => setIsActive(prev => !prev)} 
      className={`${isActive ? 'translate-x-0 backdrop-blur-sm bg-dark/20' : '-translate-x-full backdrop-blur-none bg-transparent'} 
                  absolute top-0 left-0 transitio w-screen h-screen sidebar-background-transition `}>
      </div>

      <div className={`${isActive ? 'translate-x-0' : '-translate-x-full'} sidebar-transition 
      absolute top-0 left-0 min-h-screen w-[75%] shadow-lg xs:w-[320px]
    bg-white p-3 z-[2000]`}>
        {/* header */}
        <div className='flex items-center justify-end'>
          <button onClick={() => setIsActive(prev => !prev)}>
            <MdOutlineClose className='text-[26px]'/> 
          </button>
        </div>

        {/* content */}
        < SideBarContent />
      </div>
    </div>
  )
}

export default SideBarNavbar