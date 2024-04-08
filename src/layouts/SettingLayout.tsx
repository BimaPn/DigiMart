import Link from "next/link"
import { FiUser } from "react-icons/fi"
import { HiOutlineHeart } from "react-icons/hi2"
import { PiAddressBook } from "react-icons/pi"
import { IoLogOutOutline } from "react-icons/io5"
import UserLabel from "@/components/UserLabel"
import SettingSidebar from "@/components/SettingSidebar"

const SettingLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <section className="boxWidth-md mx-auto min-h-[60vh] flex gap-12 mt-8">
      <aside className="w-[20%]">
        <SettingSidebar />
      </aside>
      <div className="basis-[77%]">
        {children}
      </div>
    </section>
  )
}

export default SettingLayout
