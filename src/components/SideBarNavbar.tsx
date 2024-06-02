'use client'
import { useEffect, useState } from 'react'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'
import Link from 'next/link'
import {IoIosArrowBack, IoMdSettings} from 'react-icons/io'
import list from '@/assets/sideBarList'
import NavigationList from './NavigationList'
import { Avatar, Button } from '@nextui-org/react'
import { useAuth } from './providers/UserProvider'
import { HiMiniHeart } from 'react-icons/hi2'
import { IoLogOut } from 'react-icons/io5'
import { usePathname } from 'next/navigation'


const SideBarNavbar = () => {
  const [isActive,setIsActive] = useState<boolean>(false)
  const path = usePathname()

  useEffect(() => {
    setIsActive(false)
  },[path])
  return (
    <div className='flex justify-start items-center'>
      <button onClick={() => setIsActive(prev => !prev)}>
        < HiOutlineMenuAlt2 strokeWidth={1.6} className='text-[27px] w-8 text-dark' />
      </button>

      <div onClick={() => setIsActive(prev => !prev)} 
      className={`${isActive ? 'translate-x-0 bg-dark/20' : '-translate-x-full bg-transparent'} 
                  absolute top-0 left-0 w-dvw h-dvh z-[499]`}>
      </div>

      <div className={`${isActive ? 'translate-x-0' : '-translate-x-full'} sidebar-transition 
      absolute top-0 left-0 min-h-dvh w-full shadow-lg xs:w-[320px]
    bg-white py-4 px-5 z-[500]`}>
        {/* header */}
        <div className='flex items-center justify-end'>
          <button onClick={() => setIsActive(prev => !prev)}>
            <MdOutlineClose className='text-[26px] text-dark'/> 
          </button>
        </div>

        {/* content */}
        <NavigationList isMobile />
        <ul className='flex flex-col gap-1 border-t py-2 mt-4'>
          <li>
            <Button 
            as={Link}
            href='/favorite'
            className='flex items-center justify-start group bg-transparent hover:bg-gray-200 py-2 -mx-3 px-2 rounded-xl cursor-pointer text-base'>
              <div className='w-6'>
                <HiMiniHeart className="text-[23px] -ml-[1px] group-hover:text-black text-gray-500" />
              </div>
              <span>Favorite</span>
            </Button>
          </li>
          <li className='flex items-center group hover:bg-red-200 py-2 -mx-3 px-2 rounded-xl cursor-pointer'>
              <div className='w-8'>
                <IoLogOut className="text-[22px] text-gray-500 ml-[2px] -mr-[2px]"/>
              </div>
              <span>Logout</span>
          </li>
        </ul> 

       <div className='absolute bottom-0 left-0 right-0 px-4 '>
        <ProfileLabel />
       </div> 
      </div>
    </div>
  )
}

const ProfileLabel = () => {
  const { user } = useAuth()
  return (
    <div className='flexBetween border-t py-3'>
      <div className="flex items-center gap-2">
        <Avatar src="/avatar.jpg" className="w-[35px] h-[35px]" />
        <div className="flex flex-col">
          <span className="block font-medium truncate max-w-[128px]">{user.name}</span>
          <span className="text-xs text-gray-500">Account</span>
        </div>
      </div>
      <Link href={`/settings/profile`}>
        <IoMdSettings className="text-2xl hover:text-black text-gray-500" />
      </Link>
    </div>

  )
}

export default SideBarNavbar
