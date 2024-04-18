import Link from "next/link"
import { FiUser } from "react-icons/fi"
import { HiOutlineHeart } from "react-icons/hi2"
import { PiAddressBook } from "react-icons/pi"
import { IoLogOutOutline } from "react-icons/io5"
import UserLabel from "@/components/UserLabel"
import SettingSidebar from "@/components/SettingSidebar"

const SettingLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <section className="md:w-[1024px] w-full mx-auto flex justify-center gap-12 mt-8 relative pb-32 sm:pb-36">
      <aside className="w-[20%] sticky top-20 h-fit hidden md:block">
        <SettingSidebar />
      </aside>
      <div className="w-full sm:basis-[85%] md:basis-[77%] px-3">
        {children}
      </div>
    </section>
  )
}

export default SettingLayout
