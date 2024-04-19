"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiUser } from "react-icons/fi"
import { HiOutlineHeart } from "react-icons/hi"
import { IoLogOutOutline } from "react-icons/io5"
import { PiAddressBook } from "react-icons/pi"
import UserLabel from "./UserLabel"
import { CgBox } from "react-icons/cg"
import { Tooltip } from "@nextui-org/react"

const SettingSidebar = () => {
  const pathname = usePathname()
  return (
    <ul className="flex flex-col gap-1 md:gap-0">
      <li className="mb-4 px-2">
        <UserLabel className="!hidden md:!flex" />
      </li>
      <OptionItem tooltip="My Profile">
        <Link 
        href={`/settings/profile`} 
        className={`w-full p-2 hover:text-dark ${pathname.includes('profile') ? "text-dark":"text-gray-700"} flex items-center gap-2 rounded-lg`}
        >
          <FiUser className="text-[25px] md:text-[22px]" />
          <span className="hidden md:inline">My Profile</span>
        </Link>
      </OptionItem>

      <OptionItem tooltip="Favorite">
        <Link 
        href={`/favorite`} 
        className="w-full p-2 hover:text-dark text-gray-700 flex items-center gap-2 rounded-lg"
        >
          <HiOutlineHeart className="text-[25px] md:text-[22px]" />
          <span className="hidden md:inline">Favorite</span>
        </Link>
      </OptionItem>

      <OptionItem tooltip="Order List">
        <Link 
        href={`/settings/orders`} 
        className={`w-full p-2 hover:text-dark ${pathname.includes('orders') ? "text-dark":"text-gray-700"} flex items-center gap-2 rounded-lg`}
        >
          <CgBox className="text-[22px] md:text-[19px] ml-[2px] mr-[1px]" />
          <span className="hidden md:inline">Order list</span>
        </Link>
      </OptionItem>

      <OptionItem tooltip="My Addresses">
        <Link
        href={`/settings/address`}
        className={`w-full p-2 hover:text-dark ${pathname.includes('address') ? "text-dark":"text-gray-700"} flex items-center gap-2 rounded-lg`}
        >
          <PiAddressBook className="text-[25px] md:text-[22px]" />
          <span className="hidden md:inline">My Addresses</span>
        </Link>
        </OptionItem>

      <li className="border-t border-gray-300 mt-3 mb-1"></li>
 
      <OptionItem tooltip="Logout">
        <Link 
        href={`/settings/address`}
        className="w-full p-2 hover:text-dark text-gray-700 flex items-center gap-2 rounded-lg"
        >
          <IoLogOutOutline className="text-[25px] md:text-[22px] ml-[2px] -mr-[2px]" />
          <span className="hidden md:inline">Logout</span>
        </Link>
      </OptionItem>
    </ul>
  )
}

const OptionItem = ({children, tooltip}:{children:React.ReactNode, tooltip:string}) => {
  return (
    <li>
      <div className="xs:block md:hidden relative">
        <Tooltip placement="right" content={tooltip}>
          <button>
          {children} 
          </button>
        </Tooltip>
      </div>

      <div className="xs:hidden md:block">
        {children} 
      </div>
    </li>
  )
}

export const MobileSettingNavigation = () => {
  const pathname = usePathname()
  return (
    <div className="border-b mb-4 xs:hidden -mt-2 overflow-x-auto">
      <ul className="flex items-center gap-4 text-gray-600">
        <li>
          <Link 
          href={`/settings/profile`}
          className={`flex items-center gap-[6px] py-2 px-3 ${pathname.includes('profile') && "border-b-2 border-dark text-dark"}`}
          >
            <FiUser className="text-[19px] -mt-[1px]" />
            Profile
          </Link>
        </li>
        <li>
          <Link
          href={`/settings/address`} 
          className={`flex items-center gap-[6px] py-2 px-3 ${pathname.includes('address') && "border-b-2 border-dark text-dark"}`}
          >
            <PiAddressBook className="text-[20px] -mt-[1px]" />
            Address 
          </Link>
        </li>
        <li>
          <Link
          href={`/settings/orders`}
          className={`flex items-center gap-[6px] py-2 px-3 ${pathname.includes('orders') && "border-b-2 border-dark text-dark"}`}
          >
            <CgBox className="text-lg" />
            Order 
          </Link>
        </li>
     </ul>
    </div>
  )
}

export default SettingSidebar
