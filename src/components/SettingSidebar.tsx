"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiUser } from "react-icons/fi"
import { HiOutlineHeart } from "react-icons/hi"
import { IoLogOutOutline } from "react-icons/io5"
import { PiAddressBook } from "react-icons/pi"
import UserLabel from "./UserLabel"
import { CgBox } from "react-icons/cg"

const SettingSidebar = () => {
  const pathname = usePathname()
  return (
    <ul>
      <li className="mb-4 px-2">
        <UserLabel />
      </li>
      <li>
        <Link 
        href={`/settings/profile`} 
        className={`w-full p-2 hover:text-dark ${pathname.includes('profile') ? "text-dark":"text-gray-700"} flex items-center gap-2 rounded-lg`}
        >
        <FiUser className="text-[22px]" />
        My Profile
        </Link>
      </li>
      <li>
        <Link 
        href={`/favorite`} 
        className="w-full p-2 hover:text-dark text-gray-700 flex items-center gap-2 rounded-lg"
        >
        <HiOutlineHeart className="text-[22px]" />
        Favorite 
        </Link>
      </li>
      <li>
        <Link 
        href={`/settings/orders`} 
        className={`w-full p-2 hover:text-dark ${pathname.includes('orders') ? "text-dark":"text-gray-700"} flex items-center gap-2 rounded-lg`}
        >
        <CgBox className="text-[19px] ml-[2px] mr-[1px]" />
        Order list 
        </Link>
      </li>
      <li>
        <Link
        href={`/settings/address`}
        className={`w-full p-2 hover:text-dark ${pathname.includes('address') ? "text-dark":"text-gray-700"} flex items-center gap-2 rounded-lg`}
        >
        <PiAddressBook className="text-[22px]" />
        My Address 
        </Link>
      </li>
      <li className="border-t border-gray-300 mt-3 mb-1"></li>
      <li>
        <Link 
        href={`/settings/address`}
        className="w-full p-2 hover:text-dark text-gray-700 flex items-center gap-2 rounded-lg"
        >
        <IoLogOutOutline className="text-[22px] ml-[2px] -mr-[2px]" />
        Logout 
        </Link>
      </li>
    </ul>
  )
}

export default SettingSidebar
