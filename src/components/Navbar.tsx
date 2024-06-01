"use client"
import Link from 'next/link'
import Search from '@/components/Search'
import SideBarNavbar from '@/components/SideBarNavbar'
import CartSideBar from '@/components/CartSideBar'
import AvatarDropdown from './AvatarDropdown'
import NavigationList from './NavigationList'
import { useEffect, useState } from 'react'
import { AppTitle } from './AppIcon'

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsExpanded(scrollY > 100)
  }
  useEffect(() => {
    window.addEventListener("scroll",handleScroll)
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[])
    return(
        <nav className='w-full fixed top-0 right-0 left-0 bg-white/90 backdrop-blur z-[4000]'>
        <div 
        style={{
          padding: `${isExpanded ? "10px":"14px"} 0`,
          transition: 'padding 0.3s'
          }}
        className={`w-full flexCenter !px-3 sm:!px-6`}>
            <div className='boxWidth flexBetween'>
                {/* burger menu */}
                <div className='w-1/3 block md:hidden'>
                    <SideBarNavbar />
                </div>
                {/* 1 */}
                <div className='w-1/3 md:w-[25%] flex justify-center md:justify-start'>
                  <AppTitle />
                </div>
                <div className='md:flex hidden items-center justify-center gap-8 w-1/2'>
                  <NavigationList /> 
                </div>
                {/* 2 */}
                <div className='w-1/3 md:w-[25%] flex items-center justify-end'>
                    < Search className={`rounded-full`} />
                    <div className='flexCenter gap-2 sm:gap-8 md:gap-5'>
                        <CartSideBar />
                        <AvatarDropdown />
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
