import { Avatar, Button } from "@nextui-org/react"
import Link from "next/link"
import { FiUser } from "react-icons/fi"
import { HiOutlineHeart } from "react-icons/hi2"
import { PiAddressBook } from "react-icons/pi"
import { IoLogOutOutline } from "react-icons/io5"

const SettingLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <section className="boxWidth-md mx-auto min-h-[60vh] flex gap-12 mt-8">
      <aside className="w-[20%]">
        <ul>
          <li className="mb-4 px-2">
            <div className="flex items-center gap-2">
              <Avatar src="/avatar.jpg" className="w-[35px] h-[35px]" />
              <div className="flex flex-col">
                <span className="block font-medium truncate max-w-[128px]">Alexsandre</span>
                <span className="text-xs text-gray-500">Account</span>
              </div>
            </div>
          </li>
          <li>
            <Link href={`/settings/profile`} className="w-full p-2 hover:bg-light flex items-center gap-2 rounded-lg">
            <FiUser className="text-[22px]" />
            My Profile
            </Link>
          </li>
          <li>
            <Link href={`/favorite`} className="w-full p-2 hover:bg-light flex items-center gap-2 rounded-lg">
            <HiOutlineHeart className="text-[22px]" />
            Favorite 
            </Link>
          </li>
          <li>
            <Link href={`/settings/address`} className="w-full p-2 hover:bg-light flex items-center gap-2 rounded-lg">
            <PiAddressBook className="text-[22px]" />
            My Address 
            </Link>
          </li>
          <li className="border-t border-gray-300 mt-3 mb-1"></li>
          <li>
            <Link href={`/settings/address`} className="w-full p-2 pr-[3px] hover:bg-light flex items-center gap-2 rounded-lg">
            <IoLogOutOutline className="text-[22px] ml-[2px] -mr-[2px]" />
            Logout 
            </Link>
          </li>
        </ul>
      </aside>
      <div className="basis-[77%]">
        {children}
      </div>
    </section>
  )
}

export default SettingLayout
